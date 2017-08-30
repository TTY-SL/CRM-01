$(function() {

    $('.tab-item').on('click',function() {
        var tabName = $(this).attr('show-tab');
        $(this).addClass('active-item').siblings().removeClass('active-item');
        $('.tab-container__item.' + tabName).addClass('enabled').siblings().removeClass('enabled');
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:'<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style=""><img src="./img/svg/back.svg" ></button>',
        nextArrow:'<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Previous" role="button" style=""><img src="./img/svg/next.svg" ></button>'
    });
    $('.slider-products').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow:'<button type="button" data-role="none" class="arrow-product__left arrow" aria-label="Previous" role="button" style=""><img src="./img/svg/back-silver.svg" ></button>',
        nextArrow:'<button type="button" data-role="none" class="arrow-product__right arrow" aria-label="Previous" role="button" style=""><img src="./img/svg/next-silver.svg" ></button>'
    });
    $('.offer-four__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:'<button type="button" data-role="none" class="arrow-product__prev arrow-big" aria-label="Previous" role="button" style=""><img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAQAAABOBPLeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCBwSJTmTJ+6QAAABXElEQVQ4y43VSVLCQBhA4cfguHJYeAj2apXTKexrOJCAcwmCIImAegpzAbGK6RIewJ3ewgVl0XPSq/zJ+6qTyqJz7/iXACCJ+BUxQJEMK4kIIEHEkM+QdwgAiJIAcmmvRIdQmsK0HZ6UHLb8oE1FmWPh3aFNVZmfRej76JaRB+AGLS6UuTvLXeDRyMv/lzbQ5FKZe/PcBppcafm5POqgoeV9NddBg2s150x/ARk8pOcyqHOjPHmx5XNQ51bLT8ENalr+6spnoMadlp+AG9xr+Zsvt/24HN5VOJ6S50i6s80mH/OxZADQyY5MbACmFFzEDmBikA0GPgATihyaxA1gwoJJfADGJikNfADGLHIgk691lejAJLsqMQGMWXITG4ARy+zbiR3YyFrp0wdgxIqNuAEMbcQHYMgqeypJOx+qRMr8nXpkiYpEzkU/wxknKsQAlEUv4ykqwgR+RBfgD0RPZK/SmmA9AAAAAElFTkSuQmCC" ></button>',
        nextArrow:'<button type="button" data-role="none" class="arrow-product__next arrow-big" aria-label="Previous" role="button" style=""><img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAQAAABOBPLeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCBwSJjohA+zpAAABUElEQVQ4y43VyVHDMBSA4d9K2GbYOYQeXAA7VIGrYBtI2CEMexKGOHRBB1lIoAkKoBMOwYP1JL9Et6f5v5Gti4J3AChSoIRnRWLO/+U1AD+xl0nlRarDgCTvnzCQGArWXKKig9x2h0lWUztrTPDxP4YOgA5TFllPEx+AtkPG6WoA2kyz4iNZwEfG6GoA2sxYZINRehqAlkvCngagxSzLafI9YhMJXLJpExf4SD781AC0mBMklxA/gKYgWwnJAtBkniWLmPBLAxlEA9BkQZDAoK9AbujgjR1rvo1ujJrvirysnSDzu6isfVLDya+1f2iwZ833Se4HMn+IrrRbcvNL7VpjkT/auQQx+3bOhfwAo+RPbp4GMn/m3HeBCag7+RlkgzoH1m4lK+8DNz+FbCDzqpaD4ceaa5yADmIOU/kxDAJQ5wiAl8F58oq+ErA4zBsKvzWkW/zSajQ3AAAAAElFTkSuQmCC" ></button>'
    });
    $('.offer-sliders').slick({
        customPaging : function(slider, i) {
            var count = i + 1;
            var thumb = './img/slider/'+ count + '.png';
            return '<a><img src="'+thumb+'"></a>';
        },
        dots: true,
        prevArrow:'<button type="button" data-role="none" class="arrow-offer__left arrow-big" aria-label="Previous" role="button" style=""><img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAQAAABOBPLeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCBwSJTmTJ+6QAAABXElEQVQ4y43VSVLCQBhA4cfguHJYeAj2apXTKexrOJCAcwmCIImAegpzAbGK6RIewJ3ewgVl0XPSq/zJ+6qTyqJz7/iXACCJ+BUxQJEMK4kIIEHEkM+QdwgAiJIAcmmvRIdQmsK0HZ6UHLb8oE1FmWPh3aFNVZmfRej76JaRB+AGLS6UuTvLXeDRyMv/lzbQ5FKZe/PcBppcafm5POqgoeV9NddBg2s150x/ARk8pOcyqHOjPHmx5XNQ51bLT8ENalr+6spnoMadlp+AG9xr+Zsvt/24HN5VOJ6S50i6s80mH/OxZADQyY5MbACmFFzEDmBikA0GPgATihyaxA1gwoJJfADGJikNfADGLHIgk691lejAJLsqMQGMWXITG4ARy+zbiR3YyFrp0wdgxIqNuAEMbcQHYMgqeypJOx+qRMr8nXpkiYpEzkU/wxknKsQAlEUv4ykqwgR+RBfgD0RPZK/SmmA9AAAAAElFTkSuQmCC" ></button>',
        nextArrow:'<button type="button" data-role="none" class="arrow-offer__right arrow-big" aria-label="Previous" role="button" style=""><img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAQAAABOBPLeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCBwSJjohA+zpAAABUElEQVQ4y43VyVHDMBSA4d9K2GbYOYQeXAA7VIGrYBtI2CEMexKGOHRBB1lIoAkKoBMOwYP1JL9Et6f5v5Gti4J3AChSoIRnRWLO/+U1AD+xl0nlRarDgCTvnzCQGArWXKKig9x2h0lWUztrTPDxP4YOgA5TFllPEx+AtkPG6WoA2kyz4iNZwEfG6GoA2sxYZINRehqAlkvCngagxSzLafI9YhMJXLJpExf4SD781AC0mBMklxA/gKYgWwnJAtBkniWLmPBLAxlEA9BkQZDAoK9AbujgjR1rvo1ujJrvirysnSDzu6isfVLDya+1f2iwZ833Se4HMn+IrrRbcvNL7VpjkT/auQQx+3bOhfwAo+RPbp4GMn/m3HeBCag7+RlkgzoH1m4lK+8DNz+FbCDzqpaD4ceaa5yADmIOU/kxDAJQ5wiAl8F58oq+ErA4zBsKvzWkW/zSajQ3AAAAAElFTkSuQmCC" ></button>'
    });
    $('.bar-burger').on('click', function () {
        $('.nav-container').toggleClass('nav-container__active')
    });
    $('.nav-container__close').on('click', function () {
        $('.nav-container').toggleClass('nav-container__active')

    });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
    var lineLeft = function () {
        if($('.left-line').hasClass('left-line')) {
            var header = $('.left-line').offset().top;
            var footer = $('.question').offset().top;
            var diff = footer - header;
            $('.left-line').css('height', diff)
        }
    }
    $( document ).ready(function() {
        lineLeft()

    });
    $( window ).resize(function() {
        lineLeft()
    });
});
