// $(function(){
//     let $list = $('ul');
//     let $newItemForm = $('.list-flex');
  
//     $newItemForm.on('submit', function(e) {
//       e.preventDefault();
//       let text = $('input[type="text"]').val();
//       console.log(text)
//       $list.append(`<li>${text}</li>`);
//       $('input[type="text"]').val('');
//     });
  
//     $list.on('click', 'li', function() {
//       let $this = $(this);
//       $this.remove();
//     });
  
//   });

function addText(){
    var text = $("#myInput").val();
    console.log(text)
    var a = document.createElement('li');
    a.innerHTML = text;
    document.getElementById("uList").appendChild(a);
    console.log("text was added")
}
let $list = $('ul')

function check() {
    $list.on('click', 'li', function() {
let $this = $(this);
$this.remove();
    });
}