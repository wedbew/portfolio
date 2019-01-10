(function() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('../cached_site.js')
        });
    }
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30;

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

        $('.bg').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {

        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100;
        lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();


    document.querySelector('#menu-button').addEventListener('click', function() {
        document.querySelector('#mobile-navigation').style.right = "0";
    });

    document.querySelector('#close-mobile').addEventListener('click', function() {
        document.querySelector('#mobile-navigation').style.right = "-200px";
    });

}());


if (window.location.pathname == "/index.html") {
    CookieAlert.init();
    $("#typed").typed({
        strings: [
            "<span class='dark__blue'>const</span> <span class='blue'>programmer</span> = <span class='dark__blue'>new</span> <span class='green'>Developer</span>(<span class='red'>'Marcin'</span>,<span class='red'>'Bawolski'</span>,<span class='red'>'Frontend'</span>);"
        ],
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
        typeSpeed: 40,
        startDelay: 300,
        loop: false,
        showCursor: false,
    });
}

if (window.location.pathname == "/o-mnie.html") {
    if (window.innerWidth < 690) {
        $(window).scroll(function() {
            var topPos = $(this).scrollTop();
            if (topPos > 300) {
                $('#bio').css('opacity', '1');
            } else {
                $('#bio').css('opacity', '0');
            }
        });
    }
}


if (window.location.pathname == "/technologie.html") {
    $('.btn-tech').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var data = $(this).attr('id');
        if (data == 'senior') {
            $('svg').each(function() {
                if ($(this).data('info') == data) {
                    $(this).find('path').addClass(data);
                    $('path').each(function() {
                        $(this).removeClass('mid').removeClass('junior');
                    });
                }
            });
        } else if (data == 'mid') {
            $('svg').each(function() {
                if ($(this).data('info') == data) {
                    $(this).find('path').addClass(data);
                    $('path').each(function() {
                        $(this).removeClass('senior').removeClass('junior');
                    });
                }
            });
        } else if (data == 'junior') {
            $('svg').each(function() {
                if ($(this).data('info') == data) {
                    $(this).find('path').addClass(data);
                    $('path').each(function() {
                        $(this).removeClass('mid').removeClass('senior');
                    });
                }
            });
        } else if (data == 'all') {
            $('path').each(function() {
                $(this).removeClass('junior').removeClass('mid').removeClass('senior');
            });
        }
    });
}


if (window.location.pathname == "/projekty.html") {
    AOS.init();
    var modal = document.querySelector('#modal');
    var modalContent = document.querySelector('#modal__content');
    var figcaption = document.querySelectorAll('figcaption');
    var closeButton = document.querySelector('#close__modal');

    var modalTitle = document.querySelector('#modal__title');
    var modalDescription = document.querySelector('#modal__description');
    var modalLinkTitle = document.querySelector('#modal__link--title');
    var modalLink = document.querySelector('#modal__link');

    var imageCointainer = document.querySelector('#image__container');
    var mainImage = document.querySelector('#main__image');
    var thumbnailContainer = document.querySelector('#thumbnail__container');
    var thumbnail = document.querySelectorAll('.thumbnail');
    var firstImage = document.querySelector('#first__image');
    var secondImage = document.querySelector('#second__image');
    var thirdImage = document.querySelector('#third__image');

    figcaption.forEach(function(element) {
        element.addEventListener('click', function() {


            modalContent.classList.remove('modal__content__unclicked');
            modal.classList.remove('modal__unclicked');
            modal.classList.add('modal__clicked');
            modalContent.classList.add('modal__content__clicked');

            modalTitle.innerText = element.querySelector('.hidden__title').innerText;
            modalDescription.innerText = element.querySelector('.hidden__description').innerText;
            modalLinkTitle.innerText = element.querySelector('.hidden__link--title').innerText;
            modalLink.innerText = element.querySelector('.hidden__link').innerText;
            var pdf = document.createElement('img');
            pdf.setAttribute('src', '/img/pdf.svg');
            pdf.setAttribute('class', 'download__icon');
            var zip = document.createElement('img');
            zip.setAttribute('src', '/img/zip.svg');
            zip.setAttribute('class', 'download__icon');
            var link = document.createElement('img');
            link.setAttribute('src', '/img/link.svg');
            link.setAttribute('class', 'download__icon');
            link.setAttribute('class', 'download__icon--link');
            if (modalLink.innerText == "Renoverend") {
                modalLink.innerText = "";
                var renoverend = document.createElement("a");
                renoverend.setAttribute('href', '/download/Renoverend.pdf');
                renoverend.setAttribute('download', '');
                renoverend.setAttribute('class', 'modal__link__download');
                var renoverendContent = document.createTextNode('Renoverend');
                renoverend.appendChild(renoverendContent);
                modalLink.appendChild(renoverend);
                modalLink.insertBefore(pdf, renoverend);
            } else if (modalLink.innerText == "Wiltex") {
                modalLink.innerText = "";
                var wiltex = document.createElement("a");
                wiltex.setAttribute('href', '/download/Wiltex.pdf');
                wiltex.setAttribute('download', '');
                wiltex.setAttribute('class', 'modal__link__download');
                var wiltexContent = document.createTextNode('Wiltex');
                wiltex.appendChild(wiltexContent);
                modalLink.appendChild(wiltex);
                modalLink.insertBefore(pdf, wiltex);
            } else if (modalLink.innerText == "Projekt opakowania") {
                modalLink.innerText = "";
                var box = document.createElement("a");
                box.setAttribute('href', '/download/Mockup.zip');
                box.setAttribute('download', '');
                box.setAttribute('class', 'modal__link__download');
                var boxContent = document.createTextNode('Mockup');
                box.appendChild(boxContent);
                modalLink.appendChild(box);
                modalLink.insertBefore(zip, box);
            } else if (modalLink.innerText == "Zniczomaty") {
                modalLink.innerText = "";
                var zniczomaty = document.createElement("a");
                zniczomaty.setAttribute('href', 'http://zniczomaty.com.pl/');
                zniczomaty.setAttribute('target', '_blank');
                zniczomaty.setAttribute('class', 'modal__link__download');
                var zniczomatyContent = document.createTextNode('www.zniczomaty.pl');
                zniczomaty.appendChild(zniczomatyContent);
                modalLink.appendChild(zniczomaty);
                modalLink.insertBefore(link, zniczomaty);
            } else if (modalLink.innerText == "Edutoria") {
                modalLink.innerText = "";
                var edutoria = document.createElement("a");
                edutoria.setAttribute('href', 'http://edutoria.pl/');
                edutoria.setAttribute('target', '_blank');
                edutoria.setAttribute('class', 'modal__link__download');
                var edutoriaContent = document.createTextNode('www.edutoria.pl');
                edutoria.appendChild(edutoriaContent);
                modalLink.appendChild(edutoria);
                modalLink.insertBefore(link, edutoria);
            }

            thumbnail.forEach(function(img) {
                img.addEventListener('click', function() {
                    mainImage.style.opacity = "0";
                    setTimeout(function() {
                        mainImage.src = img.children[0].src;
                        mainImage.style.opacity = "1";
                    }, 300);
                });
            });


            if (element.querySelector('.hidden__title').innerText == "Annas Pflegedienst") {
                document.querySelector('#modal__content').classList.add('modal__content--video');
                var annas = document.createElement("iframe");
                annas.setAttribute('src', 'https://www.youtube.com/embed/BjS0cwt2mdI');
                annas.setAttribute('id', 'annas');
                annas.setAttribute('class', 'modal__video');
                annas.setAttribute('frameborder', '0');
                annas.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
                annas.setAttribute('allowfullscreen', '');
                imageCointainer.appendChild(annas);
                document.querySelector('#annas').style.display = "block";
                mainImage.style.display = "none";
                thumbnailContainer.style.display = "none";
                annas.style.height = width / 1.77 + "px";
            } else if (element.querySelector('.hidden__title').innerText == "Animacja") {
                document.querySelector('#modal__content').classList.add('modal__content--video');
                var animation = document.createElement("iframe");
                animation.setAttribute('src', 'https://www.youtube.com/embed/i4bT-exOPJ0');
                animation.setAttribute('id', 'animation');
                animation.setAttribute('class', 'modal__video');
                animation.setAttribute('frameborder', '0');
                animation.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
                animation.setAttribute('allowfullscreen', '');
                imageCointainer.appendChild(animation);
                document.querySelector('#animation').style.display = "block";
                mainImage.style.display = "none";
                thumbnailContainer.style.display = "none";
            } else {
                mainImage.src = 'img/' + element.querySelector('.hidden__title').innerText + '/1.jpg';
                firstImage.src = 'img/' + element.querySelector('.hidden__title').innerText + '/1.jpg';
                secondImage.src = 'img/' + element.querySelector('.hidden__title').innerText + '/2.jpg';
                thirdImage.src = 'img/' + element.querySelector('.hidden__title').innerText + '/3.jpg';
            }
        });
    });

    closeButton.addEventListener('click', function() {
        modalContent.classList.add('modal__content__unclicked');
        modal.classList.add('modal__unclicked');
        setTimeout(function() {
            modal.classList.remove('modal__clicked');
            modalContent.classList.remove('modal__content__clicked');
        }, 400);
        thumbnailContainer.style.display = "flex";
        mainImage.style.display = "block";
        thumbnailContainer.style.display = "flex";
        document.querySelector('#modal__content').classList.remove('modal__content--video');
        if (document.querySelector('#animation')) {
            document.querySelector('#animation').remove();
        };
        if (document.querySelector('#annas')) {
            document.querySelector('#annas').remove();
        }
        thirdImage.parentElement.style.display = "block";
    });

}


if (window.location.pathname == "/kontakt.html") {
    $('#msgSubmit').hide();
    $("#contactForm").submit(function(event) {
        event.preventDefault();
        submitForm();
    });

    function submitForm() {
        var name = $("#nameInput").val();
        var email = $("#emailInput").val();
        var org = $("#orgInput").val();
        var msg = $("#messageInput").val();

        $.ajax({
            type: "POST",
            url: "php/contactform.php",
            data: "name=" + name + "&email=" + email + "&org=" + org + "&msg=" + msg,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                }
            }
        });
    }

    function formSuccess() {
        $('#msgSubmit').css('display', 'block');
        $('#msgSubmit').hide();
        $("#msgSubmit").fadeIn(1000);
        $("#nameInput").val("");
        $("#emailInput").val("");
        $("#orgInput").val("");
        $("#messageInput").val("");
    }
}