let checkMusician = function(musicianName){
  let name = musicianName.toLocaleLowerCase();
  switch(name) {
    case 'dr. dre' || 'dr.dre':
      console.log('rap');
      break;
    case 'doors'||'the doors':
      console.log('rock');
      break;
    default:
      console.log('У нас на раёне такого не слушают');
  }
}
checkMusician('dr. Dre');
checkMusician('Doors');
checkMusician('Pink Floyd');
