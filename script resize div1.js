f_BodyOnLoad();

function f_BodyOnLoad() {
   let el = document.querySelector("#div1");
   let elParent = document.querySelector("#app1");
   let kursOnEl = 0;

   let handlerMove = function(event){
      event.preventDefault();


      let elParentOffsetBottom = (elParent.offsetTop+ elParent.offsetHeight);
      elParent.style.height = elParentOffsetBottom  - (event.clientY-el.offsetTop - kursOnEl)+"px";


      //const styles = window.getComputedStyle(elParent); // получаем все стили элемента
      const maxHeight = window.getComputedStyle(elParent).getPropertyValue('max-height').replace('%','')/100*elParent.parentElement.offsetHeight;
      console.log(maxHeight);

   }

   let handlerUp = function(event, ){
      document.removeEventListener( "mousemove" , handlerMove, false);

      console.log("MouseUp");

      document.querySelector("#input1").blur();


      (function setHeight(){
         const maxHeight = window.getComputedStyle(elParent).getPropertyValue('max-height').replace('%','')/100*elParent.parentElement.offsetHeight;

         if (elParent.offsetHeight<parseInt(maxHeight)/4){
            elParent.style.height=elParent.style.minHeight;
         }
         else if (parseInt(maxHeight)/4<=elParent.offsetHeight && elParent.offsetHeight<parseInt(maxHeight)/1.25){
            elParent.style.height=parseInt(maxHeight)/2+"px";
         }
         else if (parseInt(maxHeight)/1.25<=elParent.offsetHeight){
            elParent.style.height=parseInt(maxHeight)+"px";
         }
      })()
      document.removeEventListener( "mouseup" , handlerUp, false);
   }

   let handlerDown = function(event){
      event.preventDefault();

      document.addEventListener( "mousemove" , handlerMove, false);
      document.addEventListener( "mouseup" , handlerUp, false);


      kursOnEl = event.clientY-elParent.offsetTop - el.offsetTop;

      console.log("MouseDown");
   }

   el.addEventListener( "mousedown" , handlerDown, false);


   let handlerMoveTouch = function(_event){
      event = _event.touches[0];
      //event.preventDefault();
      console.log(event.touches);


      let elParentOffsetBottom = (elParent.offsetTop+ elParent.offsetHeight);
      elParent.style.height = elParentOffsetBottom  - (event.clientY-el.offsetTop - kursOnEl)+"px";

   }

   let handlerUpTouch = function(_event, ){
      event = _event.touches[0];

      document.removeEventListener( "touchmove" , handlerMoveTouch, false);

      console.log("MouseUp");

      document.querySelector("#input1").blur();
      (function setHeight(){
         const maxHeight = window.getComputedStyle(elParent).getPropertyValue('max-height').replace('%','')/100*elParent.parentElement.offsetHeight;

         if (elParent.offsetHeight<parseInt(maxHeight)/4){
            elParent.style.height=elParent.style.minHeight;
         }
         else if (parseInt(maxHeight)/4<=elParent.offsetHeight && elParent.offsetHeight<parseInt(maxHeight)/1.25){
            elParent.style.height=parseInt(maxHeight)/2+"px";
         }
         else if (parseInt(maxHeight)/1.25<=elParent.offsetHeight){
            elParent.style.height=parseInt(maxHeight)+"px";
         }
      })()
      document.removeEventListener( "touchend" , handlerUpTouch, false);
   }

   let handlerDownTouch = function(_event){
      event = _event.touches[0];
      //event.preventDefault();

      document.addEventListener( "touchmove" , handlerMoveTouch, false);
      document.addEventListener( "touchend" , handlerUpTouch, false);


      kursOnEl = event.clientY-elParent.offsetTop - el.offsetTop;

      console.log("MouseDown");
   }

   el.addEventListener( "touchstart" , handlerDownTouch, false);
}
