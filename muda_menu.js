$(window).scroll(function() { 
            var scroll = $(window).scrollTop();
            if (scroll > 870) {
                $('.link').addClass('link_2');
                $('#logo_desk').attr('src', 'img/logo_envida_cinza.svg');
                $('.container_cabecalho').addClass('container_cabecalho_2');
                $('.whats, .tel').addClass('cor_2');
                
            } else {
                $('.link').removeClass('link_2');
                $('#logo_desk').attr('src', 'img/logo_envida.svg');
                $('.container_cabecalho').removeClass('container_cabecalho_2');
                $('.whats, .tel').removeClass('cor_2');
            }
        
            if (scroll > 2830) {
                $('.whats, .tel').removeClass('cor_2');
                $('#logo_desk').attr('src', 'img/logo_envida.svg');
                $('.link').removeClass('link_2');
            }
        
            if (scroll > 3950) {
                $('.link').addClass('link_2');
                $('#logo_desk').attr('src', 'img/logo_envida_cinza.svg');
                $('.container_cabecalho').addClass('container_cabecalho_2');
                $('.whats, .tel').addClass('cor_2');
            }
        
        });



