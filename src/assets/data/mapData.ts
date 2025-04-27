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
  [key: string]: MapTaleText;
}

interface MapBuilding {
  [key: string]: MapBuildingText;
}

interface MapExplanation {
  [key: string]: MapExplanationText;
}

interface MapTaleText {
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

interface MapBuildingText {
  title: string;
  local: string;
  localUrl: string;
  description: string;
}

interface MapExplanationText {
  title: string;
  text: string;
}

export const mapImageData: MapIcon = {
  carroca: {
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
  barao: {
    title: 'PROCISSÃO DAS ALMAS',
    subtitle:
      '<b>CONTO – PROCISSÃO DAS ALMAS</b>, narrado por Juliana Graziela',
    audioUrl: barao,
    author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
    local: 'Casa Barão de Melgaço e Academia Mato-grossense de Letras',
    coordinates: 'CW43+6Q Centro Norte, Cuiabá – MT',
    localUrl:
      'https://www.google.com.br/maps/place/Casa+Bar%C3%A3o+de+Melga%C3%A7o+e+%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Academia+Matogrossense+de+Letras/@-15.5944306,-56.0977503,755m/data=!3m2!1e3!%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%204b1!4m5!3m4!1s0x939db19692024c9f:0x6d3f3db284cd18a8!8m2!3d-15.5944486!4d-56.09554',
    imageUrl: imgBarao,
    tale:
      'Vou-me embora! Vou-me embora que minha mãe deve tá doida querendo ligar para a polícia ir atrás da filha. Que tomar a última o quê... nem a última nem a antepenúltima, daqui a pouco cai o maior aguaceiro e eu volto é a pé. Não, é aqui pertinho, faz perigo, não. Cresci nesse comércio. Não precisa me levar que do jeito que cê tá bêbado não vai conseguir nem ligar o acelerador. Ah tá, quer me pedir em namoro agora pra minha mãe? A essa hora? Se minha mãe recebe uma notícia que eu tô de catcho com você nessa hora da madrugada é capaz d’eu virar alma penada antes de amanhecer.' +
      '<br><br>' +
      'Não... Quem beijou, beijou, quem não beijou não beija mais. Não, aqui parece comércio, mas o que não falta é fuxiqueira. Se brincar amanhã eu já escuto as véia tudo falando: “sua filha tava lá no posto rebuçando com o povo”. Não, fica aí. Eu vou atravessar a rua e você vai ficar aí. Amanhã a gente se vê. (um barulho de carro passando. Narradora pro carro) Pongó dos infernos! Odeio esse cruzamento. Deus me alumie! Prefiro vir sozinha que um moleque desse tentar fazer bobagem comigo nessa rua deserta. Olha lá, não falei que amanhã de manhã a conversa já vai tá na boca do povo? Não dá pra ver, mas aquela velha ali perto do açaí vive de bituca, parece que não dorme. Eu não sei quem foi que disse que viver em área de comércio é mais sossegado porque não tem vizinho fofoqueiro. Fuxico tem em tudo que é lugar, não tem para onde correr.' +
      '<br><br>' +
      'Minha vontade é enfiar ácido na boca dessa véia pra ela nunca mais falar besteira nenhuma. Espia lá, não dá nem pra ver a véia, mas eu sei que ela tá ali. Garrei um ranço desse povo daqui... (som de vento. Sons de passos caminhando pela avenida. Barulho de moto passa. Som de procissão.) “A nós descei divina luz. Em nossas almas acendei o amor, o amor de Jesus. Em nossas almas acendei, o amor, o amoooor de Jesus.” Ê ah! Agora foi que deu, uma hora dessa e em plena Avenida Mato Grosso procissão de um bando de véia como minha mãe fazendo procissão... Ai, eu tô meio bebâda... Dane-se, vou passar pelo meio da procissão e quem quiser falar que fale.' +
      '<br><br>' +
      'Ninguém pagou minha bebida. Vou até atravessar a rua. Xô cantar um poquin: “A nós descei divina luz... a nós descei divina luz... em nossas almas acendei o amor...” Mas gente, desde que eu cresci um pouquinho que nunca mais vi procissão aqui. “A nós descei divina luz...” Pra levar as velhas que fuxicam ao pé da cruz... Mas tá cheia demais a essa hora! Eitcha que não acaba de gente, não. Olhe, deixa eu dobrar aqui e entrar em casa logo. (o cântico da procissão vai ficando cada vez mais forte e cada vez mais incompreensível.' +
      '<br><br>' +
      'A narradora se esbarra numa velha senhora na porta de sua casa) Arre, o que é senhora. Por favor, solta meu braço que eu quero entrar. Senhora, eu não consigo entender nada que fala. O quê? Pra quê eu vou querer um toco de vela? Não, leva a sua vela pra casa. Olha, senhora, eu quero entrar e não tenho nada a ver com essa procissão. Por favor, me deixa ir. Senhora, eu vou chamar os diabos por aqui se não largar meu braço. Me dê esse toco de vela, vá! Pode me dar. Vai que o diabo te carregue, carola! (barulho de portão abrindo.) Mãe, cheguei, tava tendo uma procissão estranhíssima na avenida.' +
      '<br><br>' +
      'Acho que tava seguindo lá pra São Francisco. Tô acabada! E essa vela ainda na minha mão? Ai, deus do céu! Vai dormir debaixo do travesseiro e amanhã eu derreto ela todinha. Antes a garoto na rua que aquele bando de velha. (som de sono. Dia amanhece. Narradora acordando) Hum. mãe? Mãe, tá aí? Tive um sonho estranho ontem à noite. Sonhei que uma velha me trazia um toco de vela e falava umas coisas estranhas. E o pior, sonhei que dormia com ela na minha cam...MÃÃÃÃE? Ai, meu deus, esse osso de gente na minha cama! MÃE???? Socorro! (barulho de procissão)',
  },
  bruxa: {
    title: 'A BRUXA',
    subtitle: '<b>CONTO – A BRUXA</b>, narrado por Keilla Borges',
    audioUrl: bruxa,
    author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
    local: 'CINE Bandeirantes / Rua Pedro Celestino',
    coordinates: 'Cuiabá – MT',
    localUrl: 'https://goo.gl/maps/AyAsTksGGg14pWGB9',
    imageUrl: imgBruxas,
    tale:
      '(barulho de ônibus estacionando. Pessoas descem do ônibus.) Não vou te esperar coisa nenhuma. Agora quem não quer sou eu, Monqueba. Onde já se viu? E nem venha com história de que foram as mulheres que colocaram isso na sua cabeça que eu não engulo. Você pode até não ter um braço, mas cabeça pra pensar você tem. Não, sem conversa desta vez. Eu vou andando sozinha, sim. E daí que é perigoso? Perigoso é eu dormir contigo todas as noites acreditando em uma coisa e você sendo outra. Sou, sou sim. Escondi, escondi sim, mas isso não chega perto do que você fez. Sei lá, dorme aí no chafariz. Toma banho e cuidado, que, à noite, o que não falta é mulher rondando a praça.' +
      '<br><br>' +
      'Não tenho medo de você, só que essa época já passou. (ela dá mais alguns passos e para) Zé Monqueba, Zé monqueba, saia da minha frente agora ou eu vou tirar seu outro braço e te garanto que sou pior que o moedor de cana que te arrancou esse aí. Ah, você se acha muito esperto porque conseguiu... deixa pra lá. Saia da minha frente. Ah, cê quer saber onde eu tava indo? Quer saber mesmo? Eu vou te dizer no dia de São nunca, porque aquele Mocho de pernas pra cima na janela de casa eu nunca vou esquecer.' +
      '<br><br>' +
      'Tá entendendo? Logo eu, Monqueba, logo eu, que sempre te fui uma companheira, uma mulher e que te aceitou como é, uma mulher que a única saída é na sexta-feira e passa o resto dos dias trabalhando e cuidando da casa, fazer isso logo comigo, mas não tem nada, não? Fique aqui na rua, agora, que eu vou pra casa é sozinha. Agora, cuidado você, porque nem toda mulher que está pela rua na madrugada é apenas uma mulher. Se você desconfiava de mim, desconfie de todas as que vão passar aí durante a noite. É, não queria receita pra caçar mulher? Pois aprenda agora!' +
      '<br><br>' +
      'Aliás, não, venha comigo, venha, volte pra casa que eu vou te explicar o que homem nenhum consegue entender. Venha observando a rua. Tá vendo essa casa de número 69? Tá com cara de abandonada, não é? Pois bem, é para aí onde eu venho toda sexta-feira, mas homem nenhum nunca vai entrar. E vou te contar mais, Cuiabá guarda casas assim em todos os bairros da cidade. Você nunca se perguntou porque tem umas casas que, por mais que a rua esteja toda ajeitadinha, continua abandonada? Sabe este estacionamento aqui? De madrugada, não são carros que estacionam. Você acha mesmo que eu vim morar em uma rua que está quase toda tomada pelo comércio à toa? Observe quantas casas de moradia nós temos aqui. Entra.' +
      '<br><br>' +
      'Mudei de ideia. (barulho de porta abrindo e passos dos dois entrando. Escuta-se a voz da narradora um pouco abafada). Você não precisava ter armado isca pra pegar bruxa na porta de casa. Se não for eu, outra será. Eu vou te contar um segredo: toda mulher é bruxa, e as cuiabanas são ótimas bruxas. Toda mulher sabe voar pela noite, sabe saudar o luar e sabe se reencontrar. Agora, eu, a única que cuido de você estou sem um dedo porque você foi dar ouvidos a medrosos de bruxaria! Eu perdi um dedo com o seu medo de que eu fosse Bruxa.' +
      '<br><br>' +
      'Pronto, descobriu, sou bruxa! E você está dentro de casa, trancado, comigo. Perdi um dedo com a sua tesoura brilhante na janela, mas eu continuo com o resto todo, Manqueba. Inclusive, eu continuo junta à força de todas as Bruxas da Pedro Celestino e se você me perturbar mais, eu chamo o bairro inteiro. E agora, estamos só nós dois. A bruxa e o maneta. Eu sem um dedo, você sem o braço inteiro. Tá a fim de querer saber o que vai ser de você? (risada forte da mulher. Barulho de porta abrindo, passos do marido correndo).',
  },
  padre: {
    title: 'É O QUE TE VALE – O PADRE',
    subtitle:
      '<b>CONTO – É O QUE TE VALE – O PADRE</b>, narrado por Rogério Santana',
    audioUrl: padre,
    author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
    local: 'Igreja Senhor dos Passos',
    coordinates: 'CW34+QQ Centro Norte, Cuiabá – MT',
    localUrl:
      'https://www.google.com.br/maps/place/Igreja+Nosso+Senhor+Dos+Passos/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20@-15.595539,-56.0952855,17z/data=!3m2!4b1!5s0x939db195e6ff8bb1:0xe9c46f1ac20c35a2!%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%204m5!3m4!1s0x939db195dd8bd64b:0x77569e1f869ca83e!8m2!3d-15.5955442!4d-56.0930968',
    imageUrl: imgPadre,
    tale:
      'O PADRE - Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Ámen. Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Ámen. Avé Maria, cheia de graça, o Senhor é convosco, bendita...' +
      '<br><br>' +
      'Mas será o benedito. Deus, Deus, Deus, não podia ter arrumado um castigo melhor? Deste jeito eu não vou terminar de rezar o rosário nunca. É bicho na rua, gente que passa, deste jeito não tem morto que pague sua penitência e suma desta Terra. Tô quase desistindo, Senhor. Acho que assumir pra mim ficar vagando aqui perto da igrejinha...' +
      '<br><br>' +
      'O NAMORADO - Vamo aqui que é mais silencioso. Aqui na rua de baixo mesmo, é melhor que não passa carro. Vem! Fica tranquila, tem perigo, não. O pessoal costuma assaltar ali na BR, aqui é um esconderijo nosso. O povo morre de medo daqui falando de fantasma. Povo abestalhado. Encosta aqui, isso, delícia...' +
      '<br><br>' +
      'O PADRE - Avé Maria, cheia de graça, o Senhor é convosco, bendita...o que foi desta vez, senhor? Não valeu, porquê. Meu pai amado, deste jeito não vou conseguir chegar nem na décima bolinha. Qual foi a de agora, não tem nenhum humano por aqui. (escuta gemidos de um casal abafando a voz) Retiro o que eu disse, mas desta vez, vai ser diferente. Senhor, eu sei que sou um padre, um padre que julgou muito, muito mesmo, mas tem vezes que ou a gente tira os cachorros e solta neles ou a gente não chega no nosso objetivo de vida, no meu caso, de morte mesmo. Eu não queria fazer isso, mas tanto beco pra esses dois namorarem e vem logo pra cá.' +
      '<br><br>' +
      'O povo já morre de medo dessa rua, aí vem esses corajosos, sabichões de tudo, os transões da capital... Senhor, na próxima encarnação quero vim assim, destemido, sem medo de fantasma e, pior, de ladrão. Eu vou terminar de rezar esse rosário custe o que custar. Só falta esse rosário para eu subir aos céus e não vai ser uma libertinagem adolescente que vai me tirar do eixo. (ele se aproxima) Eles estão onde? Ah, ali, naquele portãozinho de metal. Já sei, vou devagarzinho, bem devagarzinho, eles não vão me ver... isso.. nossa senhora, o negócio tá quente aqui! Valha-me Deus. Isso é o quê, Senhor? Castigo pra eu ver o que não aproveitei na Terra, é? Castiga mais este padre que passou a vida naquela igrejinha ali entregue a confissões e orações.' +
      '<br><br>' +
      'Meu Deus, do céu, esses dois vão ter um troço... Eitcha lasquera, que negócio invocado... Ei, padreco, se concentra no seu objetivo! Ainda hoje sua alma tem que subir... já chega de perambular por beco. Vamos lá, de olhos fechados, em silêncio... (barulho de batidas fortes no portão da venda) (O padre com a voz impostada como a de um “típico” fantasma assustador) Não sabiam que esse beco é propriedade do além, hein? (os dois dão um grito assustado e saem correndo) Não adianta! Eu vou atrás de vocês (eles gritam mais e a voz vai ficando longe. O padre grita) É o que te vale!' +
      '<br><br>' +
      'Por que alma do outro mundo não atravessa água. Olhe, esse negócio de fantasma não pular poça d’água acho um saco. Regra demais pra ser morto, eu pensei que a ter menos regra. Meu deus, deixaram roupa no chão. Ei, ei, esqueceram a calcinha da menina aqui, gente! Isso na mão do povo é problema. Ei, ei, pessoal! Agora é que deu, vou ser obrigado a rezar o terço com cheiro de... de... de de... Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
  },
  igreja: {
    title: 'ALAVANCA DE OURO',
    subtitle: '<b>CONTO – ALAVANCA DE OURO</b>, narrado por Bruno Botelho',
    audioUrl: alavanca,
    author: 'Dunga Rodrigues | Adaptação do roteiro: Daniel Arcades',
    local:
      'Paróquia Nossa Senhora do Rosário e São Benedito - Praça do Rosário',
    coordinates: 'CW35+X7 Baú, Cuiabá – MT',
    localUrl:
      'https://www.google.com.br/maps/place/Par%C3%B3quia+Nossa+Senhora+do+Ros%%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20C3%A1rio+e+S%C3%A3o+Benedito/@-15.5950513,-56.0939749,17z/data=!3m1!4b1!4m5!3m4!1%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s0x939db1be01c69033:0xa0b995f1a0d58874!8m2!3d-15.5950977!4d-56.0917383',
    imageUrl: imgIgreja,
    tale:
      'Atenção, amigos, atenção! Escutem esta profecia com muita atenção! Cuiabá aqui se findará! Estou eu, meu povo, EU, a dizer a todos vós que aqui onde tudo começou, será o derradeiro espaço de nossa urbe fundada a partir do sangue de muitos dos povos originários e muitos escravos. É aqui, no Coxipó do ouro que a reluzente pedra fará com que a terra nos engula por toda a usura! Se hoje este território reconhece e nos convoca a rezar por tantos índios e negros que foram escravizados nestes primeiros tempos da invasão dos bandeirantes, Inês é morta e a Terra cobra!' +
      '<br><br>' +
      'E o tempo, senhoras e senhores, ah, o tempo, o tempo é muito mais que a nossa história! O tempo é muito mais que nossa memória! A narração deste chão se inicia muito antes da dita fundação! E eu vou contar pra vocês algo que já sucedeu neste pedaço de terra e, mesmo assim, o povo não aprendeu! Se entrar naquela capela verá vestígios barrocos do uso de nosso ouro, do olho que acha belo a construção de impérios a partir da exploração. Antes de hoje, mas não antes da mata, tudo aqui era fazenda, tudo aqui era mamata. Feitor patrão estava na corrida do ouro e empregado que achasse tal pepita e não avisasse, a chibata comia e o coro lambia!' +
      '<br><br>' +
      'À esquerda desta cruz havia uma senzala e um escravo que, por algum motivo, dava fidelidade a seu patrão. O patrão queria ouro e o escravo encontrou. A ninguém contou, quer dizer... só para sua mulher. Sua mulher, espantada com a fidelidade do marido a quem só o maltratava, convocou os outros escravos para irem atrás do tal ouro relatado. Revolucionária, ela sabia que entregar o ouro da margem da Prainha para os feitores era assumir de vez a exploração como condição de sua vida. Na manhã seguinte, quando o escravo acordou para entregar sua descoberta ao patrão, estava armada a confusão: “Meu querido marido, perdoe sua esposa, mas se encontraste ouro, primeiro terias que pensar no teu povo.”' +
      '<br><br>' +
      'A guerra estava feita. Enquanto os escravizados cavavam sem parar o Tanque do Arnesto em busca de mais ouros, tiros e chicotes ressoavam e dificultavam a vida daqueles que caçavam o achado. Muitos escorregavam ainda mortos pela colina do Rosário, quando não sobrou quase nenhum escravo e era a hora dos feitores se apropriarem da pepita, o chão desta colina se abriu. Havia debaixo de onde hoje é essa igreja um mundaréu de ouro e uma alavanca que empurrava esferas douradas para o céu. Esferas de ouro? Não, meu povo! Esferas de fogo. Não sobrou nenhum feitor pra contar a história.' +
      '<br><br>' +
      'A alavanca preciosa guardada pela mãe terra entendia que aquela procura não ia dar em boa coisa. Foi o próprio ouro que incendiou a fundação de nossa cidade. Foi o próprio ouro o Armagedon de Cuiabá. Uma alavanca, senhoras e senhoras, debaixo da terra, promovendo vingança a tanto sangue derrubado. “Meu querido marido, meu nêgo, sangrando te peço, não dê fidelidade a quem só nos presenteou com ataque.” Só sobrou o tal escravo, que chorava ao ver tua mulher descer os córregos da prainha mortinha, mortinha.' +
      '<br><br>' +
      'E jurava ali, entre os corpos de brancos e negros, nunca mais trabalhar para quem guerreava. O chão então se fechou, a alavanca de ouro jogou, finalmente, uma esfera de pedra e o homem tornou-se livre e profeta. Hoje, séculos depois, escutem este profeta para que a terra não se repita. Carrego o sangue de meus ancestrais escravizados e profetizo para continuar o seu legado. Cuiabá pode se findar se a guerra pelo capital continuar. Aqui está a cara da cidade, pavimentada com asfalto e carros que rodeiam a praça, mas aqui também está debaixo destas colinas, uma alavanca de ouro, prontinha, prontinha para jogar suas bolas de fogo. Cuidado, no dia que a anhuma cantar, Cuiabá se reconstruirá.',
  },
};

export const mapBuildingData: MapBuilding = {
  paroquia: {
    title: 'PARÓQUIA SÃO GONÇALO',
    local: 'Av. XV de Novembro, 664 - Centro Sul, Cuiabá - MT, 78020-300',
    localUrl: 'https://goo.gl/maps/ieC2CrnkzXBK1YDH6',
    description:
      'A edificação da primeira Capela na Freguesia de D. Pedro II deveu-se aos esforços do Dr. José Carlos Pereira, terceiro Juiz do Foro de Minas de Cuiabá, depois ouvidor da Vila do Bom Jesus de Cuiabá, cargo este ocupado em substituição a Luiz de Azevedo Sampaio. Ao assumir o cargo de ouvidor-Geral, fez uma visita de inspeção à Freguesia, onde se constatou a situação da capela em estado de abandono.' +
      '<br><br>' +
      'Iniciou a construção da Igreja em 1782 e, ali celebrou-se a missa inaugural na manhã de 15/11/1782. Durante a Guerra do Paraguai para lá foram transferidas imagens dos fortes de Coimbra e Corumbá. Ao longo dos anos, o templo passou por diversas reformas até chegar a composição arquitetônica que começa a ser definida em 1894 com a chegada da Missão Salesiana em Mato Grosso, dando-lhe o estilo colonial - neoclássico. Em 1916 foi incorporado seu último adereço a imagem do Cristo Redentor.',
  },
  sesc: {
    title: 'SESC ARSENAL',
    local: 'Rua 13 de Junho, 1435 - Centro Sul, Cuiabá - MT, 78020-000',
    localUrl: 'https://goo.gl/maps/iYW6YvCiC9v99o6S7',
    description:
      'Remonta ao "Real Trem de Guerra", criado em 1818 por Carta Régia de João VI de Portugal, que se constituía em um estabelecimento militar para o fabrico, reparo e depósito de armamento na então Província do Mato Grosso. As obras para a construção do edifício foram iniciadas em 1819, no governo do 9º e último Capitão General do Mato Grosso, Francisco de Paula Magessi Tavares de Carvalho, estando concluídas em 1832, quando foi inaugurado. No ano anterior, por determinação do governo regencial, havia sido criado o "Arsenal de Guerra da Província de Mato Grosso" (15 de novembro de 1831).' +
      '<br><br>' +
      'O edifício foi posteriormente ampliado e remodelado. Os varandões dos flancos foram construídos em 1848.' +
      '<br><br>' +
      'No mês de janeiro de 1920, recebeu em suas instalações o 16º Batalhão de Caçadores (16º BC), atual 44º Batalhão de Infantaria Motorizado, que instalado em Corumbá-MS, havia sido designado a se estabelecer em Cuiabá-MT. O 16º BC permaneceu utilizando as instalações do Arsenal de Guerra até o ano de 1942, quando passou a ocupar as suas instalações atuais na antiga Av. Lava pés, no bairro Duque de Caxias.' +
      '<br><br>' +
      'Atualmente em bom estado de conservação, encontra-se tombado pela Portaria nº 63/83, publicada em Diário Oficial em 9 de janeiro de 1984, constituindo o Espaço Cultural SESC na cidade.',
  },
  santuario: {
    title: 'SANTUÁRIO NOSSA SENHORA AUXILIADORA',
    local: 'Av. Dom Bosco, 631-749 - Dom Aquino, Cuiabá - MT, 78015-180',
    localUrl: 'https://goo.gl/maps/6P7VpJkRe357uXms8',
    description:
      'A igreja de Nossa Senhora Auxiliadora é uma igreja de Cuiabá, no estado brasileiro de Mato Grosso, construída na década de 1914 por Salesianos e dedicada a Nossa Senhora Auxiliadora. Em estilo neogótico, está localizada na avenida Tenente-Coronel Duarte e é a única igreja da cidade que possui abóbadas de aresta.' +
      '<br><br>' +
      'O projeto e edificação se deu sob a direção do Padre Francisco de Aquino Correa SDB, que logo fora ordenado Bispo da Prelazia do Senhor Bom Jesus, da qual pertencia praticamente todo o estado de Mato Grosso.' +
      '<br><br>' +
      'O Santuário é anexo ao Colégio Salesiano São Gonçalo. E está na região mais tradicional da cidade de Cuiabá, pertencente a primeira paróquia Salesiana do mundo, a paróquia São Gonçalo do Porto.',
  },
  palacio: {
    title: 'PALÁCIO DA INSTRUÇÃO',
    local: 'R. Antônio Maria Coelho, 151 - Centro, Cuiabá - MT, 78020-270',
    localUrl: 'https://goo.gl/maps/SE5GU27SsSnyUCMx8',
    description:
      'Construído em 1913, no estilo neoclássico, inicialmente abrigava os colégios Pedro Celestino e Liceu Cuiabano. Atualmente é a sede da Secretaria Estadual de Cultura, do Museu de História Natural e Antropologia e da Biblioteca Pública.' +
      '<br><br>' +
      'O Palácio passou por reformas recentes. Localizado na região central de Cuiabá ao lado da Catedral Metropolitana, na época Natalina recebe iluminação especial e é palco de diversas atrações culturais.',
  },
  catedral: {
    title: 'CATEDRAL BASÍLICA DO SENHOR BOM JESUS',
    local: 'Praça da República, s/n - Centro Norte, Cuiabá - MT, 78005-240',
    localUrl: 'https://goo.gl/maps/J6ok3FK5AZzsDZTq7',
    description:
      'Construída em 1723, inicialmente de pau-a-pique, a igreja matriz de Cuiabá, dedicada ao Senhor Bom Jesus, foi reconstruída em taipa entre 1739 e 1740, enquanto a primeira torre sineira data de 1769. Ela tornou-se sede da prelazia em 6 de dezembro de 1745, sendo elevada à diocese de Cuiabá em 15 de julho de 1826. Em 1868, passou por uma reforma que lhe alterou a torre e a fachada, novamente modificadas na década de 1920, ao mesmo tempo que a segunda torre era construída. Em 5 de abril de 1910, a diocese foi elevada à arquidiocese.' +
      '<br><br>' +
      'Com o pensamento modernizante vigente na década de 1960, tomou-se a decisão de demoli-la, o que ocorreu em 14 de agosto de 1968, somente após várias cargas de  dinamite, ato que por vários anos foi lembrado e lamentado. Seu antigo relógio, da marca Michelini, pode ainda ser visto hoje no Museu de Arte Sacra de Mato Grosso. No lugar da antiga igreja foi construído um templo novo, de concreto armado, obra que começou pela capela-mor, aos fundos, antes mesmo da demolição completa da antiga igreja, e foi inaugurada em 24 de maio de 1973. Ela foi declarada basílica menor em 15 de novembro de 1974.',
  },
  cine: {
    title: 'CINE TEATRO CUIABÁ',
    local: 'Av. Pres. Getúlio Vargas, n° 161 – Centro – Cuiabá-MT',
    localUrl: 'https://goo.gl/maps/mMaJ1sSibdeBy7bv6',
    description:
      'O Cine Teatro Cuiabá foi inaugurado em 23 de maio de 1942, durante o governo de Júlio Strübing Muller e fazia parte do conjunto de “obras oficiais” do Estado Novo. Com seu estilo arquitetônico art-decó e uma capacidade para 600 pessoas, a partir desta data o Cine Teatro Cuiabá ocupou-se de oferecer à sociedade mato-grossense, uma programação diversificada de filmes e peças teatrais nacionais. Esse espaço cultural recebeu renomados artistas brasileiros daquele período, como exemplo, o primeiro filme exibido foi “A noiva veio como encomenda” da Warner Bros, estrelado por Bety Davis e James Cagney.' +
      '<br><br>' +
      'A construção do Cine Teatro Cuiabá deu à capital mato-grossense uma nova e importante conotação no aspecto social, cultural e econômico do Estado. Tornou-se o principal ponto de encontro da sociedade cuiabana nas décadas de 50 e 60 com seu salão de chá, cinema e teatro, o que proporcionava à população em geral, um novo referencial em entretenimento. Serviu também como referência da circulação pela capital de ilustres autoridades nacionais como políticos, empresários e artistas e pode ser alvo de um volumoso fluxo de espetáculos e atividades artísticas por várias décadas o que o colocou como elemento de contribuição político-social para a permanência da cidade de Cuiabá como capital de Mato Grosso.' +
      '<br><br>' +
      'Em 1984 ocorre o seu tombamento, definindo-o como patrimônio histórico e artístico do cenário arquitetônico de Mato Grosso. O Cine Teatro Cuiabá é patrimônio da Secretaria de Estado de Cultura, doando à extinta Fundação Cultural de Mato Grosso pelo Governo do Estado. É constituído como Patrimônio Histórico e Artístico Estadual, tombado pela Fundação Cultural de Mato Grosso. O Cine Teatro Cuiabá, se estabeleceu como um centro das atividades culturais cuiabanas por mais de 55 anos e mesmo sendo um marco da evolução sociocultural da capital, foi arrendado por várias vezes e a partir de 1996, ficou fechado por quase 12 anos.' +
      '<br><br>' +
      'Após uma grande reforma que manteve as características arquitetônicas da época de sua construção, o Governo do Estado, por meio da Secretaria de Estado de Cultura – SEC e da Secretaria de Estado de Infraestrutura – Sinfra, devolve à sociedade Cuiabá, o centro cultural que marcou a história de Cuiabá com a exibição de inúmeras produções cinematográficas e teatrais por várias décadas.' +
      '<br><br>' +
      'O Cine Teatro Cuiabá teve as suas portas reabertas no dia 21 de maio de 2009 e contou com a presença de inúmeras autoridades mato-grossenses na sua reinauguração. Além da presença musical da Orquestra de Câmara do Estado de Mato Grosso e da exibição de um documentário sobre a sua história.',
  },
  mandioca: {
    title: 'PRAÇA DA MANDIOCA',
    local: 'R. Pedro Celestino, S/N - Centro Norte, Cuiabá - MT, 78005-010',
    localUrl: 'https://goo.gl/maps/LxoFNxGWxYXfwoFYA',
    description:
      'É um dos mais antigos logradouros públicos de Cuiabá. Recebeu também os nomes de Praça Real e Praça Conde Azambuja. Esta praça abrigou o antigo Palácio dos Capitães Generais, construído em 1726, no chamado “Canto do Sebo”. O Largo também era conhecido como o ponto final da linha de bondes tocada a burros, que pertencia à Companhia Progresso Cuiabano, inaugurada em 1891. No ano de 2004, ocorre na Praça da Mandioca, no centro histórico da capital, hoje tombado pelo IPHAN, inúmeras atividades culturais, especialmente ligadas à música, sempre contando com presença de famílias cuiabanas que residem no entorno daquele logradouro.',
  },
  relogio: {
    title: 'RELÓGIO CUIABÁ 300 ANOS',
    local:
      'Av. Historiador Rubens de Mendonça, 1035 - Araes, Cuiabá - MT, 78005-000',
    localUrl: 'https://goo.gl/maps/73PBvWgBF2WztdiB9',
    description:
      'O emblemático relógio, que marca a contagem regressiva dos 300 anos de Cuiabá, localizado na avenida Mato Grosso, foi entregue em 2018.' +
      '<br><br>' +
      'O relógio possui uma estrutura moderna, com 15 metros de altura, 6 metros de largura, contando ainda com um painel de alta resolução P10 em full HD, com 20 m² em cada face, e formato de viola de cocho, para valorizar as raízes e cultura da capital mato-grossense.' +
      '<br><br>' +
      'A obra foi realizada com 100% de verba oriunda da iniciativa privada. A empresa responsável pela construção, a OnWay Mídia, projetou um mapeamento de brilho e luminosidade da região de acordo com o ambiente externo, com o objetivo de garantir uma harmonização em meio às vias que cruzam o local.' +
      '<br><br>' +
      'Essa tecnologia permite que a intensidade da luz emitida pelos telões seja equilibrada, conforme a claridade natural. Ao final da tarde, o brilho da tela é reduzido gradativamente, fazendo com que seja mais confortável à visão dos motoristas, importante para não comprometer o tráfego da avenida. Já ao longo do dia, a luminosidade se equipara ao painel, para que sua visibilidade se mantenha adequada.',
  },
};

export const mapMapExplanationData: MapExplanation = {
  doubts: {
    title: '',
    text:
      'Bem vind_ ao Passeio Sonoro! Neste passeio, deixe-se transportar para as ruelas do Centro Histórico, através das lendas urbanas, narradas e contadas pelos atores do Grupo Tibanaré. Siga o mapa interativo para descobrir e vivenciar a s histórias que passeiam até hoje por Cuiabá. A experiência é mais completa utilizando fones de ouvido. Aproveite!' +
      '<br><br>' +
      "<img src='/images/map/separador.png' style='width: 80%;margin-left: 10%;'>" +
      '<br>' +
      'Esta experiência foi pensada em meados de 2015, após o Grupo Tibanaré realizar a primeira temporada do espetáculo Passeio Noturno, no centro histórico de Cuiabá, inspirado no livro “Cuiabá - Roteiro das Lendas”, escrito por Dunga Rodrigues. Os espectadores desejavam descobrir mais sobre o universo do espetáculo, então surge a ideia do Passeio Sonoro, que em 2022 se concretiza através da Lei Aldir Blanc - com uma homenagem do Grupo Tibanaré à memória e ao legado de Dunga Rodrigues (Edital Conexão Mestres da Cultura - Secretaria de Cultura, Esporte e Lazer de Mato Grosso).' +
      '<br><br>' +
      'Além de vivenciar os seis episódios que estão disponíveis neste aplicativo, convidamos você para visitar e conhecer a extraordinária artista Dunga Rodrigues, na exposição virtual “Emplumo as asas e me solto pelo infinito – Dunga Rodrigues”: biografia, fotografias inéditas, partituras, músicas e outras obras desta artista que marcou a história da arte em Mato Grosso.' +
      '<br><br>' +
      'E acompanhe a gente pelas redes sociais: @grupotibanare',
  },
  team: {
    title: 'Ficha técnica - Passeio Sonoro',
    text:
      '<b>Idealização: </b>Fernanda Gandes, Jefferson Jarcem e Naine Terena <br><br>' +
      '<b>Elenco: </b>Bruno Botelho, Juliana Graziela, Keilla Borges, Rogério Santana, Valter Lara e Vini Hoffman<br><br>' +
      '<b>Direção: </b>Jefferson Jarcem<br><br>' +
      '<b>Adaptação do roteiro: </b>Daniel Arcades<br><br>' +
      '<b>Preparação de elenco: </b>Felipe Lima<br><br>' +
      '<b>Captação de áudio: </b>Moby Dick Produções<br><br>' +
      '<b>Desenho de som: </b>Pedro Caetano<br><br>' +
      '<b>Ilustrações: </b>Heryck Gaby<br><br>' +
      '<b>Desenvolvedores do aplicativo: </b>Tecnoon Tecnologia & Inovação.<br><br>' +
      '<b>Desenvolvedor do website: </b>Guilherme Kominami<br><br>' +
      '<b>Produção executiva: </b>Fernanda Gandes<br><br>' +
      '<b>Assistente de produção: </b>Cacau Borges<br><br>' +
      '<b>Organização administrativa: </b>Karine Mattos Fotos: Conservatório Dunga Rodrigues<br>',
  },
};
