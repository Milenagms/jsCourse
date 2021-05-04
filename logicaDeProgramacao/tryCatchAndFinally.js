function retornaHora (data){
  if ( data && ! (data instanceof Date)){
    throw new TypeError('Esperando instância de Date');
  }
  if (!data ){
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR',{

  });

}
try{
  const data = new Date('04-05-2021 14:35');
  const hora =retornaHora(data);
  console.log(hora);
}catch (e){
  // tratar erro
}finally{
  console.log('Tenha um bom dia.')
}






// try{
//   //  Executa quando não há erros
// }catch (e){
//   // Executa quando há erros
// } finally {
//   // sempre
// }