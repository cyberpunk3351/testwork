function send(){
  var res = '';
  var text = document.getElementById('textarea').value;
  var transl = {A:'А', a:'а', B:'Б', b:'б', V:'В', v:'в', G:'Г', g:'г', 
  D:'Д', d:'д', E:'Е', e:'е', Yo:'Ё', yo:'ё', Zh:'Ж', zh:'ж', Z:'З', z:'з', 
  I:'И', i:'и', J:'Й', j:'й', K:'К', k:'к', L:'Л', l:'л', M:'М', m:'м', 
  N:'Н', n:'н', O:'О', o:'о', P:'П', p:'п', R:'Р', r:'р', S:'С', s:'с', 
  T:'Т', t:'т', U:'У', u:'у', F:'Ф', f:'ф', H:'Х', h:'х', Cz:'Ц', cz:'ц', 
  Ch:'Ч', ch:'ч', Sh:'Ш', sh:'ш', Shh:'Щ', shh:'щ', E:'Э', e:'э', Yu:'Ю', yu:'ю', Ya:'Я', ya:'я', 

  А:'A', а:'a', Б:'B', б:'b', В:'V', в:'v', Г:'G', г:'g',
  Д:'D', д:'d', Е:'E', е:'e', Ё:'Yo', ё:'yo', Ж:'Zh', ж:'zh', З:'Z', з:'z',
  И:'I', и:'i', Й:'J', й:'j', К:'K', к:'k', Л:'L', л:'l', М:'M', м:'m',
  Н:'N', н:'n', О:'O', о:'o', П:'P', п:'p', Р:'R', р:'r', С:'S', с:'s',
  Т:'T', т:'t', У:'U', у:'u', Ф:'F', ф:'f', Х:'H', х:'h', Ц:'Cz', ц:'cz',
  Ч:'Ch', ч:'ch', Ш:'Sh', ш:'sh', Щ:'Shh', щ:'shh', Ъ:'"', ъ:'"', Ы:'Y\'', ы:'y\'',
  Ь:'\'', ь:'\'', Э:'E', э:'e', Ю:'Yu', ю:'yu', Я:'Ya', я:'ya', ' ':'_',};
  
  for(i=0;i<text.length;i++) {
      if(transl[text[i]]!=undefined) res += transl[text[i]];
      else res += text[i];
  }
  res = res.replace(/Cz(?=i|e|y|j|I|E|Y|J)/g, "C");
  res = res.replace(/cz(?=i|e|y|j|I|E|Y|J)/g, "c");
  document.getElementById('textarea').value = res;
  }
