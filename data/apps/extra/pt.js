// Português (Brasil) — páginas dos novos apps. Campos ausentes herdam o inglês.
export default {
  "electrician-calculator": {
    head: {
      title: "Calculadora do eletricista para iPhone: queda de tensão, bitola, eletroduto e caixa (offline)",
      description:
        "Oito calculadoras para eletricistas baseadas no NEC em um só app offline para iPhone: queda de tensão, bitola com fatores de correção, ocupação de eletroduto e caixa, carga e disjuntor, lei de Ohm, código de resistores e tabelas. Compra única, sem assinatura, 19 idiomas.",
      keywords:
        "calculadora eletricista, calculadora queda de tensão, calculadora bitola de fio, calculadora ampacidade, ocupação de eletroduto, ocupação de caixa, calculadora disjuntor, lei de ohm, calculadora nec, calculadora elétrica iphone, awg",
      ogTitle: "Electrician Calculator Toolkit: queda de tensão, bitola, eletroduto e caixa no iPhone",
      ogDescription: "Oito calculadoras de obra baseadas nas tabelas do NEC 2023, totalmente offline. Compra única, sem assinatura.",
    },
    h1: "Uma calculadora do eletricista para a obra: queda de tensão, bitola, ocupação de eletroduto e caixa, offline",
    answer:
      "O Electrician Calculator Toolkit coloca oito calculadoras baseadas no NEC americano no seu iPhone: queda de tensão (monofásica, trifásica, CC), bitola com a regra dos 125 % e correção por temperatura e número de condutores, ocupação de eletroduto para EMT, PVC, RMC e IMC, ocupação de caixa conforme 314.16, carga e disjuntor a partir de watts, lei de Ohm, código de cores de resistores e as tabelas de referência por trás de cada cálculo. Cada resultado indica a tabela de origem. Funciona sem sinal, sem conta e sem assinatura, em 19 idiomas.",
    quickFacts: [
      ["Preço", "Compra única. Sem assinatura"],
      ["Ferramentas", "Queda de tensão, bitola, eletroduto, caixa, carga e disjuntor, lei de Ohm, resistores, tabelas"],
      ["Base", "Tabelas do NEC 2023 (NFPA 70)"],
      ["Privacidade", "Offline, sem conta, sem análises"],
    ],
    screenshotsTitle: "O que você recebe: um resultado, a tabela de onde ele vem e a menor bitola que passa",
    screenshots: [
      { alt: "Calculadora de queda de tensão no iPhone mostrando a queda em volts e porcentagem e a bitola mínima para 3 %", caption: "Queda de tensão com a bitola mínima para 3 %" },
      { alt: "Calculadora de bitola aplicando correção por temperatura ambiente e número de condutores", caption: "Bitola com fatores de correção embutidos" },
      { alt: "Calculadora de ocupação de eletroduto comparando o tamanho mínimo em EMT, PVC, RMC e IMC", caption: "Ocupação de eletroduto em cinco tipos de duto" },
    ],
    howTo: {
      title: "Como dimensionar um circuito em menos de um minuto",
      intro: "Na obra as perguntas são quase sempre as mesmas três: a queda de tensão passa, que fio puxar e que eletroduto ele precisa. Este é o fluxo.",
      steps: [
        { name: "Carga e disjuntor", text: "Informe watts, tensão e fases. Marque a carga como contínua se ela durar três horas ou mais. Você recebe a corrente de carga, a corrente de projeto a 125 %, o próximo disjuntor padrão da 240.6(A) e o condutor mínimo a 75 °C." },
        { name: "Bitola do fio", text: "Abra Bitola com essa corrente, defina a temperatura dos terminais, a temperatura ambiente e quantos condutores carregados dividem o duto. O app aplica 310.15(B)(1) e 310.15(C)(1) e mostra a ampacidade corrigida de cada bitola próxima." },
        { name: "Queda de tensão", text: "Informe o comprimento de ida. Se a queda passar de 3 %, o app já mostra o menor condutor que atende. Troque para alumínio ou adicione conjuntos em paralelo para comparar." },
        { name: "Ocupação do eletroduto", text: "Adicione os condutores (bitola, isolação, quantidade) e leia o tamanho mínimo para EMT, PVC Schedule 40 e 80, RMC e IMC lado a lado." },
      ],
    },
    featuresTitle: "Oito ferramentas, um toque cada",
    features: [
      { title: "Queda de tensão", text: "QT = 2·K·I·L ÷ CM para monofásico e CC, 1,732 para trifásico; K = 12,9 cobre / 21,2 alumínio. Pés ou metros, de #14 AWG a 750 kcmil, conjuntos em paralelo e a menor bitola abaixo de 3 %." },
      { title: "Bitola do fio (ampacidade)", text: "Tabela 310.16 para cobre e alumínio a 60/75/90 °C, regra dos 125 % para carga contínua, correção de ambiente, ajuste por número de condutores e os limites da 240.4(D) para bitolas pequenas." },
      { title: "Ocupação do eletroduto", text: "Capítulo 9, tabelas 1, 4 e 5: qualquer mistura de THHN/THWN, XHHW e THW, tamanho mínimo por tipo de duto ou o número máximo de um condutor em um eletroduto dado." },
      { title: "Ocupação da caixa", text: "Volumes da 314.16(B) para condutores, presilhas, suportes, dispositivos e terras, com verificação contra a caixa que você tem." },
      { title: "Carga e disjuntor, lei de Ohm, resistores", text: "De watts para ampères, disjuntor e fio em uma tela; dois quaisquer de V, I, R e P; decodificação de resistores de quatro e cinco faixas." },
      { title: "Tabelas do código", text: "Ampacidade, disjuntores padrão, fatores de correção, volumes de caixa e cores de fios dos EUA e IEC, sempre a um toque." },
    ],
    intentsTitle: "Perguntas que este app responde",
    intents: [
      { h: "Como calculo a queda de tensão de um circuito terminal?", p: "Informe tensão, corrente, bitola, material e comprimento de ida. O app devolve a queda em volts e porcentagem e a tensão na carga, sinalizando o que passa dos limites informativos de 3 % (terminal) e 5 % (total) da 210.19(A)." },
      { h: "Que bitola preciso para um circuito de 50 ampères?", p: "Para uma carga contínua de 40 A (50 A necessários) em cobre a 75 °C, a tabela 310.16 dá #8 AWG. Se estiver quente ou houver mais de três condutores carregados no duto, o app aplica os fatores e sobe uma bitola quando preciso." },
      { h: "Quantos #12 THHN cabem em um EMT de 3/4 de polegada?", p: "Dezesseis, pelo capítulo 9: tabela 1 (40 %), tabela 4 (área do EMT) e tabela 5 (área do THHN). O modo Máx. condutores responde isso para qualquer bitola, isolação e duto." },
      { h: "O app precisa de internet ou conta?", p: "Não. Todas as tabelas estão dentro do app; nada é baixado nem enviado. Sem conta, análises, anúncios ou assinatura." },
    ],
    compare: {
      title: "Electrician Calculator Toolkit versus o livro do código e as calculadoras gratuitas de função única",
      intro: "O livro é a referência, mas folhear com luvas é lento. As calculadoras gratuitas cobrem um cálculo cada e costumam se pagar com anúncios. Este app reúne os oito cálculos do dia a dia com a referência da tabela em cada resultado.",
      columns: ["", "Electrician Calculator Toolkit", "Livro do NEC", "Apps gratuitos de função única"],
      rows: [
        ["Queda, bitola, eletroduto e caixa em um só lugar", "✓ Oito ferramentas", "✓ Todas as tabelas, conta manual", "✗ Uma ferramenta por app"],
        ["Fatores de correção automáticos", "✓ Ambiente + número de condutores", "✗ Manual", "Varia"],
        ["Mostra de que tabela veio o resultado", "✓ Em cada tela", "✓ É a tabela", "✗ Raramente"],
        ["Funciona offline", "✓ Sim", "✓ Sim", "✗ Geralmente precisa de anúncios"],
        ["Idiomas", "19", "Inglês", "Geralmente um"],
        ["Preço", "Compra única", "Preço do livro", "Grátis com anúncios"],
      ],
    },
    faqs: [
      { q: "De qual edição do código são as tabelas?", a: "Da edição 2023 da NFPA 70, o National Electrical Code. Sua jurisdição pode adotar uma edição anterior ou emendas locais; trate os resultados como auxílio de cálculo e confira com o código adotado e o seu inspetor." },
      { q: "A bitola inclui os fatores de correção?", a: "Sim: a regra dos 125 % para carga contínua, a correção por temperatura ambiente da 310.15(B)(1), o ajuste para mais de três condutores carregados da 310.15(C)(1) e os limites da 240.4(D) para #14, #12 e #10." },
      { q: "Quais eletrodutos e isolações são cobertos?", a: "EMT, PVC Schedule 40, PVC Schedule 80, RMC e IMC, com as áreas de THHN/THWN, XHHW e THW da tabela 5 do capítulo 9." },
      { q: "Posso usar unidades métricas?", a: "O comprimento pode ser informado em metros e a temperatura ambiente em °C ou °F. As bitolas seguem AWG/kcmil, como as tabelas." },
      { q: "É assinatura?", a: "Não. É uma compra única sem compras dentro do app." },
      { q: "É afiliado à NFPA?", a: "Não. NEC e National Electrical Code são marcas registradas da National Fire Protection Association, que não patrocina nem endossa este app." },
      { q: "Existe versão para Android?", a: "Ainda não. O app para iPhone sai primeiro; uma versão Android está planejada e esta página vai linkar o Google Play quando estiver no ar." },
    ],
    related: [
      { blurb: "Fotografe uma nota, defina o prazo da garantia e receba um lembrete antes de vencer. Offline, compra única." },
      { blurb: "Compare o preço por unidade, some o imposto, aplique um desconto. Grátis." },
      { blurb: "Registre café e chá, veja quanta cafeína ainda está no corpo e defina um horário-limite antes de dormir. Grátis." },
    ],
    disclaimer:
      "O Electrician Calculator Toolkit é um auxílio de cálculo e não substitui o código, o julgamento profissional nem a autoridade competente. NEC e National Electrical Code são marcas registradas da National Fire Protection Association, que não patrocina nem endossa este app.",
  },
  "warranty-tracker": {
    head: {
      title: "App de controle de garantias para iPhone: fotos de notas, lembretes de vencimento, offline",
      description: "Controle todas as suas garantias no iPhone: fotografe a nota, defina o prazo da garantia e receba um lembrete antes de vencer. Offline, sem conta, sem assinatura. Compra única, 19 idiomas.",
      keywords: "app garantia, app controle de garantias iphone, app guardar notas fiscais, guardar recibos app, lembrete garantia, organizador de garantias, app notas fiscais offline, garantia eletrodomésticos app, vencimento garantia",
      ogTitle: "Garantias e Notas Fiscais: cada garantia com sua nota, num relance",
      ogDescription: "Fotografe a nota, defina o prazo da garantia, receba um lembrete antes de vencer. Offline, compra única, sem conta.",
    },
    h1: "Um controle de garantias que guarda a nota e avisa antes de a garantia vencer, offline",
    answer: "Garantias e Notas Fiscais guarda cada produto que você compra com a foto da nota, a data da compra, o preço, o número de série e o prazo da garantia, e lembra você antes de a garantia acabar. Você vê quantos itens estão ativos, vencendo ou vencidos e o valor total ainda coberto. Tudo fica no seu iPhone: sem conta, sem nuvem, sem assinatura e sem anúncios. Compra única, disponível em 19 idiomas.",
    quickFacts: [
      ["Preço", "Compra única. Sem assinatura"],
      ["Guarda", "Fotos da nota e do produto, data da compra, preço, loja, número de série, observações"],
      ["Lembretes", "Notificações locais 90, 60, 30, 14, 7 ou 1 dia antes do vencimento"],
      ["Privacidade", "Offline, sem conta, sem análises, exportação CSV"],
    ],
    screenshotsTitle: "O que você recebe: todas as garantias num relance, a nota anexada, um lembrete antes que seja tarde",
    screenshots: [
      { alt: "Tela inicial do controle de garantias no iPhone com contagem de ativas, vencendo e vencidas e uma lista de produtos com dias restantes", caption: "Todas as garantias, num relance" },
      { alt: "Detalhe de um item com foto da nota, data da compra, preço, número de série e contagem regressiva da garantia", caption: "A nota fiscal, na hora certa" },
      { alt: "Formulário de cadastro com nome, loja, preço, data da compra e botões de prazo de garantia", caption: "Cadastre em 20 segundos" },
      { alt: "Configurações de lembrete com antecedência de 30 e 7 dias e horário", caption: "Lembrado antes de vencer" },
    ],
    howTo: {
      title: "Como registrar uma garantia em menos de um minuto",
      intro: "O melhor momento para guardar uma nota é o dia em que você a recebe. O fluxo foi feito para isso: celular numa mão, nota na outra.",
      steps: [
        { name: "Adicione a compra", text: "Toque em +, digite o nome do produto e a loja, informe o preço e a data da compra. Escolha uma categoria para a lista ficar fácil de ler." },
        { name: "Defina o prazo da garantia", text: "Toque em 6 meses, 1, 2, 3 ou 5 anos, ou digite qualquer número de meses. Some uma garantia estendida se comprou; o app mostra a cobertura total e a data exata de vencimento." },
        { name: "Fotografe a nota", text: "Tire uma foto da nota e, se quiser, do produto e da etiqueta com o número de série. As fotos ficam anexadas ao item em tamanho real." },
        { name: "Deixe os lembretes trabalharem", text: "Por padrão você é avisado 30 e 7 dias antes do vencimento às 9:00. Mude a antecedência e o horário em Ajustes; tudo são notificações locais, nada é enviado." },
      ],
    },
    featuresTitle: "Feito para o dia em que algo quebra",
    features: [
      { icon: "🧾", title: "Fotos da nota", text: "Câmera ou biblioteca, várias fotos por item, visualizador em resolução total com zoom. Mostre na assistência em vez de procurar no e-mail." },
      { icon: "⏳", title: "Contagem regressiva", text: "Dias restantes, barra de progresso e status (ativa, vencendo, vencida) em cada item. Ordene pelo que vence primeiro." },
      { icon: "🔔", title: "Lembretes", text: "Qualquer combinação de 90, 60, 30, 14, 7 e 1 dia antes, e o horário. Apenas notificações locais." },
      { icon: "➕", title: "Garantias estendidas", text: "Garantia do fabricante mais a extensão da loja ou do cartão, somadas num único período de cobertura." },
      { icon: "📊", title: "Visão geral", text: "Contagem de ativas, vencendo e vencidas e valor total ainda na garantia. Filtre por status, busque por nome, loja ou número de série." },
      { icon: "📤", title: "Exportação CSV", text: "Exporte todos os itens para CSV quando quiser, para uma planilha, um sinistro do seguro ou a troca de app. Seus dados nunca ficam presos." },
    ],
    intentsTitle: "Perguntas que este app responde",
    intents: [
      { h: "Como acompanho as garantias de tudo o que tenho?", p: "Adicione cada compra uma vez com a foto da nota e o prazo da garantia. A tela inicial lista tudo em ordem de vencimento, com contagens de ativas, vencendo e vencidas e o valor total coberto." },
      { h: "Onde guardo as notas para acionar a garantia?", p: "Anexadas ao item, no seu celular. Fotografe a nota no dia da compra; quando algo quebrar, abra o item e mostre a nota, a data da compra e o número de série no balcão." },
      { h: "Como recebo um aviso antes de uma garantia vencer?", p: "Ative os lembretes em Ajustes e escolha a antecedência (90, 60, 30, 14, 7 ou 1 dia) e o horário. O app agenda notificações locais para cada item; nada sai do aparelho." },
      { h: "Posso registrar uma garantia estendida?", p: "Sim. Cada item tem uma garantia do fabricante e uma extensão opcional; o app soma as duas num único período de cobertura e uma data de vencimento." },
      { h: "Precisa de conta ou internet?", p: "Não. Funciona offline, sem conta, sem sincronização na nuvem e sem análises. Inclua o app no backup do iPhone e exporte CSV quando quiser uma cópia." },
    ],
    compare: {
      title: "Garantias e Notas Fiscais versus o álbum de fotos e apps de recibos por assinatura",
      intro: "A maioria guarda notas no rolo da câmera ou numa pasta do e-mail e confia na memória para a data da garantia. Apps de recibos por assinatura enviam tudo para um servidor e cobram todo mês. Este app mantém a nota junto com a data da garantia, no aparelho, por um preço único.",
      columns: ["", "Garantias e Notas Fiscais", "Álbum de fotos / e-mail", "Apps de recibos por assinatura"],
      rows: [
        ["Nota anexada ao produto e à data da garantia", "✓", "✗ Separados", "✓"],
        ["Lembrete antes do vencimento", "✓ Até seis antecedências", "✗", "Às vezes"],
        ["Garantia estendida", "✓", "✗", "Varia"],
        ["Offline, nada é enviado", "✓", "✓", "✗ Nuvem"],
        ["Exportar seus dados", "✓ CSV", "✗", "Varia"],
        ["Preço", "Compra única", "Grátis", "Mensal ou anual"],
      ],
    },
    faqs: [
      { q: "Onde minhas fotos e dados ficam guardados?", a: "No armazenamento do próprio app no seu iPhone. Nada é enviado. Se você incluir o app no backup do iPhone ou do iCloud, ele é restaurado com o resto do celular." },
      { q: "Preciso permitir acesso à câmera ou às fotos?", a: "Só se quiser adicionar fotos. A permissão da câmera é pedida na primeira vez que você toca em Tirar foto; escolher da biblioteca usa o seletor da Apple e não precisa de permissão." },
      { q: "Posso mudar os horários dos lembretes?", a: "Sim. Em Ajustes você escolhe qualquer combinação de 90, 60, 30, 14, 7 e 1 dia antes do vencimento e o horário. Os lembretes se atualizam sozinhos quando você edita um item." },
      { q: "Como mudo para um iPhone novo?", a: "Restaure o celular novo a partir de um backup e o app vem com os dados. Você também pode exportar CSV como cópia extra. A compra fica ligada à sua Conta Apple, então você não paga duas vezes." },
      { q: "Sincroniza entre aparelhos?", a: "Nesta versão, não. É um app de um único aparelho, totalmente offline por escolha." },
      { q: "É assinatura?", a: "Não. Compra única, sem compras no app, sem anúncios." },
      { q: "Quais idiomas ele suporta?", a: "Inglês, espanhol, alemão, francês, italiano, português, holandês, polonês, russo, ucraniano, turco, árabe, hindi, indonésio, vietnamita, tailandês, japonês, coreano e chinês simplificado. Você pode forçar um idioma em Ajustes." },
      { q: "Existe versão para Android?", a: "Ainda não. O app para iPhone sai primeiro; uma versão Android está planejada e esta página terá o link do Google Play quando estiver no ar." },
    ],
    related: [
      { name: "Electrician Calculator Toolkit", href: "/apps/electrician-calculator", blurb: "Queda de tensão, bitola, ocupação de eletroduto e caixa pelas tabelas NEC 2023, offline. Compra única." },
      { name: "Unit Price Calculator & Tax", href: "/apps/unit-price-calculator", blurb: "Compare preço por unidade, some impostos, aplique desconto. Grátis." },
      { name: "Caffeine Tracker: Curfew", href: "/apps/caffeine-tracker", blurb: "Registre café e chá, veja o que ainda está no corpo e receba um horário limite antes de dormir. Grátis." },
    ],
    disclaimer: "Garantias e Notas Fiscais é uma ferramenta pessoal de registro. Os termos da garantia são definidos pelo fabricante ou pela loja; confira sempre os termos originais antes de acionar.",
  },
  "unit-price-calculator": {
    "head": {
      "title": "Calculadora de preço por quilo para iPhone: preço por kg, litro ou unidade, descontos, imposto, orçamento",
      "description": "Calculadora de compras grátis para iPhone: compare o preço por kg, lb, litro ou unidade entre embalagens, acumule descontos e cupons, some ou retire o imposto, mantenha o carrinho no orçamento e divida a conta. Offline, sem conta, 19 idiomas.",
      "keywords": "calculadora preço por quilo, preço unitário calculadora, comparar preços supermercado app, calculadora de compras, calculadora de desconto, calculadora porcentagem, calculadora imposto, calculadora carrinho, dividir conta app, calculadora gorjeta",
      "ogTitle": "Unit Price Calculator & Tax: qual embalagem é mais barata de verdade?",
      "ogDescription": "Compare o preço por kg, lb ou litro, acumule descontos, some o imposto, mantenha o carrinho no orçamento, divida a conta. App grátis para iPhone, offline."
    },
    "h1": "Uma calculadora de preço unitário para o corredor do mercado: preço por kg ou litro, descontos acumulados, imposto, orçamento do carrinho e divisão de conta",
    "answer": "Unit Price Calculator & Tax é uma calculadora de compras gratuita para iPhone. Informe o preço e o tamanho de cada embalagem e o app converte tudo para uma mesma base (por kg, lb, litro, fl oz ou unidade) marcando a mais barata. Também acumula descontos como as lojas aplicam, soma ou retira o imposto, mantém o total do carrinho contra um orçamento e divide a conta com gorjeta. Tudo funciona offline, sem conta. A versão grátis mostra um pequeno banner; uma compra única o remove.",
    "quickFacts": [
      [
        "Preço",
        "Grátis. Remoção de anúncios em compra única opcional, sem assinatura"
      ],
      [
        "Ferramentas",
        "Comparação de preço unitário, desconto, imposto, total do carrinho com orçamento, divisão e gorjeta"
      ],
      [
        "Unidades",
        "g, kg, oz, lb, ml, l, fl oz, gal, unidades, pacotes, multipacks"
      ],
      [
        "Privacidade",
        "Offline, sem conta; as listas ficam no celular"
      ]
    ],
    "screenshotsTitle": "O que você recebe: a embalagem mais barata, o preço real da promoção e um carrinho que fica no orçamento",
    "screenshots": [
      {
        "alt": "Calculadora de preço unitário no iPhone comparando três embalagens com preço por quilo e a mais barata destacada",
        "caption": "Qual embalagem é mais barata de verdade"
      },
      {
        "alt": "Calculadora de desconto com 30% de desconto, 10% extra, cupom e imposto mostrando preço final e economia",
        "caption": "Descontos acumulados, preço final"
      },
      {
        "alt": "Total do carrinho com itens, imposto e o que sobra de um orçamento de 60",
        "caption": "Fique no orçamento enquanto compra"
      },
      {
        "alt": "Calculadora de imposto retirando 19% de um preço com imposto incluso",
        "caption": "Some ou retire o imposto"
      },
      {
        "alt": "Divisão de conta com 15% de gorjeta para quatro pessoas, arredondada",
        "caption": "Divida a conta, arredonde"
      }
    ],
    "howTo": {
      "title": "Como comparar preços unitários na loja",
      "intro": "As etiquetas mostram o preço por 100 g num produto e por kg no seguinte, ou nada nos multipacks. Aqui está a versão de 20 segundos.",
      "steps": [
        {
          "name": "Escolha a medida",
          "text": "Peso, volume, unidades ou comprimento. O menu de unidades mostra só as que fazem sentido (g, kg, oz, lb para peso; ml, l, fl oz, gal para volume)."
        },
        {
          "name": "Informe cada embalagem",
          "text": "Preço, quantidade e unidade de A e B. Para um multipack, coloque Pacotes em 6 e Quantidade em 330 ml. Até seis opções."
        },
        {
          "name": "Leia o resultado",
          "text": "A mais barata ganha um selo verde e as outras mostram quanto custam a mais em porcentagem. Troque a base (por kg, por 100 g, por lb) no menu Mostrar preço por."
        },
        {
          "name": "Depois confira a promoção",
          "text": "Vá para Desconto para acumular o desconto da prateleira, a porcentagem extra no caixa e um cupom, com imposto se o seu país o adiciona no pagamento."
        }
      ]
    },
    "featuresTitle": "Cinco calculadoras para o caixa",
    "features": [
      {
        "icon": "⚖️",
        "title": "Comparação de preço unitário",
        "text": "Até seis embalagens, unidades métricas e imperiais misturadas, multipacks, a mais barata destacada com o ágio percentual das outras."
      },
      {
        "icon": "🏷️",
        "title": "Descontos acumulados",
        "text": "Porcentagem, porcentagem extra sobre o preço reduzido, cupom fixo e depois imposto: na ordem da loja, com o que você paga e economiza."
      },
      {
        "icon": "🧾",
        "title": "Imposto",
        "text": "Some o imposto a um preço ou retire de um preço com imposto incluso. Atalhos para alíquotas comuns; fixe a sua como padrão."
      },
      {
        "icon": "🛒",
        "title": "Total do carrinho com orçamento",
        "text": "Adicione itens enquanto compra, marque-os, veja o imposto e o que resta do orçamento com uma barra de progresso."
      },
      {
        "icon": "👥",
        "title": "Dividir e gorjeta",
        "text": "Conta, porcentagem de gorjeta, número de pessoas e arredondamento para que cada parte seja um valor redondo."
      },
      {
        "icon": "🌍",
        "title": "Sua moeda e seu idioma",
        "text": "Segue seu símbolo de moeda e separador decimal; 19 idiomas; lembra suas listas e alíquota entre as compras."
      }
    ],
    "intentsTitle": "Perguntas que este app responde",
    "intents": [
      {
        "h": "Como calcular o preço por unidade?",
        "p": "Divida o preço pela quantidade, numa unidade comum. O app faz a conversão: 500 g a 4,49 são 8,98 por kg; 1,2 lb a 4,99 são 9,17 por kg. O número menor é o melhor negócio."
      },
      {
        "h": "A embalagem maior é sempre mais barata?",
        "p": "Quase sempre, mas nem sempre, e multipacks e promoções quebram a regra com frequência. Informe as duas e o app mostra a diferença exata em porcentagem."
      },
      {
        "h": "Quanto é 30% de desconto mais 10% extra?",
        "p": "Não é 40%. Os 10% extras se aplicam ao preço já reduzido: 100 vira 70 e depois 63, uma economia de 37%. A aba Desconto mostra cada passo."
      },
      {
        "h": "Como retiro o imposto de um preço?",
        "p": "Divida por 1 mais a alíquota: 119 com 19% de imposto são 100 líquidos. Escolha Retirar imposto, informe o valor e a alíquota."
      },
      {
        "h": "Precisa de internet ou conta?",
        "p": "Não. Todo cálculo acontece no celular e suas listas ficam locais. O único uso de rede é o pequeno banner da versão grátis, que uma compra única remove."
      }
    ],
    "compare": {
      "title": "Unit Price Calculator & Tax versus a calculadora do celular e apps de uma função só",
      "intro": "A calculadora do celular funciona se você lembra as conversões e faz duas vezes. A maioria dos apps de uma função faz só uma dessas tarefas. Este app reúne os cinco cálculos do caixa e lembra suas configurações.",
      "columns": [
        "",
        "Unit Price Calculator & Tax",
        "Calculadora do celular",
        "Apps de uma função"
      ],
      "rows": [
        [
          "Converte g, kg, oz, lb, ml, l automaticamente",
          "✓",
          "✗ Manual",
          "Alguns"
        ],
        [
          "Multipacks e até seis opções",
          "✓",
          "✗",
          "Raramente"
        ],
        [
          "Descontos acumulados com cupom e imposto",
          "✓",
          "✗ Passo a passo",
          "Só apps de desconto"
        ],
        [
          "Total do carrinho contra um orçamento",
          "✓",
          "✗",
          "Só apps de lista"
        ],
        [
          "Dividir conta com gorjeta e arredondamento",
          "✓",
          "✗",
          "Só apps de gorjeta"
        ],
        [
          "Preço",
          "Grátis, remoção de anúncios em compra única",
          "Grátis",
          "Grátis com anúncios ou assinatura"
        ]
      ]
    },
    "faqs": [
      {
        "q": "O app é grátis?",
        "a": "Sim. A versão grátis mostra um pequeno banner embaixo. Remover anúncios é uma única compra; não há assinatura nem outra compra no app."
      },
      {
        "q": "Quais unidades são suportadas?",
        "a": "Peso: mg, g, kg, oz, lb. Volume: ml, l, fl oz, xícara, gal. Unidades: peça, pacote, dúzia. Comprimento: cm, m, in, ft. Dá para misturar métrico e imperial numa comparação."
      },
      {
        "q": "Posso mudar a unidade em que o preço é mostrado?",
        "a": "Sim. Mostrar preço por permite escolher por kg, por 100 g, por lb, por litro, por 100 ml, por fl oz, por galão e mais."
      },
      {
        "q": "Ele lembra minha alíquota?",
        "a": "Sim. Fixe uma alíquota padrão na aba Imposto ou em Ajustes; Desconto e Carrinho usam automaticamente."
      },
      {
        "q": "Qual moeda ele usa?",
        "a": "A do seu aparelho por padrão. Você pode escolher outra em Ajustes."
      },
      {
        "q": "Funciona offline?",
        "a": "Sim. Cálculos e listas nunca saem do celular. Sem conexão, nenhum anúncio é mostrado."
      },
      {
        "q": "Quais idiomas?",
        "a": "Inglês, espanhol, alemão, francês, italiano, português, holandês, polonês, russo, ucraniano, turco, árabe, hindi, indonésio, vietnamita, tailandês, japonês, coreano e chinês simplificado."
      },
      {
        "q": "Existe versão para Android?",
        "a": "Ainda não. O app para iPhone sai primeiro; uma versão Android está planejada e esta página terá o link do Google Play quando estiver no ar."
      }
    ],
    "related": [
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Fotografe a nota, defina a garantia, receba um lembrete antes de vencer. Offline, compra única."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Queda de tensão, bitola, ocupação de eletroduto e caixa pelas tabelas NEC 2023, offline. Compra única."
      },
      {
        "name": "Caffeine Tracker: Curfew",
        "href": "/apps/caffeine-tracker",
        "blurb": "Quanta cafeína ainda tem em você e até que hora pode tomar o último café. Grátis."
      }
    ],
    "disclaimer": "Unit Price Calculator & Tax é um auxílio para compras. Alíquotas e regras de arredondamento variam por país e loja; confira o valor final na nota."
  },
  "caffeine-tracker": {
    "head": {
      "title": "App de cafeína para iPhone: quanta cafeína ainda tem em você e sua hora limite antes de dormir",
      "description": "Rastreador de cafeína grátis para iPhone: registre café, chá e energéticos em dois toques, veja os miligramas ainda ativos com um modelo de meia-vida e receba um toque de recolher para a última xícara. Offline, sem conta, 19 idiomas.",
      "keywords": "app cafeína, rastreador de cafeína iphone, calculadora de cafeína, meia-vida cafeína calculadora, contador de café, registro de cafeína, quanto tempo dura a cafeína, quando parar de tomar café para dormir, cafeína sono calculadora",
      "ogTitle": "Caffeine Tracker: Curfew: quanta cafeína ainda tem em você?",
      "ogDescription": "Registre uma bebida em dois toques, veja o nível cair e saiba a hora limite do último café para dormir no horário. App grátis para iPhone."
    },
    "h1": "Um rastreador de cafeína que mostra o que ainda está no seu corpo e até que hora pode tomar o último café",
    "answer": "Caffeine Tracker: Curfew estima a cafeína ativa no seu corpo a partir do que você registra, com um modelo de meia-vida (cerca de 5 horas para a maioria dos adultos, ajustável). Registre espresso, coado, latte, chá, matcha, energéticos e mais em dois toques, veja uma curva de 12 horas, fique abaixo de 400 mg hoje e defina a hora de dormir com uma meta (25, 50 ou 100 mg) para receber um toque de recolher: a hora limite da sua última bebida. Funciona offline, sem conta. Um Pro de compra única adiciona sincronização com o Saúde, histórico de 30 dias e bebidas personalizadas.",
    "quickFacts": [
      [
        "Preço",
        "Grátis. Pro de compra única, sem assinatura"
      ],
      [
        "Modelo",
        "Decaimento por meia-vida, de 2,5 a 8 h, padrão 5 h"
      ],
      [
        "Bebidas",
        "21 predefinições com mg típicos, pequeno / normal / grande, personalizadas com Pro"
      ],
      [
        "Privacidade",
        "Offline, sem conta; Saúde só é gravado se você ativar"
      ]
    ],
    "screenshotsTitle": "O que você recebe: o número que importa agora, um toque de recolher para hoje e uma semana que dá para ler",
    "screenshots": [
      {
        "alt": "Tela inicial do rastreador de cafeína no iPhone com 128 mg no corpo, total do dia contra 400 mg, toque de recolher e curva de 12 horas",
        "caption": "Quanta cafeína ainda tem em você"
      },
      {
        "alt": "Tela de adicionar bebida com cold brew selecionado, tamanho, horário e lista de cafés com busca",
        "caption": "Registre uma bebida em dois toques"
      },
      {
        "alt": "Tela de histórico com gráfico de barras de sete dias e a média diária",
        "caption": "Veja sua semana, perceba o hábito"
      },
      {
        "alt": "Ajustes com hora de dormir, cafeína ao deitar, meia-vida e limite diário",
        "caption": "Defina a hora de dormir, ganhe um toque de recolher"
      }
    ],
    "howTo": {
      "title": "Como descobrir sua hora limite de cafeína",
      "intro": "A pergunta não é quanto café você toma, e sim quanto sobra quando a cabeça encosta no travesseiro. Três ajustes e o app faz a conta.",
      "steps": [
        {
          "name": "Defina a hora de dormir",
          "text": "Ajustes → Sono → Hora de dormir. O app sempre mira a hora de dormir de hoje, mesmo se você registrar uma bebida tarde, depois da meia-noite."
        },
        {
          "name": "Escolha com quanta cafeína você dorme",
          "text": "25 mg se tem sono leve, 50 mg para a maioria, 100 mg se a cafeína quase não afeta você. É o nível-alvo ao deitar."
        },
        {
          "name": "Registre o que bebe",
          "text": "Toque em uma bebida na tela inicial (espresso, coado, latte, chá, energético) ou abra a lista completa com tamanhos e horário para a xícara esquecida."
        },
        {
          "name": "Leia o toque de recolher",
          "text": "O cartão Toque de recolher diz, por exemplo: \"Última bebida de 95 mg até 15:40 para ficar abaixo de 50 mg ao deitar\". Depois desse horário, mostra quanto outra xícara deixaria ao deitar."
        }
      ]
    },
    "featuresTitle": "Feito em torno de um número: o que está ativo agora",
    "features": [
      {
        "icon": "☕",
        "title": "Nível ao vivo",
        "text": "Cada dose decai com meia-vida. Veja os miligramas ativos, um status (livre, ativo, elétrico) e quanto falta para ficar abaixo da meta."
      },
      {
        "icon": "🌙",
        "title": "Toque de recolher",
        "text": "Hora limite da sua bebida habitual para ficar abaixo da meta ao deitar. Meia-vida ajustável para gravidez, remédios ou metabolismo rápido."
      },
      {
        "icon": "⚡",
        "title": "Registro em dois toques",
        "text": "Seis favoritos na tela inicial; 21 predefinições com teores típicos; pequeno, normal e grande; registro retroativo."
      },
      {
        "icon": "📊",
        "title": "Limite diário e histórico",
        "text": "Progresso contra 400, 300 ou 200 mg. Sete dias de totais com média e dias acima; 30 dias com Pro."
      },
      {
        "icon": "❤️",
        "title": "Apple Saúde (Pro)",
        "text": "Grava a cafeína no Saúde ao lado dos seus dados de sono. Excluir uma bebida remove a amostra."
      },
      {
        "icon": "🌍",
        "title": "19 idiomas, offline",
        "text": "Nada sai do celular. Sem conta nem análises próprias; o Pro remove o banner de anúncios."
      }
    ],
    "intentsTitle": "Perguntas que este app responde",
    "intents": [
      {
        "h": "Quanto tempo a cafeína fica no corpo?",
        "p": "A meia-vida é de cerca de 5 horas para a maioria dos adultos: uma xícara de 95 mg às 15h vira uns 48 mg às 20h e 24 mg à 1h. O app traça exatamente essa curva para tudo que você registrou."
      },
      {
        "h": "Quando devo parar de tomar café para dormir?",
        "p": "Depende da hora de dormir, da sensibilidade e do que já tomou. Com meta de 50 mg e hora de dormir às 23h, um único café de 95 mg precisa entrar até 18:20; depois de duas xícaras anteriores, bem antes. O cartão calcula isso continuamente."
      },
      {
        "h": "Quanta cafeína tem um espresso, um latte ou um cold brew?",
        "p": "Valores típicos: espresso 63 mg, latte ou cappuccino 75 mg (uma dose), coado 95 mg, cold brew 200 mg, chá preto 47 mg, chá verde 28 mg, matcha 70 mg, energético de 250 ml 80 mg. Todas as predefinições se ajustam por tamanho e o Pro permite quantidades exatas."
      },
      {
        "h": "Quanta cafeína por dia é demais?",
        "p": "A referência comum para adultos saudáveis é 400 mg por dia; 200 mg na gravidez. O app mantém uma barra de progresso contra o limite escolhido."
      },
      {
        "h": "Precisa de internet ou conta?",
        "p": "Não. Tudo roda no celular. O Saúde só é gravado se você ativar no Pro."
      }
    ],
    "compare": {
      "title": "Caffeine Tracker: Curfew versus um app de notas e rastreadores por assinatura",
      "intro": "Contar xícaras não diz nada sobre hoje à noite. A maioria dos apps de cafeína calcula o nível, mas cobra assinatura mensal. Este app dá nível, toque de recolher e histórico de graça, com um Pro de compra única para sincronizar com o Saúde.",
      "columns": [
        "",
        "Caffeine Tracker: Curfew",
        "Notas / memória",
        "Rastreadores por assinatura"
      ],
      "rows": [
        [
          "Cafeína ativa com curva de decaimento",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Toque de recolher para a última bebida",
          "✓",
          "✗",
          "Alguns"
        ],
        [
          "Registro em dois toques com mg típicos",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Sincronização com Apple Saúde",
          "✓ Pro (compra única)",
          "✗",
          "✓ Assinatura"
        ],
        [
          "Offline, sem conta",
          "✓",
          "✓",
          "Varia"
        ],
        [
          "Preço",
          "Grátis, Pro de compra única",
          "Grátis",
          "Mensal ou anual"
        ]
      ]
    },
    "faqs": [
      {
        "q": "Qual a precisão da estimativa?",
        "a": "É uma estimativa. O teor de cafeína varia com o preparo e a marca, e a meia-vida entre pessoas (cerca de 3 a 7 horas). Ajuste a meia-vida em Ajustes se souber que elimina cafeína devagar ou rápido. Não é orientação médica."
      },
      {
        "q": "O que o Pro inclui?",
        "a": "Sincronização com o Saúde (cafeína), histórico de 30 dias em vez de 7 e bebidas personalizadas com quantidades exatas. Uma única compra; sem assinatura."
      },
      {
        "q": "Ele lê meus dados do Saúde?",
        "a": "Não. Com o Pro e a opção ativada, grava amostras de cafeína no Saúde e as apaga quando você exclui uma bebida. Nunca lê nada."
      },
      {
        "q": "Posso registrar uma bebida esquecida?",
        "a": "Sim. Abra a lista completa e mude o horário antes de adicionar."
      },
      {
        "q": "E se eu durmo depois da meia-noite?",
        "a": "Defina normalmente (por exemplo, 1:00). Uma bebida registrada às 23h continua contando para hoje à noite."
      },
      {
        "q": "Quais idiomas?",
        "a": "Inglês, espanhol, alemão, francês, italiano, português, holandês, polonês, russo, ucraniano, turco, árabe, hindi, indonésio, vietnamita, tailandês, japonês, coreano e chinês simplificado."
      },
      {
        "q": "Existe versão para Android?",
        "a": "Ainda não. O app para iPhone sai primeiro; uma versão Android está planejada e esta página terá o link do Google Play quando estiver no ar."
      }
    ],
    "related": [
      {
        "name": "Unit Price Calculator & Tax",
        "href": "/apps/unit-price-calculator",
        "blurb": "Qual embalagem é mais barata por kg ou litro, descontos acumulados, imposto, orçamento do carrinho e divisão de conta. Grátis."
      },
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Fotografe a nota, defina a garantia, receba um lembrete antes de vencer. Offline, compra única."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Queda de tensão, bitola, ocupação de eletroduto e caixa pelas tabelas NEC 2023, offline. Compra única."
      }
    ],
    "disclaimer": "Caffeine Tracker: Curfew usa um modelo simples de meia-vida e teores médios de cafeína. Não é um dispositivo médico nem orientação médica; converse com um profissional sobre cafeína e sua saúde."
  },
};
