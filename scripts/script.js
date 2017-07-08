
          function changeColor(){
             $('#colors li').on('click', function(){
               var color = $(this).data('color');
               var animations = [
                 'animated bounce',
                 'animated jello',
                 'animated rubberBand',
                 'animated rotateIn',
                 'animated zoomIn',
                 'animated pulse'
               ];
               var selectedAnimation = animations[Math.floor(Math.random()*animations.length)];
               
               $(this).addClass(selectedAnimation);

                if(color === 'gray'){
                  $('body').css('background-color', '#e9e9e9');
                }else{
                  $('body').css('background-color', color);
                }

             });
          };

          $(document).ready(changeColor);
