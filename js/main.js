
document.getElementById("close_id").addEventListener("click",()=>{
    document.getElementsByClassName("mini_screen")[0].remove()
})



/*
  //Remover o Anuncio inicial no Blog
  if(Carregado == true){
    document.getElementsByClassName("mini_screen")[0].remove()
    document.getElementsByClassName("Black_screen")[0].remove()
  }
  $scope.CloseFunc = function () {
    document.getElementsByClassName("mini_screen")[0].remove()
    document.getElementsByClassName("Black_screen")[0].remove()
    Carregado = true
  }
  document.addEventListener("keydown",(e)=>{
    if(e.key == 'Escape'){
      document.getElementsByClassName("mini_screen")[0].remove()
      document.getElementsByClassName("Black_screen")[0].remove()
      Carregado = true
    }
  })

*/