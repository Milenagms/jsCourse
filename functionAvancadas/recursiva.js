function recursiva(max){
  if (max >= 10) return;
  max++;
  console.log(max)
  recursiva(max);
}

recursiva(0);
// função parecida com o while só que ela tem um limite.