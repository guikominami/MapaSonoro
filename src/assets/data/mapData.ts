import alavanca from '../audios/alavanca.mp3';
import barao from '../audios/barao.mp3';
import bruxa from '../audios/bruxa.mp3';
import carroca from '../audios/carroca.mp3';
import noiva from '../audios/noiva.mp3';
import padre from '../audios/padre.mp3';

import imgCarroca from '../imgs/map/tales/mapa-conto-carroca.jpg';
import imgBarao from '../imgs/map/tales/mapa-conto-barao.jpg';
import imgBruxas from '../imgs/map/tales/mapa-conto-bruxas.jpg';
import imgPadre from '../imgs/map/tales/mapa-conto-padre.jpg';
import imgIgreja from '../imgs/map/tales/mapa-conto-igreja.jpg';

import imgNoiva from '../imgs/map/tales/mapa-conto-noiva.jpg';

interface MapIcon {
  carroca: MapText;
  noiva: MapText;
}

interface MapText {
  id: string;
  title: string;
  subtitle: string;
  audioUrl: string;
  author: string;
  local: string;
  coordinates: string;
  localUrl: string;
  imageUrl: string;
  tale: string;
}

export const mapImageData: MapIcon = {
  carroca: {
    id: 'carroca',
    title: 'CARROÇA MAL ASSOMBRADA',
    subtitle: '<b>CONTO - CARROÇA MAL ASSOMBRADA</b>, narrado por Valter Lara',
    audioUrl: carroca,
    author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
    local:
      'Avenida Cândido Mariano/Igreja Nossa Senhora da Boa Morte e da Glória (a carroça passa na rua de frente a igreja)',
    coordinates: 'CW42+9R Centro, Cuiabá – MT).',
    localUrl:
      'https://www.google.com.br/maps/place/Igreja+Nossa+Senhora+da+Boa+Morte+e+%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20da+Gl%C3%B3ria/@-15.5942674,-56.0984147,273m/data=!3m1!1e3!4m13!1m7!3m6!1s0x939db%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%201910378c719:0x4067756ed3890321!2sR.+C%C3%A2ndido+Mariano+-+Centro+Norte,+Cuiab%C3%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%A1+-+MT!3b1!8m2!3d-15.5945229!4d-56.0981442!3m4!1s0x939db19aae3c6efb:0x7e59f9e1c%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%206df1b5c!8m2!3d-15.594075!4d-56.0979074',
    imageUrl: imgCarroca,
    tale:
      '(Sons de uma carroça andando pelo espaço. Sons de tosse). Eu devia ter me mudado daqui. (tosse mais ainda) ' +
      'devia ter ido pra outro lugar. Pra fora da Cândido Mariano, de Cuiabá, do Brasil. Sei lá, me candidatava pra lutar ' +
      'na Guerra no Oriente Médio, sei lá... Desde que começou essa pandemia que eu escuto essa carroça passando. ' +
      'Aí fico eu, aqui, doente, preso dentro de casa e recebendo na cabeça a maldição das histórias de minha família. ' +
      'Eu não tive culpa, universo! Eu (tosse mais um pouco) não tive culpa! Não aguento mais, todas as noites... eu, ' +
      'com Covid, tossindo, me faltando o ar e ter que escutar essa carroça relinchando pela porta de minha casa. ' +
      'Minha vó ficava dizendo "se ouvir a carroça, não abra nem a janela e nem a porta, porque dizem que, só com o ' +
      'cheiro dos defuntos que ela carrega, a gente morre."' +
      '<br><br>' +
      'Crendice abestalhada. Esse barulho também deve ser coisa da minha cabeça, certeza. (tosse mais) Eu fraco do juízo ' +
      'com medo de morrer, lembrando das histórias do povo morto depois de varíola. Minha família não teve gente morta, ' +
      'tá entendendo, mundo? Somos uma família forte! Meu avô falava com orgulho: “não perdemos nenhum de nós desde a Rusga. ' +
      'Somos uma das famílias mais bravias do Mato Grosso”. E não vai ser uma gripezinha e um barulho ensurdecer de carroça que ' +
      'vai me matar. (o barulho da carroça continua) Que saber? Eu vou abrir a porta, ver que não tem nada e ficar tranquilo ' +
      'me recuperando. (barulho de porta abrindo. Tosse. Tempo de música junto ao barulho da carroça) - Eu menti, meu tataraneto.' +
      '<br><br>' +
      'Eu menti. Consequentemente, seu bisavô mentiu pro seu avô. - Tata? O senhor tem a mesma voz que eu? - Eu estou falando pela ' +
      'sua cabeça, eu tenho a mesma voz que você. Nossa família sempre mentiu. Vem comigo, que eu vou te apresentar alguns ' +
      'parentes que você precisa conhecer. Sobe aqui na carroça. Vem! - Vou não. Vou nada.' +
      '<br><br>' +
      'Essa carroça é coisa da minha imaginação, ela não tá aí. Vou cair se eu subir. - Sobe. Isso. (comando para a carroça) ' +
      'Pode andar. (carroça volta a andar) Essa doença de agora é nada diante das que a gente já viveu, mas a gente errou ' +
      'em te fazer achar mais forte do que qualquer coisa. Essa carroça carregou muitos de nós, que eram da nossa família, ' +
      'mas nós rejeitamos. Você sabe, naquela época nós nos misturávamos, mas ninguém podia saber.' +
      '<br><br>' +
      'A sociedade Cuiabana era cruel com quem tinha filhos misturados, entende? Se não aparentasse, ficava. Se aparentasse, ' +
      'ia viver por aí... Essa carroça carregou muitos primos teus. E hoje ela carrega o peso de toda nossa sociedade, ' +
      'por isso tamanho barulho. Dobra aqui na igreja, isso. (barulho de carroça dobrando) - (Tosse) Mas eu não tenho culpa. ' +
      'Eu não tenho culpa de tudo que foi feito antes. Não pedi pra ter parente índio, não pedi pra ter parente negro, nunca ' +
      'soube disso e não mereço pagar por isso. Eu não aguento mais esse barulho. Ói, eu vou descer que a gente tá chegando na ' +
      'avenida principal e não quero que ninguém me veja. - Não há ninguém na rua, só a carroça passa. Tá vendo, não? Tudo deserto. ' +
      'Restaurante, ótica, tudo, tudo fechado. Tudo de novo.' +
      'Não mais pelas pedras, mas agora pelo asfalto. Não mais pelas casas coloniais, como a sua rua ainda preservou, mas agora ' +
      'enfurnados em quadrados de apartamentos. Não mais indo pro cemitério, mas para valas abertas com tratores. Pelo andar ' +
      'da nossa cidade, a carroça nunca vai parar de andar. Segura na mão de São Sebastião, Nossa Senhora do Carmo e vem. ' +
      ' -Não vou. -Não tem escolha. Essa é só mais umas desgraceiras que a gente vai ter de pagar. Isso aqui era uma fazendona, sabia? ' +
      'E você só via o povo se escondendo de patrão, de todo mundo pra não ter que ir trabalhar e pegar doença. Na minha época, a ' +
      'maioria que pegou doença foi pobre. Não tinha hospital pra tratar ninguém. Todo mundo andava amontoado nessa carroça, uns nem ' +
      'tinham morrido ainda, mas já era colocado aqui. A hora que ela passava ninguém saia na rua pra não se contaminar. A bexiguinha ' +
      'pegou muita gente. Cê já se contaminou. Cê já tá na carroça. Fica tranquilo que eu vou te levar pro lugar mais calmo que tem. ' +
      '- O Cai-cai, não. Eu não posso ir pra lá. Eu vou me curar. Minha família é de gente forte.',
  },
  noiva: {
    id: 'noiva',
    title: 'NOIVA DE BRANCO',
    subtitle: '<b>CONTO – NOIVA DE BRANCO</b>, narrado por Vini Hoffmann',
    audioUrl: noiva,
    author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
    local: 'Praça da República',
    coordinates: 'CW23+QP Centro Norte, Cuiabá – MT',
    localUrl:
      'https://www.google.com.br/maps/place/Pra%C3%A7a+da+Rep%C3%BAblica/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20@-15.5878235,-56.0895208,14z/data=!4m9!1m2!2m1!1spra%C3%A7a+da+matriz+cuiab%%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20C3%A1!3m5!1s0x939db194f6109615:0x54cb1c928a18496a!8m2!3d-15.5980869!4d-56.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%200956858!15sChhwcmHDp2EgZGEgbWF0cml6IGN1aWFiw6FaGiIYcHJhw6dhIGRhIG1hdHJpei%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20BjdWlhYsOhkgEEcGFya5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VORGRITkVOeTFCUlJBQg',
    imageUrl: imgNoiva,
    tale:
      'Mas casar, minha filha? Você já está pensando nisso? Pense não. Pense não, que você é muito novinha ainda. Você e sua irmã são um tesouro que Deus me deu e eu quero muito que cada uma de vocês aproveitem a vida pá besteira! Se eu gosto de ser casado? Gosto, gosto, mas é bom depois que a gente fica adulto. Quando a gente é jovem, querer casar só faz com que a gente mate nossa melhor época de descobrir as coisas. Vocês nem jovens ainda são.' +
      '<br><br>' +
      'Olhe, a igreja de Senhor Bom Jesus continua praticamente na porta da nossa casa e vai ficar aqui por muito tempo ainda. Eu te prometo que seu casamento quando você for maior será o evento mais lindo que essa Praça da República já viu. Você vai chegar pela 13 de junho em um carro lindo, enorme, vai descer ali nos Correios e lá vai ter uma banda esperando pelo seu desfile.' +
      '<br><br>' +
      'A banda vai tocar pela praça e você vai caminhar com exibição de telão dentro da igreja. Eu vou estar no primeiro degrau da igreja te esperando e você vai ver decoração com tanta flor, mas tanta flor... Agora vai dormir, minha florzinha que sua irmã já tá ali no décimo terceiro sono. Fica com Deus, tá. Até amanhã.' +
      '<br><br>' +
      'O quê? deixar a luz acesa, o quê? Você já é muito grandinha pra ter medo de escuro. (ri um pouco) Medo de quê? De fantasma! Isso é lenda, meu amor. Relaxa e dorme bem. Vou deixar esse abajur ligado somente, tá bem? (barulho de fósforo).' +
      '<br><br>' +
      'Dez da noite já... eitcha! É, seu Francisco, o dia passa rápido. Amanhã essa venda tá cheio de moleque comprando doce. Será que a rua tá muito deserta? (barulho de porta abrindo) Só para as meninas não ficarem sentindo cheiro de cigarro na casa. É Dona Praça, minha filha, pequena, já pensando em casar, pode uma coisa dessa? Eu querendo matricular ela em algum curso legal no Palácio da Instrução e ela querendo pular direto pra igreja. Será que faz mal em sentar um pouquinho a essa hora no banco? Acho que não. Acho que nem ladrão passa aqui essa hora. Tô só e com Deus. (barulho de quem tá soltando fumaça de cigarro. Som de marcha nupcial baixinho ao fundo)' +
      '<br><br>' +
      'É, Chico, tá ficando maluco, né? Aceita, homem, que suas filhas um dia vão crescer e vão casar, mas não pira, né? (o som aumenta um pouco) Ih, para de bestagem, mente, deixa eu fumar meu cigarrinho em paz. (barulho de vento) Agora sim, levo os córno, frio danado. Olhe, deixa eu entrar em casa mesmo que isso aqui parece tá estranho demais. (som de passos) Tem alguém aí? Opa, quem é? Olhe eu sou gente boa, mas não brinco, não, tá? Tenho medo, não. Francisco Martiniano de Araújo, seu Chico da venda, todo mundo me conhece aqui, se acontecer alguma coisa comigo, vai dá ruim.' +
      '<br><br>' +
      'Nem venha me assaltar que eu não tenho nada. Só trouxe meu cigarro. (barulho de vento forte e passos. Barulho de chave pegando para abrir a porta.) (voz de uma mulher) - Quis fazer peraltagem né seu Chico? Uaiiiiiii! Valei meu Cristo do nosso Senhor Bom Jesus! Socorro! (barulho de porta fechada) Meu amor, tinha uma noiva fantasma gigante na porta de casa. Era do tamanho da árvore da praça. Meu Deus, ela tava vestida de véu e grinalda... ai, meu deus, não eu nem vi a cara, eu acho. Ô, minhas filhas, venham cá. Meu deus do céu. Eu tô me tremendo todo. (...) Calma, o quê, gente. Tinha um fantasma gigante na porta de nossa casa. FANTASMA! O quê? Não, não, podem dormir de luz acesa! Sério! E ninguém mais sai de noite nesta casa.',
  },
};

// export const mapImageData: MapIcon[] = [
//   "carroca": {
//     id: 'carroca',
//     title: 'CARROÇA MAL ASSOMBRADA',
//     subtitle: '<b>CONTO - CARROÇA MAL ASSOMBRADA</b>, narrado por Valter Lara',
//     audioUrl: carroca,
//     author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
//     local:
//       'Avenida Cândido Mariano/Igreja Nossa Senhora da Boa Morte e da Glória (a carroça passa na rua de frente a igreja)',
//     coordinates: 'CW42+9R Centro, Cuiabá – MT).',
//     localUrl:
//       'https://www.google.com.br/maps/place/Igreja+Nossa+Senhora+da+Boa+Morte+e+%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20da+Gl%C3%B3ria/@-15.5942674,-56.0984147,273m/data=!3m1!1e3!4m13!1m7!3m6!1s0x939db%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%201910378c719:0x4067756ed3890321!2sR.+C%C3%A2ndido+Mariano+-+Centro+Norte,+Cuiab%C3%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%A1+-+MT!3b1!8m2!3d-15.5945229!4d-56.0981442!3m4!1s0x939db19aae3c6efb:0x7e59f9e1c%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%206df1b5c!8m2!3d-15.594075!4d-56.0979074',
//     imageUrl: imgCarroca,
//     tale:
//       '(Sons de uma carroça andando pelo espaço. Sons de tosse). Eu devia ter me mudado daqui. (tosse mais ainda) ' +
//       'devia ter ido pra outro lugar. Pra fora da Cândido Mariano, de Cuiabá, do Brasil. Sei lá, me candidatava pra lutar ' +
//       'na Guerra no Oriente Médio, sei lá... Desde que começou essa pandemia que eu escuto essa carroça passando. ' +
//       'Aí fico eu, aqui, doente, preso dentro de casa e recebendo na cabeça a maldição das histórias de minha família. ' +
//       'Eu não tive culpa, universo! Eu (tosse mais um pouco) não tive culpa! Não aguento mais, todas as noites... eu, ' +
//       'com Covid, tossindo, me faltando o ar e ter que escutar essa carroça relinchando pela porta de minha casa. ' +
//       'Minha vó ficava dizendo "se ouvir a carroça, não abra nem a janela e nem a porta, porque dizem que, só com o ' +
//       'cheiro dos defuntos que ela carrega, a gente morre."' +
//       '<br><br>' +
//       'Crendice abestalhada. Esse barulho também deve ser coisa da minha cabeça, certeza. (tosse mais) Eu fraco do juízo ' +
//       'com medo de morrer, lembrando das histórias do povo morto depois de varíola. Minha família não teve gente morta, ' +
//       'tá entendendo, mundo? Somos uma família forte! Meu avô falava com orgulho: “não perdemos nenhum de nós desde a Rusga. ' +
//       'Somos uma das famílias mais bravias do Mato Grosso”. E não vai ser uma gripezinha e um barulho ensurdecer de carroça que ' +
//       'vai me matar. (o barulho da carroça continua) Que saber? Eu vou abrir a porta, ver que não tem nada e ficar tranquilo ' +
//       'me recuperando. (barulho de porta abrindo. Tosse. Tempo de música junto ao barulho da carroça) - Eu menti, meu tataraneto.' +
//       '<br><br>' +
//       'Eu menti. Consequentemente, seu bisavô mentiu pro seu avô. - Tata? O senhor tem a mesma voz que eu? - Eu estou falando pela ' +
//       'sua cabeça, eu tenho a mesma voz que você. Nossa família sempre mentiu. Vem comigo, que eu vou te apresentar alguns ' +
//       'parentes que você precisa conhecer. Sobe aqui na carroça. Vem! - Vou não. Vou nada.' +
//       '<br><br>' +
//       'Essa carroça é coisa da minha imaginação, ela não tá aí. Vou cair se eu subir. - Sobe. Isso. (comando para a carroça) ' +
//       'Pode andar. (carroça volta a andar) Essa doença de agora é nada diante das que a gente já viveu, mas a gente errou ' +
//       'em te fazer achar mais forte do que qualquer coisa. Essa carroça carregou muitos de nós, que eram da nossa família, ' +
//       'mas nós rejeitamos. Você sabe, naquela época nós nos misturávamos, mas ninguém podia saber.' +
//       '<br><br>' +
//       'A sociedade Cuiabana era cruel com quem tinha filhos misturados, entende? Se não aparentasse, ficava. Se aparentasse, ' +
//       'ia viver por aí... Essa carroça carregou muitos primos teus. E hoje ela carrega o peso de toda nossa sociedade, ' +
//       'por isso tamanho barulho. Dobra aqui na igreja, isso. (barulho de carroça dobrando) - (Tosse) Mas eu não tenho culpa. ' +
//       'Eu não tenho culpa de tudo que foi feito antes. Não pedi pra ter parente índio, não pedi pra ter parente negro, nunca ' +
//       'soube disso e não mereço pagar por isso. Eu não aguento mais esse barulho. Ói, eu vou descer que a gente tá chegando na ' +
//       'avenida principal e não quero que ninguém me veja. - Não há ninguém na rua, só a carroça passa. Tá vendo, não? Tudo deserto. ' +
//       'Restaurante, ótica, tudo, tudo fechado. Tudo de novo.' +
//       'Não mais pelas pedras, mas agora pelo asfalto. Não mais pelas casas coloniais, como a sua rua ainda preservou, mas agora ' +
//       'enfurnados em quadrados de apartamentos. Não mais indo pro cemitério, mas para valas abertas com tratores. Pelo andar ' +
//       'da nossa cidade, a carroça nunca vai parar de andar. Segura na mão de São Sebastião, Nossa Senhora do Carmo e vem. ' +
//       ' -Não vou. -Não tem escolha. Essa é só mais umas desgraceiras que a gente vai ter de pagar. Isso aqui era uma fazendona, sabia? ' +
//       'E você só via o povo se escondendo de patrão, de todo mundo pra não ter que ir trabalhar e pegar doença. Na minha época, a ' +
//       'maioria que pegou doença foi pobre. Não tinha hospital pra tratar ninguém. Todo mundo andava amontoado nessa carroça, uns nem ' +
//       'tinham morrido ainda, mas já era colocado aqui. A hora que ela passava ninguém saia na rua pra não se contaminar. A bexiguinha ' +
//       'pegou muita gente. Cê já se contaminou. Cê já tá na carroça. Fica tranquilo que eu vou te levar pro lugar mais calmo que tem. ' +
//       '- O Cai-cai, não. Eu não posso ir pra lá. Eu vou me curar. Minha família é de gente forte.',
//   },
//   {
//     id: 'noiva',
//     title: 'NOIVA DE BRANCO',
//     subtitle: '<b>CONTO – NOIVA DE BRANCO</b>, narrado por Vini Hoffmann',
//     audioUrl: noiva,
//     author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
//     local: 'Praça da República',
//     coordinates: 'CW23+QP Centro Norte, Cuiabá – MT',
//     localUrl:
//       'https://www.google.com.br/maps/place/Pra%C3%A7a+da+Rep%C3%BAblica/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20@-15.5878235,-56.0895208,14z/data=!4m9!1m2!2m1!1spra%C3%A7a+da+matriz+cuiab%%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20C3%A1!3m5!1s0x939db194f6109615:0x54cb1c928a18496a!8m2!3d-15.5980869!4d-56.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%200956858!15sChhwcmHDp2EgZGEgbWF0cml6IGN1aWFiw6FaGiIYcHJhw6dhIGRhIG1hdHJpei%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20BjdWlhYsOhkgEEcGFya5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VORGRITkVOeTFCUlJBQg',
//     imageUrl: imgNoiva,
//     tale:
//       'Mas casar, minha filha? Você já está pensando nisso? Pense não. Pense não, que você é muito novinha ainda. Você e sua irmã são um tesouro que Deus me deu e eu quero muito que cada uma de vocês aproveitem a vida pá besteira! Se eu gosto de ser casado? Gosto, gosto, mas é bom depois que a gente fica adulto. Quando a gente é jovem, querer casar só faz com que a gente mate nossa melhor época de descobrir as coisas. Vocês nem jovens ainda são.' +
//       '<br><br>' +
//       'Olhe, a igreja de Senhor Bom Jesus continua praticamente na porta da nossa casa e vai ficar aqui por muito tempo ainda. Eu te prometo que seu casamento quando você for maior será o evento mais lindo que essa Praça da República já viu. Você vai chegar pela 13 de junho em um carro lindo, enorme, vai descer ali nos Correios e lá vai ter uma banda esperando pelo seu desfile.' +
//       '<br><br>' +
//       'A banda vai tocar pela praça e você vai caminhar com exibição de telão dentro da igreja. Eu vou estar no primeiro degrau da igreja te esperando e você vai ver decoração com tanta flor, mas tanta flor... Agora vai dormir, minha florzinha que sua irmã já tá ali no décimo terceiro sono. Fica com Deus, tá. Até amanhã.' +
//       '<br><br>' +
//       'O quê? deixar a luz acesa, o quê? Você já é muito grandinha pra ter medo de escuro. (ri um pouco) Medo de quê? De fantasma! Isso é lenda, meu amor. Relaxa e dorme bem. Vou deixar esse abajur ligado somente, tá bem? (barulho de fósforo).' +
//       '<br><br>' +
//       'Dez da noite já... eitcha! É, seu Francisco, o dia passa rápido. Amanhã essa venda tá cheio de moleque comprando doce. Será que a rua tá muito deserta? (barulho de porta abrindo) Só para as meninas não ficarem sentindo cheiro de cigarro na casa. É Dona Praça, minha filha, pequena, já pensando em casar, pode uma coisa dessa? Eu querendo matricular ela em algum curso legal no Palácio da Instrução e ela querendo pular direto pra igreja. Será que faz mal em sentar um pouquinho a essa hora no banco? Acho que não. Acho que nem ladrão passa aqui essa hora. Tô só e com Deus. (barulho de quem tá soltando fumaça de cigarro. Som de marcha nupcial baixinho ao fundo)' +
//       '<br><br>' +
//       'É, Chico, tá ficando maluco, né? Aceita, homem, que suas filhas um dia vão crescer e vão casar, mas não pira, né? (o som aumenta um pouco) Ih, para de bestagem, mente, deixa eu fumar meu cigarrinho em paz. (barulho de vento) Agora sim, levo os córno, frio danado. Olhe, deixa eu entrar em casa mesmo que isso aqui parece tá estranho demais. (som de passos) Tem alguém aí? Opa, quem é? Olhe eu sou gente boa, mas não brinco, não, tá? Tenho medo, não. Francisco Martiniano de Araújo, seu Chico da venda, todo mundo me conhece aqui, se acontecer alguma coisa comigo, vai dá ruim.' +
//       '<br><br>' +
//       'Nem venha me assaltar que eu não tenho nada. Só trouxe meu cigarro. (barulho de vento forte e passos. Barulho de chave pegando para abrir a porta.) (voz de uma mulher) - Quis fazer peraltagem né seu Chico? Uaiiiiiii! Valei meu Cristo do nosso Senhor Bom Jesus! Socorro! (barulho de porta fechada) Meu amor, tinha uma noiva fantasma gigante na porta de casa. Era do tamanho da árvore da praça. Meu Deus, ela tava vestida de véu e grinalda... ai, meu deus, não eu nem vi a cara, eu acho. Ô, minhas filhas, venham cá. Meu deus do céu. Eu tô me tremendo todo. (...) Calma, o quê, gente. Tinha um fantasma gigante na porta de nossa casa. FANTASMA! O quê? Não, não, podem dormir de luz acesa! Sério! E ninguém mais sai de noite nesta casa.',
//   },
//   {
//     id: 'barao',
//     title: 'PROCISSÃO DAS ALMAS',
//     subtitle:
//       '<b>CONTO – PROCISSÃO DAS ALMAS</b>, narrado por Juliana Graziela',
//     audioUrl: barao,
//     author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
//     local: 'Casa Barão de Melgaço e Academia Mato-grossense de Letras',
//     coordinates: 'CW43+6Q Centro Norte, Cuiabá – MT',
//     localUrl:
//       'https://www.google.com.br/maps/place/Casa+Bar%C3%A3o+de+Melga%C3%A7o+e+%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Academia+Matogrossense+de+Letras/@-15.5944306,-56.0977503,755m/data=!3m2!1e3!%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%204b1!4m5!3m4!1s0x939db19692024c9f:0x6d3f3db284cd18a8!8m2!3d-15.5944486!4d-56.09554',
//     imageUrl: imgBarao,
//     tale:
//       'Vou-me embora! Vou-me embora que minha mãe deve tá doida querendo ligar para a polícia ir atrás da filha. Que tomar a última o quê... nem a última nem a antepenúltima, daqui a pouco cai o maior aguaceiro e eu volto é a pé. Não, é aqui pertinho, faz perigo, não. Cresci nesse comércio. Não precisa me levar que do jeito que cê tá bêbado não vai conseguir nem ligar o acelerador. Ah tá, quer me pedir em namoro agora pra minha mãe? A essa hora? Se minha mãe recebe uma notícia que eu tô de catcho com você nessa hora da madrugada é capaz d’eu virar alma penada antes de amanhecer.' +
//       '<br><br>' +
//       'Não... Quem beijou, beijou, quem não beijou não beija mais. Não, aqui parece comércio, mas o que não falta é fuxiqueira. Se brincar amanhã eu já escuto as véia tudo falando: “sua filha tava lá no posto rebuçando com o povo”. Não, fica aí. Eu vou atravessar a rua e você vai ficar aí. Amanhã a gente se vê. (um barulho de carro passando. Narradora pro carro) Pongó dos infernos! Odeio esse cruzamento. Deus me alumie! Prefiro vir sozinha que um moleque desse tentar fazer bobagem comigo nessa rua deserta. Olha lá, não falei que amanhã de manhã a conversa já vai tá na boca do povo? Não dá pra ver, mas aquela velha ali perto do açaí vive de bituca, parece que não dorme. Eu não sei quem foi que disse que viver em área de comércio é mais sossegado porque não tem vizinho fofoqueiro. Fuxico tem em tudo que é lugar, não tem para onde correr.' +
//       '<br><br>' +
//       'Minha vontade é enfiar ácido na boca dessa véia pra ela nunca mais falar besteira nenhuma. Espia lá, não dá nem pra ver a véia, mas eu sei que ela tá ali. Garrei um ranço desse povo daqui... (som de vento. Sons de passos caminhando pela avenida. Barulho de moto passa. Som de procissão.) “A nós descei divina luz. Em nossas almas acendei o amor, o amor de Jesus. Em nossas almas acendei, o amor, o amoooor de Jesus.” Ê ah! Agora foi que deu, uma hora dessa e em plena Avenida Mato Grosso procissão de um bando de véia como minha mãe fazendo procissão... Ai, eu tô meio bebâda... Dane-se, vou passar pelo meio da procissão e quem quiser falar que fale.' +
//       '<br><br>' +
//       'Ninguém pagou minha bebida. Vou até atravessar a rua. Xô cantar um poquin: “A nós descei divina luz... a nós descei divina luz... em nossas almas acendei o amor...” Mas gente, desde que eu cresci um pouquinho que nunca mais vi procissão aqui. “A nós descei divina luz...” Pra levar as velhas que fuxicam ao pé da cruz... Mas tá cheia demais a essa hora! Eitcha que não acaba de gente, não. Olhe, deixa eu dobrar aqui e entrar em casa logo. (o cântico da procissão vai ficando cada vez mais forte e cada vez mais incompreensível.' +
//       '<br><br>' +
//       'A narradora se esbarra numa velha senhora na porta de sua casa) Arre, o que é senhora. Por favor, solta meu braço que eu quero entrar. Senhora, eu não consigo entender nada que fala. O quê? Pra quê eu vou querer um toco de vela? Não, leva a sua vela pra casa. Olha, senhora, eu quero entrar e não tenho nada a ver com essa procissão. Por favor, me deixa ir. Senhora, eu vou chamar os diabos por aqui se não largar meu braço. Me dê esse toco de vela, vá! Pode me dar. Vai que o diabo te carregue, carola! (barulho de portão abrindo.) Mãe, cheguei, tava tendo uma procissão estranhíssima na avenida.' +
//       '<br><br>' +
//       'Acho que tava seguindo lá pra São Francisco. Tô acabada! E essa vela ainda na minha mão? Ai, deus do céu! Vai dormir debaixo do travesseiro e amanhã eu derreto ela todinha. Antes a garoto na rua que aquele bando de velha. (som de sono. Dia amanhece. Narradora acordando) Hum. mãe? Mãe, tá aí? Tive um sonho estranho ontem à noite. Sonhei que uma velha me trazia um toco de vela e falava umas coisas estranhas. E o pior, sonhei que dormia com ela na minha cam...MÃÃÃÃE? Ai, meu deus, esse osso de gente na minha cama! MÃE???? Socorro! (barulho de procissão)',
//   },
//   {
//     id: 'bruxa',
//     title: 'A BRUXA',
//     subtitle: '<b>CONTO – A BRUXA</b>, narrado por Keilla Borges',
//     audioUrl: bruxa,
//     author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
//     local: 'CINE Bandeirantes / Rua Pedro Celestino',
//     coordinates: 'Cuiabá – MT',
//     localUrl: 'https://goo.gl/maps/AyAsTksGGg14pWGB9',
//     imageUrl: imgBruxas,
//     tale:
//       '(barulho de ônibus estacionando. Pessoas descem do ônibus.) Não vou te esperar coisa nenhuma. Agora quem não quer sou eu, Monqueba. Onde já se viu? E nem venha com história de que foram as mulheres que colocaram isso na sua cabeça que eu não engulo. Você pode até não ter um braço, mas cabeça pra pensar você tem. Não, sem conversa desta vez. Eu vou andando sozinha, sim. E daí que é perigoso? Perigoso é eu dormir contigo todas as noites acreditando em uma coisa e você sendo outra. Sou, sou sim. Escondi, escondi sim, mas isso não chega perto do que você fez. Sei lá, dorme aí no chafariz. Toma banho e cuidado, que, à noite, o que não falta é mulher rondando a praça.' +
//       '<br><br>' +
//       'Não tenho medo de você, só que essa época já passou. (ela dá mais alguns passos e para) Zé Monqueba, Zé monqueba, saia da minha frente agora ou eu vou tirar seu outro braço e te garanto que sou pior que o moedor de cana que te arrancou esse aí. Ah, você se acha muito esperto porque conseguiu... deixa pra lá. Saia da minha frente. Ah, cê quer saber onde eu tava indo? Quer saber mesmo? Eu vou te dizer no dia de São nunca, porque aquele Mocho de pernas pra cima na janela de casa eu nunca vou esquecer.' +
//       '<br><br>' +
//       'Tá entendendo? Logo eu, Monqueba, logo eu, que sempre te fui uma companheira, uma mulher e que te aceitou como é, uma mulher que a única saída é na sexta-feira e passa o resto dos dias trabalhando e cuidando da casa, fazer isso logo comigo, mas não tem nada, não? Fique aqui na rua, agora, que eu vou pra casa é sozinha. Agora, cuidado você, porque nem toda mulher que está pela rua na madrugada é apenas uma mulher. Se você desconfiava de mim, desconfie de todas as que vão passar aí durante a noite. É, não queria receita pra caçar mulher? Pois aprenda agora!' +
//       '<br><br>' +
//       'Aliás, não, venha comigo, venha, volte pra casa que eu vou te explicar o que homem nenhum consegue entender. Venha observando a rua. Tá vendo essa casa de número 69? Tá com cara de abandonada, não é? Pois bem, é para aí onde eu venho toda sexta-feira, mas homem nenhum nunca vai entrar. E vou te contar mais, Cuiabá guarda casas assim em todos os bairros da cidade. Você nunca se perguntou porque tem umas casas que, por mais que a rua esteja toda ajeitadinha, continua abandonada? Sabe este estacionamento aqui? De madrugada, não são carros que estacionam. Você acha mesmo que eu vim morar em uma rua que está quase toda tomada pelo comércio à toa? Observe quantas casas de moradia nós temos aqui. Entra.' +
//       '<br><br>' +
//       'Mudei de ideia. (barulho de porta abrindo e passos dos dois entrando. Escuta-se a voz da narradora um pouco abafada). Você não precisava ter armado isca pra pegar bruxa na porta de casa. Se não for eu, outra será. Eu vou te contar um segredo: toda mulher é bruxa, e as cuiabanas são ótimas bruxas. Toda mulher sabe voar pela noite, sabe saudar o luar e sabe se reencontrar. Agora, eu, a única que cuido de você estou sem um dedo porque você foi dar ouvidos a medrosos de bruxaria! Eu perdi um dedo com o seu medo de que eu fosse Bruxa.' +
//       '<br><br>' +
//       'Pronto, descobriu, sou bruxa! E você está dentro de casa, trancado, comigo. Perdi um dedo com a sua tesoura brilhante na janela, mas eu continuo com o resto todo, Manqueba. Inclusive, eu continuo junta à força de todas as Bruxas da Pedro Celestino e se você me perturbar mais, eu chamo o bairro inteiro. E agora, estamos só nós dois. A bruxa e o maneta. Eu sem um dedo, você sem o braço inteiro. Tá a fim de querer saber o que vai ser de você? (risada forte da mulher. Barulho de porta abrindo, passos do marido correndo).',
//   },
//   {
//     id: 'padre',
//     title: 'É O QUE TE VALE – O PADRE',
//     subtitle:
//       '<b>CONTO – É O QUE TE VALE – O PADRE</b>, narrado por Rogério Santana',
//     audioUrl: padre,
//     author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
//     local: 'Igreja Senhor dos Passos',
//     coordinates: 'CW34+QQ Centro Norte, Cuiabá – MT',
//     localUrl:
//       'https://www.google.com.br/maps/place/Igreja+Nosso+Senhor+Dos+Passos/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20@-15.595539,-56.0952855,17z/data=!3m2!4b1!5s0x939db195e6ff8bb1:0xe9c46f1ac20c35a2!%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%204m5!3m4!1s0x939db195dd8bd64b:0x77569e1f869ca83e!8m2!3d-15.5955442!4d-56.0930968',
//     imageUrl: imgPadre,
//     tale:
//       'O PADRE - Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Ámen. Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Ámen. Avé Maria, cheia de graça, o Senhor é convosco, bendita...' +
//       '<br><br>' +
//       'Mas será o benedito. Deus, Deus, Deus, não podia ter arrumado um castigo melhor? Deste jeito eu não vou terminar de rezar o rosário nunca. É bicho na rua, gente que passa, deste jeito não tem morto que pague sua penitência e suma desta Terra. Tô quase desistindo, Senhor. Acho que assumir pra mim ficar vagando aqui perto da igrejinha...' +
//       '<br><br>' +
//       'O NAMORADO - Vamo aqui que é mais silencioso. Aqui na rua de baixo mesmo, é melhor que não passa carro. Vem! Fica tranquila, tem perigo, não. O pessoal costuma assaltar ali na BR, aqui é um esconderijo nosso. O povo morre de medo daqui falando de fantasma. Povo abestalhado. Encosta aqui, isso, delícia...' +
//       '<br><br>' +
//       'O PADRE - Avé Maria, cheia de graça, o Senhor é convosco, bendita...o que foi desta vez, senhor? Não valeu, porquê. Meu pai amado, deste jeito não vou conseguir chegar nem na décima bolinha. Qual foi a de agora, não tem nenhum humano por aqui. (escuta gemidos de um casal abafando a voz) Retiro o que eu disse, mas desta vez, vai ser diferente. Senhor, eu sei que sou um padre, um padre que julgou muito, muito mesmo, mas tem vezes que ou a gente tira os cachorros e solta neles ou a gente não chega no nosso objetivo de vida, no meu caso, de morte mesmo. Eu não queria fazer isso, mas tanto beco pra esses dois namorarem e vem logo pra cá.' +
//       '<br><br>' +
//       'O povo já morre de medo dessa rua, aí vem esses corajosos, sabichões de tudo, os transões da capital... Senhor, na próxima encarnação quero vim assim, destemido, sem medo de fantasma e, pior, de ladrão. Eu vou terminar de rezar esse rosário custe o que custar. Só falta esse rosário para eu subir aos céus e não vai ser uma libertinagem adolescente que vai me tirar do eixo. (ele se aproxima) Eles estão onde? Ah, ali, naquele portãozinho de metal. Já sei, vou devagarzinho, bem devagarzinho, eles não vão me ver... isso.. nossa senhora, o negócio tá quente aqui! Valha-me Deus. Isso é o quê, Senhor? Castigo pra eu ver o que não aproveitei na Terra, é? Castiga mais este padre que passou a vida naquela igrejinha ali entregue a confissões e orações.' +
//       '<br><br>' +
//       'Meu Deus, do céu, esses dois vão ter um troço... Eitcha lasquera, que negócio invocado... Ei, padreco, se concentra no seu objetivo! Ainda hoje sua alma tem que subir... já chega de perambular por beco. Vamos lá, de olhos fechados, em silêncio... (barulho de batidas fortes no portão da venda) (O padre com a voz impostada como a de um “típico” fantasma assustador) Não sabiam que esse beco é propriedade do além, hein? (os dois dão um grito assustado e saem correndo) Não adianta! Eu vou atrás de vocês (eles gritam mais e a voz vai ficando longe. O padre grita) É o que te vale!' +
//       '<br><br>' +
//       'Por que alma do outro mundo não atravessa água. Olhe, esse negócio de fantasma não pular poça d’água acho um saco. Regra demais pra ser morto, eu pensei que a ter menos regra. Meu deus, deixaram roupa no chão. Ei, ei, esqueceram a calcinha da menina aqui, gente! Isso na mão do povo é problema. Ei, ei, pessoal! Agora é que deu, vou ser obrigado a rezar o terço com cheiro de... de... de de... Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
//   },
//   {
//     id: 'igreja',
//     title: 'ALAVANCA DE OURO',
//     subtitle: '<b>CONTO – ALAVANCA DE OURO</b>, narrado por Bruno Botelho',
//     audioUrl: alavanca,
//     author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
//     local:
//       'Paróquia Nossa Senhora do Rosário e São Benedito - Praça do Rosário',
//     coordinates: 'CW35+X7 Baú, Cuiabá – MT',
//     localUrl:
//       'https://www.google.com.br/maps/place/Par%C3%B3quia+Nossa+Senhora+do+Ros%%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20C3%A1rio+e+S%C3%A3o+Benedito/@-15.5950513,-56.0939749,17z/data=!3m1!4b1!4m5!3m4!1%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s0x939db1be01c69033:0xa0b995f1a0d58874!8m2!3d-15.5950977!4d-56.0917383',
//     imageUrl: imgIgreja,
//     tale:
//       'Atenção, amigos, atenção! Escutem esta profecia com muita atenção! Cuiabá aqui se findará! Estou eu, meu povo, EU, a dizer a todos vós que aqui onde tudo começou, será o derradeiro espaço de nossa urbe fundada a partir do sangue de muitos dos povos originários e muitos escravos. É aqui, no Coxipó do ouro que a reluzente pedra fará com que a terra nos engula por toda a usura! Se hoje este território reconhece e nos convoca a rezar por tantos índios e negros que foram escravizados nestes primeiros tempos da invasão dos bandeirantes, Inês é morta e a Terra cobra!' +
//       '<br><br>' +
//       'E o tempo, senhoras e senhores, ah, o tempo, o tempo é muito mais que a nossa história! O tempo é muito mais que nossa memória! A narração deste chão se inicia muito antes da dita fundação! E eu vou contar pra vocês algo que já sucedeu neste pedaço de terra e, mesmo assim, o povo não aprendeu! Se entrar naquela capela verá vestígios barrocos do uso de nosso ouro, do olho que acha belo a construção de impérios a partir da exploração. Antes de hoje, mas não antes da mata, tudo aqui era fazenda, tudo aqui era mamata. Feitor patrão estava na corrida do ouro e empregado que achasse tal pepita e não avisasse, a chibata comia e o coro lambia!' +
//       '<br><br>' +
//       'À esquerda desta cruz havia uma senzala e um escravo que, por algum motivo, dava fidelidade a seu patrão. O patrão queria ouro e o escravo encontrou. A ninguém contou, quer dizer... só para sua mulher. Sua mulher, espantada com a fidelidade do marido a quem só o maltratava, convocou os outros escravos para irem atrás do tal ouro relatado. Revolucionária, ela sabia que entregar o ouro da margem da Prainha para os feitores era assumir de vez a exploração como condição de sua vida. Na manhã seguinte, quando o escravo acordou para entregar sua descoberta ao patrão, estava armada a confusão: “Meu querido marido, perdoe sua esposa, mas se encontraste ouro, primeiro terias que pensar no teu povo.”' +
//       '<br><br>' +
//       'A guerra estava feita. Enquanto os escravizados cavavam sem parar o Tanque do Arnesto em busca de mais ouros, tiros e chicotes ressoavam e dificultavam a vida daqueles que caçavam o achado. Muitos escorregavam ainda mortos pela colina do Rosário, quando não sobrou quase nenhum escravo e era a hora dos feitores se apropriarem da pepita, o chão desta colina se abriu. Havia debaixo de onde hoje é essa igreja um mundaréu de ouro e uma alavanca que empurrava esferas douradas para o céu. Esferas de ouro? Não, meu povo! Esferas de fogo. Não sobrou nenhum feitor pra contar a história.' +
//       '<br><br>' +
//       'A alavanca preciosa guardada pela mãe terra entendia que aquela procura não ia dar em boa coisa. Foi o próprio ouro que incendiou a fundação de nossa cidade. Foi o próprio ouro o Armagedon de Cuiabá. Uma alavanca, senhoras e senhoras, debaixo da terra, promovendo vingança a tanto sangue derrubado. “Meu querido marido, meu nêgo, sangrando te peço, não dê fidelidade a quem só nos presenteou com ataque.” Só sobrou o tal escravo, que chorava ao ver tua mulher descer os córregos da prainha mortinha, mortinha.' +
//       '<br><br>' +
//       'E jurava ali, entre os corpos de brancos e negros, nunca mais trabalhar para quem guerreava. O chão então se fechou, a alavanca de ouro jogou, finalmente, uma esfera de pedra e o homem tornou-se livre e profeta. Hoje, séculos depois, escutem este profeta para que a terra não se repita. Carrego o sangue de meus ancestrais escravizados e profetizo para continuar o seu legado. Cuiabá pode se findar se a guerra pelo capital continuar. Aqui está a cara da cidade, pavimentada com asfalto e carros que rodeiam a praça, mas aqui também está debaixo destas colinas, uma alavanca de ouro, prontinha, prontinha para jogar suas bolas de fogo. Cuidado, no dia que a anhuma cantar, Cuiabá se reconstruirá.',
//   },
// ];
