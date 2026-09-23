// Español — páginas de las nuevas apps. Los campos ausentes heredan el inglés.
export default {
  "electrician-calculator": {
    head: {
      title: "Calculadora para electricistas en iPhone: caída de tensión, calibre, tubería y caja (sin conexión)",
      description:
        "Ocho calculadoras eléctricas basadas en el NEC en una sola app para iPhone sin conexión: caída de tensión, calibre con factores de corrección, llenado de tubería y de caja, carga e interruptor, ley de Ohm, código de resistencias y tablas. Pago único, sin suscripción, 19 idiomas.",
      keywords:
        "calculadora electricista, calculadora caída de tensión, calculadora calibre de cable, calculadora ampacidad, llenado de tubería, llenado de caja, calculadora interruptor, ley de ohm, calculadora nec, calculadora eléctrica iphone, awg",
      ogTitle: "Electrician Calculator Toolkit: caída de tensión, calibre, tubería y caja en iPhone",
      ogDescription: "Ocho calculadoras de obra basadas en las tablas del NEC 2023, sin conexión. Pago único, sin suscripción.",
    },
    h1: "Una calculadora para electricistas en la obra: caída de tensión, calibre, llenado de tubería y de caja, sin conexión",
    answer:
      "Electrician Calculator Toolkit reúne ocho calculadoras basadas en el NEC en tu iPhone: caída de tensión (monofásica, trifásica y CC), calibre con la regla del 125 % y corrección por temperatura y número de conductores, llenado de tubería para EMT, PVC, RMC e IMC, llenado de caja según 314.16, carga e interruptor a partir de vatios, ley de Ohm, código de colores de resistencias y las tablas de referencia detrás de cada cálculo. Cada resultado indica la tabla de la que procede. Funciona sin señal, sin cuenta y sin suscripción, y está disponible en 19 idiomas.",
    quickFacts: [
      ["Precio", "Pago único. Sin suscripción"],
      ["Herramientas", "Caída de tensión, calibre, tubería, caja, carga e interruptor, ley de Ohm, resistencias, tablas"],
      ["Base", "Tablas del NEC 2023 (NFPA 70)"],
      ["Privacidad", "Sin conexión, sin cuenta, sin analíticas"],
    ],
    screenshotsTitle: "Lo que obtienes: un resultado, la tabla de la que sale y el calibre más pequeño que cumple",
    screenshots: [
      { alt: "Calculadora de caída de tensión en iPhone con la caída en voltios y porcentaje y el calibre mínimo para 3 %", caption: "Caída de tensión con el calibre mínimo para 3 %" },
      { alt: "Calculadora de calibre aplicando corrección por temperatura ambiente y número de conductores", caption: "Calibre con factores de corrección incluidos" },
      { alt: "Calculadora de llenado de tubería comparando el tamaño mínimo en EMT, PVC, RMC e IMC", caption: "Llenado de tubería en cinco tipos de canalización" },
    ],
    howTo: {
      title: "Cómo dimensionar un circuito en menos de un minuto",
      intro: "En la obra casi siempre son las mismas tres preguntas: si la caída de tensión pasa, qué cable tirar y qué tubería necesita. Este es el flujo.",
      steps: [
        { name: "Carga e interruptor", text: "Introduce vatios, tensión y fases. Marca la carga como continua si funciona tres horas o más. Obtienes la corriente de carga, la de diseño al 125 %, el siguiente interruptor estándar de 240.6(A) y el conductor mínimo a 75 °C." },
        { name: "Calibre de cable", text: "Abre Calibre con esa corriente, fija la temperatura de terminales, la temperatura ambiente y cuántos conductores portadores comparten la canalización. La app aplica 310.15(B)(1) y 310.15(C)(1) y muestra la ampacidad ajustada de cada calibre cercano." },
        { name: "Caída de tensión", text: "Introduce la longitud de ida. Si la caída supera el 3 %, la app ya muestra el conductor más pequeño que cumple. Cambia a aluminio o añade conjuntos en paralelo para comparar." },
        { name: "Llenado de tubería", text: "Añade los conductores (calibre, aislamiento, cantidad) y lee el tamaño comercial mínimo para EMT, PVC cédula 40 y 80, RMC e IMC, lado a lado." },
      ],
    },
    featuresTitle: "Ocho herramientas, un toque cada una",
    features: [
      { title: "Caída de tensión", text: "CT = 2·K·I·L ÷ CM para monofásico y CC, 1,732 para trifásico; K = 12,9 cobre / 21,2 aluminio. Pies o metros, de #14 AWG a 750 kcmil, conjuntos en paralelo y el calibre más pequeño por debajo del 3 %." },
      { title: "Calibre (ampacidad)", text: "Tabla 310.16 para cobre y aluminio a 60/75/90 °C, regla del 125 % para carga continua, corrección por ambiente, ajuste por número de conductores y los límites de 240.4(D) para calibres pequeños." },
      { title: "Llenado de tubería", text: "Capítulo 9, tablas 1, 4 y 5: cualquier mezcla de THHN/THWN, XHHW y THW, tamaño comercial mínimo por tipo de canalización, o el número máximo de un conductor en una tubería dada." },
      { title: "Llenado de caja", text: "Volúmenes de 314.16(B) para conductores, abrazaderas, soportes, dispositivos y tierras, con comprobación de la caja que tienes." },
      { title: "Carga e interruptor, ley de Ohm, resistencias", text: "De vatios a amperios, interruptor y cable en una pantalla; dos cualesquiera de V, I, R y P; decodificación de resistencias de cuatro y cinco bandas." },
      { title: "Tablas del código", text: "Ampacidad, interruptores estándar, factores de corrección, volúmenes de caja y colores de cables de EE. UU. e IEC, siempre a un toque." },
    ],
    intentsTitle: "Preguntas que responde esta app",
    intents: [
      { h: "¿Cómo calculo la caída de tensión de un circuito ramal?", p: "Introduce tensión, corriente, calibre, material y longitud de ida. La app devuelve la caída en voltios y porcentaje y la tensión en la carga, y avisa si supera los límites informativos del 3 % (ramal) y 5 % (total) de 210.19(A)." },
      { h: "¿Qué calibre necesito para un circuito de 50 amperios?", p: "Para una carga continua de 40 A (50 A requeridos) en cobre a 75 °C, la tabla 310.16 da #8 AWG. Si hace calor o hay más de tres conductores en la canalización, la app aplica los factores y sube de calibre cuando toca." },
      { h: "¿Cuántos #12 THHN caben en un EMT de 3/4 de pulgada?", p: "Dieciséis, según el capítulo 9: tabla 1 (40 %), tabla 4 (área del EMT) y tabla 5 (área del THHN). El modo Máx. conductores responde esto para cualquier calibre, aislamiento y canalización." },
      { h: "¿La app necesita internet o una cuenta?", p: "No. Todas las tablas están dentro de la app; no se descarga ni se sube nada. No hay cuenta, analíticas, anuncios ni suscripción." },
    ],
    compare: {
      title: "Electrician Calculator Toolkit frente al libro del código y las calculadoras gratuitas de una sola función",
      intro: "El libro es la referencia, pero hojearlo con guantes es lento. Las calculadoras gratuitas cubren un solo cálculo y suelen pagarse con anuncios. Esta app junta los ocho cálculos del día a día con la referencia de tabla en cada resultado.",
      columns: ["", "Electrician Calculator Toolkit", "Libro del NEC", "Apps gratuitas de una función"],
      rows: [
        ["Caída, calibre, tubería y caja en un solo sitio", "✓ Ocho herramientas", "✓ Todas las tablas, cálculo manual", "✗ Una por app"],
        ["Factores de corrección automáticos", "✓ Ambiente + conductores", "✗ Manual", "Depende"],
        ["Indica de qué tabla sale el resultado", "✓ En cada pantalla", "✓ Es la tabla", "✗ Rara vez"],
        ["Funciona sin conexión", "✓ Sí", "✓ Sí", "✗ Suele necesitar anuncios"],
        ["Idiomas", "19", "Inglés", "Normalmente uno"],
        ["Precio", "Pago único", "Precio del libro", "Gratis con anuncios"],
      ],
    },
    faqs: [
      { q: "¿De qué edición del código son las tablas?", a: "De la edición 2023 de NFPA 70, el National Electrical Code. Tu jurisdicción puede aplicar una edición anterior o enmiendas locales; trata los resultados como ayuda de cálculo y verifica con el código adoptado y tu inspector." },
      { q: "¿El calibre incluye los factores de corrección?", a: "Sí: la regla del 125 % para carga continua, la corrección por temperatura ambiente de 310.15(B)(1), el ajuste por más de tres conductores portadores de 310.15(C)(1) y los límites de 240.4(D) para #14, #12 y #10." },
      { q: "¿Qué tipos de tubería y aislamiento cubre?", a: "EMT, PVC cédula 40, PVC cédula 80, RMC e IMC, con las áreas de THHN/THWN, XHHW y THW de la tabla 5 del capítulo 9." },
      { q: "¿Puedo usar unidades métricas?", a: "La longitud se puede introducir en metros y la temperatura ambiente en °C o °F. Los calibres siguen AWG/kcmil, como las tablas." },
      { q: "¿Es una suscripción?", a: "No. Es un pago único sin compras dentro de la app." },
      { q: "¿Está afiliada a la NFPA?", a: "No. NEC y National Electrical Code son marcas registradas de la National Fire Protection Association, que no patrocina ni respalda esta app." },
      { q: "¿Hay versión para Android?", a: "Todavía no. La app para iPhone sale primero; una versión para Android está prevista y esta página enlazará a Google Play cuando esté disponible." },
    ],
    related: [
      { blurb: "Fotografía un recibo, indica la duración de la garantía y recibe un aviso antes de que caduque. Sin conexión, pago único." },
      { blurb: "Compara el precio por unidad, suma el impuesto y aplica un descuento. Gratis." },
      { blurb: "Registra café y té, mira cuánta cafeína sigue en tu cuerpo y fija una hora límite antes de dormir. Gratis." },
    ],
    disclaimer:
      "Electrician Calculator Toolkit es una ayuda de cálculo y no sustituye al código, al criterio profesional ni a la autoridad competente. NEC y National Electrical Code son marcas registradas de la National Fire Protection Association, que no patrocina ni respalda esta app.",
  },
  "warranty-tracker": {
    head: {
      title: "App para controlar garantías en iPhone: fotos de tickets, avisos de vencimiento, sin conexión",
      description: "Controla todas tus garantías en el iPhone: fotografía el ticket, indica la duración de la garantía y recibe un aviso antes de que venza. Sin conexión, sin cuenta, sin suscripción. Pago único, 19 idiomas.",
      keywords: "app garantías, app para guardar garantías, control de garantías iphone, guardar tickets app, recordatorio garantía, organizador de garantías, app guardar recibos, garantía electrodomésticos app, app tickets de compra sin conexión",
      ogTitle: "Garantías y Recibos: cada garantía con su ticket, de un vistazo",
      ogDescription: "Fotografía el ticket, indica la duración de la garantía y recibe un aviso antes de que venza. Sin conexión, pago único, sin cuenta.",
    },
    h1: "Un control de garantías que guarda el ticket y te avisa antes de que la garantía venza, sin conexión",
    answer: "Garantías y Recibos guarda cada producto que compras con la foto del ticket, la fecha de compra, el precio, el número de serie y la duración de la garantía, y te avisa antes de que termine. Ves cuántos artículos están activos, por vencer o vencidos y el valor total todavía cubierto. Todo se queda en tu iPhone: sin cuenta, sin nube, sin suscripción y sin anuncios. Pago único, disponible en 19 idiomas.",
    quickFacts: [
      ["Precio", "Pago único. Sin suscripción"],
      ["Guarda", "Fotos del ticket y del producto, fecha de compra, precio, tienda, número de serie, notas"],
      ["Avisos", "Notificaciones locales 90, 60, 30, 14, 7 o 1 día antes del vencimiento"],
      ["Privacidad", "Sin conexión, sin cuenta, sin analíticas, exportación CSV"],
    ],
    screenshotsTitle: "Lo que obtienes: todas las garantías de un vistazo, el ticket adjunto y un aviso antes de que sea tarde",
    screenshots: [
      { alt: "Pantalla principal del control de garantías en iPhone con recuento de activas, por vencer y vencidas y una lista de productos con días restantes", caption: "Todas tus garantías, de un vistazo" },
      { alt: "Detalle de un artículo con foto del ticket, fecha de compra, precio, número de serie y cuenta atrás de la garantía", caption: "El ticket, justo cuando lo necesitas" },
      { alt: "Formulario para añadir un artículo con nombre, tienda, precio, fecha de compra y botones de duración de garantía", caption: "Añádelo en 20 segundos" },
      { alt: "Ajustes de avisos con antelación de 30 y 7 días y hora del día", caption: "Aviso antes de que venza" },
    ],
    howTo: {
      title: "Cómo registrar una garantía en menos de un minuto",
      intro: "El mejor momento para guardar un ticket es el día que te lo dan. El flujo está pensado para eso: el móvil en una mano y el ticket en la otra.",
      steps: [
        { name: "Añade la compra", text: "Toca +, escribe el nombre del producto y la tienda, introduce el precio y la fecha de compra. Elige una categoría para que la lista sea fácil de recorrer." },
        { name: "Indica la duración de la garantía", text: "Toca 6 meses, 1, 2, 3 o 5 años, o escribe cualquier número de meses. Añade una garantía ampliada si la compraste; la app muestra la cobertura total y la fecha exacta de vencimiento." },
        { name: "Fotografía el ticket", text: "Haz una foto del ticket y, si quieres, del producto y de la etiqueta con el número de serie. Las fotos quedan unidas al artículo a tamaño completo." },
        { name: "Deja que los avisos trabajen", text: "Por defecto recibes un aviso 30 y 7 días antes del vencimiento a las 9:00. Cambia la antelación y la hora en Ajustes; todo son notificaciones locales, nada se envía a ningún sitio." },
      ],
    },
    featuresTitle: "Pensada para el día en que algo se rompe",
    features: [
      { icon: "🧾", title: "Fotos del ticket", text: "Cámara o fototeca, varias fotos por artículo, visor a resolución completa con zoom. Enséñalo en el servicio técnico en vez de rebuscar en el correo." },
      { icon: "⏳", title: "Cuenta atrás", text: "Días restantes, barra de progreso y estado (activa, por vencer, vencida) en cada artículo. Ordena por lo que vence primero." },
      { icon: "🔔", title: "Avisos", text: "Cualquier combinación de 90, 60, 30, 14, 7 y 1 día antes, y la hora del día. Solo notificaciones locales." },
      { icon: "➕", title: "Garantías ampliadas", text: "Garantía del fabricante más la ampliación de la tienda o de la tarjeta, sumadas en un único periodo de cobertura." },
      { icon: "📊", title: "Resumen", text: "Recuento de activas, por vencer y vencidas y el valor total aún en garantía. Filtra por estado, busca por nombre, tienda o número de serie." },
      { icon: "📤", title: "Exportación CSV", text: "Exporta todos los artículos a CSV cuando quieras para una hoja de cálculo, un parte al seguro o cambiar de app. Tus datos nunca quedan atrapados." },
    ],
    intentsTitle: "Preguntas que responde esta app",
    intents: [
      { h: "¿Cómo llevo el control de las garantías de todo lo que tengo?", p: "Añade cada compra una vez con la foto del ticket y la duración de la garantía. La pantalla principal lo lista todo ordenado por lo que vence primero, con recuentos de activas, por vencer y vencidas y el valor total cubierto." },
      { h: "¿Dónde guardo los tickets para reclamar una garantía?", p: "Unidos al artículo, en tu móvil. Fotografía el ticket el día de la compra; cuando algo se rompa, abre el artículo y muestra el ticket, la fecha de compra y el número de serie en el mostrador." },
      { h: "¿Cómo recibo un aviso antes de que venza una garantía?", p: "Activa los avisos en Ajustes y elige la antelación (90, 60, 30, 14, 7 o 1 día) y la hora. La app programa notificaciones locales para cada artículo; nada sale del dispositivo." },
      { h: "¿Puedo registrar una garantía ampliada?", p: "Sí. Cada artículo tiene una garantía del fabricante y una ampliación opcional; la app las suma en un único periodo de cobertura y una sola fecha de vencimiento." },
      { h: "¿Necesita cuenta o internet?", p: "No. Funciona sin conexión, no hay cuenta, ni sincronización en la nube, ni analíticas. Incluye la app en la copia de seguridad del iPhone y exporta CSV cuando quieras una copia." },
    ],
    compare: {
      title: "Garantías y Recibos frente al álbum de fotos y las apps de recibos por suscripción",
      intro: "La mayoría guarda los tickets en el carrete o en una carpeta del correo y confía en la memoria para la fecha de la garantía. Las apps de recibos por suscripción lo suben todo a un servidor y cobran cada mes. Esta app mantiene el ticket junto a la fecha de garantía, en el dispositivo, por un pago único.",
      columns: ["", "Garantías y Recibos", "Álbum de fotos / correo", "Apps de recibos por suscripción"],
      rows: [
        ["Ticket unido al producto y a su fecha de garantía", "✓", "✗ Separados", "✓"],
        ["Aviso antes del vencimiento", "✓ Hasta seis antelaciones", "✗", "A veces"],
        ["Garantía ampliada", "✓", "✗", "Depende"],
        ["Sin conexión, nada se sube", "✓", "✓", "✗ Nube"],
        ["Exportar tus datos", "✓ CSV", "✗", "Depende"],
        ["Precio", "Pago único", "Gratis", "Mensual o anual"],
      ],
    },
    faqs: [
      { q: "¿Dónde se guardan mis fotos y datos?", a: "En el almacenamiento propio de la app en tu iPhone. Nada se sube. Si incluyes la app en la copia de seguridad de iPhone o iCloud, se restaura con el resto del teléfono." },
      { q: "¿Tengo que permitir el acceso a la cámara o a las fotos?", a: "Solo si quieres añadir fotos. El permiso de cámara se pide la primera vez que tocas Hacer foto; elegir de la fototeca usa el selector de Apple y no necesita permiso." },
      { q: "¿Puedo cambiar las horas de los avisos?", a: "Sí. En Ajustes eliges cualquier combinación de 90, 60, 30, 14, 7 y 1 día antes del vencimiento y la hora del día. Los avisos se actualizan solos cuando editas un artículo." },
      { q: "¿Cómo paso a un iPhone nuevo?", a: "Restaura el teléfono nuevo desde una copia de seguridad y la app llega con sus datos. También puedes exportar CSV como copia extra. La compra va ligada a tu cuenta de Apple, así que no pagas dos veces." },
      { q: "¿Sincroniza entre dispositivos?", a: "En esta versión no. Es una app de un solo dispositivo y sin conexión por diseño." },
      { q: "¿Es una suscripción?", a: "No. Pago único, sin compras dentro de la app, sin anuncios." },
      { q: "¿Qué idiomas admite?", a: "Inglés, español, alemán, francés, italiano, portugués, neerlandés, polaco, ruso, ucraniano, turco, árabe, hindi, indonesio, vietnamita, tailandés, japonés, coreano y chino simplificado. Puedes forzar un idioma en Ajustes." },
      { q: "¿Hay versión para Android?", a: "Todavía no. La app para iPhone sale primero; la versión Android está prevista y esta página enlazará a Google Play cuando esté disponible." },
    ],
    related: [
      { name: "Electrician Calculator Toolkit", href: "/apps/electrician-calculator", blurb: "Caída de tensión, sección, llenado de tubo y de caja según las tablas NEC 2023, sin conexión. Pago único." },
      { name: "Unit Price Calculator & Tax", href: "/apps/unit-price-calculator", blurb: "Compara precio por unidad, suma impuestos, aplica descuentos. Gratis." },
      { name: "Caffeine Tracker: Curfew", href: "/apps/caffeine-tracker", blurb: "Registra café y té, mira cuánto sigue en tu cuerpo y recibe una hora límite antes de dormir. Gratis." },
    ],
    disclaimer: "Garantías y Recibos es una herramienta personal de registro. Las condiciones de la garantía las fija el fabricante o el vendedor; comprueba siempre las condiciones originales antes de reclamar.",
  },
  "unit-price-calculator": {
    "head": {
      "title": "Calculadora de precio unitario para iPhone: precio por kg, litro o unidad, descuentos, IVA, presupuesto",
      "description": "Calculadora de compras gratis para iPhone: compara el precio por kg, lb, litro o unidad entre envases, acumula descuentos y cupones, suma o quita el IVA, mantén el carrito dentro del presupuesto y divide la cuenta. Sin conexión, sin cuenta, 19 idiomas.",
      "keywords": "calculadora precio unitario, precio por kilo calculadora, comparar precios supermercado app, calculadora de compras, calculadora de descuentos, calculadora porcentaje, calculadora iva, calculadora carrito, dividir cuenta app, calculadora propina",
      "ogTitle": "Unit Price Calculator & Tax: ¿qué envase es realmente más barato?",
      "ogDescription": "Compara el precio por kg, lb o litro, acumula descuentos, suma el IVA, mantén el carrito en presupuesto, divide la cuenta. App gratis para iPhone, sin conexión."
    },
    "h1": "Una calculadora de precio unitario para el pasillo del súper: precio por kg o litro, descuentos acumulados, IVA, presupuesto del carrito y división de cuentas",
    "answer": "Unit Price Calculator & Tax es una calculadora de compras gratuita para iPhone. Introduce el precio y el tamaño de cada envase y convierte todo a una misma base (por kg, lb, l, fl oz o unidad) marcando la mejor opción. Además acumula descuentos como lo hacen las tiendas, suma o quita el IVA, lleva el total del carrito frente a un presupuesto y divide una cuenta con propina. Todo funciona sin conexión y sin cuenta. La versión gratuita muestra un pequeño banner; un pago único lo quita.",
    "quickFacts": [
      [
        "Precio",
        "Gratis. Pago único opcional para quitar anuncios, sin suscripción"
      ],
      [
        "Herramientas",
        "Comparar precio unitario, descuento, IVA, carrito con presupuesto, dividir y propina"
      ],
      [
        "Unidades",
        "g, kg, oz, lb, ml, l, fl oz, gal, unidades, paquetes, multipacks"
      ],
      [
        "Privacidad",
        "Sin conexión, sin cuenta; las listas se quedan en el móvil"
      ]
    ],
    "screenshotsTitle": "Lo que obtienes: el envase más barato, el precio real de la oferta y un carrito que no se pasa del presupuesto",
    "screenshots": [
      {
        "alt": "Calculadora de precio unitario en iPhone comparando tres envases con precio por kilo y la mejor opción destacada",
        "caption": "Qué envase es realmente más barato"
      },
      {
        "alt": "Calculadora de descuentos con 30 % de descuento, 10 % extra, cupón e impuesto mostrando precio final y ahorro",
        "caption": "Descuentos acumulados, precio final"
      },
      {
        "alt": "Total del carrito con artículos, impuesto y lo que queda de un presupuesto de 60",
        "caption": "No te pases del presupuesto"
      },
      {
        "alt": "Calculadora de impuestos quitando el 19 % de IVA de un precio con impuestos",
        "caption": "Suma o quita el IVA"
      },
      {
        "alt": "División de cuenta con 15 % de propina para cuatro personas, redondeada",
        "caption": "Divide la cuenta, redondea"
      }
    ],
    "howTo": {
      "title": "Cómo comparar precios unitarios en la tienda",
      "intro": "Las etiquetas muestran el precio por 100 g en un producto y por kg en el siguiente, o nada en los multipacks. Aquí la versión de 20 segundos.",
      "steps": [
        {
          "name": "Elige la medida",
          "text": "Peso, volumen, unidades o longitud. El menú de unidades solo muestra las que tienen sentido (g, kg, oz, lb para peso; ml, l, fl oz, gal para volumen)."
        },
        {
          "name": "Introduce cada envase",
          "text": "Precio, cantidad y unidad de A y B. Para un multipack, pon Paquetes en 6 y Cantidad en 330 ml. Hasta seis opciones."
        },
        {
          "name": "Lee el resultado",
          "text": "La mejor opción recibe una insignia verde y las demás muestran cuánto más cuestan en porcentaje. Cambia la base (por kg, por 100 g, por lb) en Mostrar precio por."
        },
        {
          "name": "Luego revisa la oferta",
          "text": "Pasa a Descuento para acumular el descuento de estante, el extra en caja y un cupón, con impuesto si tu país lo añade al pagar."
        }
      ]
    },
    "featuresTitle": "Cinco calculadoras para la caja",
    "features": [
      {
        "icon": "⚖️",
        "title": "Comparación de precio unitario",
        "text": "Hasta seis envases, unidades métricas e imperiales mezcladas, multipacks, mejor opción destacada con el sobreprecio en porcentaje de las demás."
      },
      {
        "icon": "🏷️",
        "title": "Descuentos acumulados",
        "text": "Porcentaje, extra sobre el precio rebajado, cupón fijo y luego impuesto: en el orden de la tienda, con lo que pagas y lo que ahorras."
      },
      {
        "icon": "🧾",
        "title": "IVA e impuestos",
        "text": "Suma el impuesto a un precio o quítalo de uno con impuestos incluidos. Botones rápidos para los tipos comunes; fija el tuyo como predeterminado."
      },
      {
        "icon": "🛒",
        "title": "Carrito con presupuesto",
        "text": "Añade artículos mientras compras, márcalos, mira el impuesto y lo que queda del presupuesto con una barra de progreso."
      },
      {
        "icon": "👥",
        "title": "Dividir y propina",
        "text": "Cuenta, porcentaje de propina, número de personas y redondeo para que cada parte sea una cifra entera."
      },
      {
        "icon": "🌍",
        "title": "Tu moneda y tu idioma",
        "text": "Sigue tu símbolo de moneda y separador decimal; 19 idiomas; recuerda tus listas y tu tipo de impuesto entre compras."
      }
    ],
    "intentsTitle": "Preguntas que responde esta app",
    "intents": [
      {
        "h": "¿Cómo se calcula el precio por unidad?",
        "p": "Divide el precio entre la cantidad, en una unidad común. La app hace la conversión: 500 g a 4,49 son 8,98 por kg; 1,2 lb a 4,99 son 9,17 por kg. El número menor es la mejor oferta."
      },
      {
        "h": "¿El envase grande siempre es más barato?",
        "p": "Casi siempre, pero no siempre, y los multipacks y las promociones rompen la regla con frecuencia. Introduce ambos y la app muestra la diferencia exacta en porcentaje."
      },
      {
        "h": "¿Cuánto es 30 % de descuento más un 10 % extra?",
        "p": "No es 40 %. El 10 % extra se aplica al precio ya rebajado, así que 100 pasa a 70 y luego a 63: un 37 % de ahorro. La pestaña Descuento muestra cada paso."
      },
      {
        "h": "¿Cómo quito el IVA de un precio?",
        "p": "Divide entre 1 más el tipo: 119 con 19 % de IVA son 100 netos. Elige Quitar impuesto, introduce el importe y el tipo."
      },
      {
        "h": "¿Necesita internet o cuenta?",
        "p": "No. Todo se calcula en el móvil y tus listas se guardan en local. El único uso de red es el pequeño banner de la versión gratuita, que un pago único elimina."
      }
    ],
    "compare": {
      "title": "Unit Price Calculator & Tax frente a la calculadora del móvil y las apps de un solo uso",
      "intro": "La calculadora integrada sirve si recuerdas las conversiones y las haces dos veces. La mayoría de apps de un solo uso hacen una de estas tareas. Esta app reúne los cinco cálculos de caja y recuerda tus ajustes.",
      "columns": [
        "",
        "Unit Price Calculator & Tax",
        "Calculadora del móvil",
        "Apps de un solo uso"
      ],
      "rows": [
        [
          "Convierte g, kg, oz, lb, ml, l automáticamente",
          "✓",
          "✗ Manual",
          "Algunas"
        ],
        [
          "Multipacks y hasta seis opciones",
          "✓",
          "✗",
          "Rara vez"
        ],
        [
          "Descuentos acumulados con cupón e impuesto",
          "✓",
          "✗ Paso a paso",
          "Solo apps de descuento"
        ],
        [
          "Total del carrito frente a un presupuesto",
          "✓",
          "✗",
          "Solo apps de listas"
        ],
        [
          "Dividir cuenta con propina y redondeo",
          "✓",
          "✗",
          "Solo apps de propina"
        ],
        [
          "Precio",
          "Gratis, pago único sin anuncios",
          "Gratis",
          "Gratis con anuncios o suscripción"
        ]
      ]
    },
    "faqs": [
      {
        "q": "¿La app es gratis?",
        "a": "Sí. La versión gratuita muestra un pequeño banner abajo. Quitar anuncios es un único pago; no hay suscripción ni otra compra dentro de la app."
      },
      {
        "q": "¿Qué unidades admite?",
        "a": "Peso: mg, g, kg, oz, lb. Volumen: ml, l, fl oz, taza, gal. Unidades: pieza, paquete, docena. Longitud: cm, m, in, ft. Puedes mezclar métrico e imperial en una comparación."
      },
      {
        "q": "¿Puedo cambiar la unidad en la que se muestra el precio?",
        "a": "Sí. Mostrar precio por permite elegir por kg, por 100 g, por lb, por l, por 100 ml, por fl oz, por galón y más."
      },
      {
        "q": "¿Recuerda mi tipo de impuesto?",
        "a": "Sí. Fija un tipo como predeterminado desde la pestaña Impuesto o en Ajustes; Descuento y Carrito lo usan automáticamente."
      },
      {
        "q": "¿Qué moneda usa?",
        "a": "La de tu dispositivo por defecto. Puedes elegir otra en Ajustes."
      },
      {
        "q": "¿Funciona sin conexión?",
        "a": "Sí. Los cálculos y las listas nunca salen del móvil. Sin conexión no se muestra ningún anuncio."
      },
      {
        "q": "¿Qué idiomas?",
        "a": "Inglés, español, alemán, francés, italiano, portugués, neerlandés, polaco, ruso, ucraniano, turco, árabe, hindi, indonesio, vietnamita, tailandés, japonés, coreano y chino simplificado."
      },
      {
        "q": "¿Hay versión para Android?",
        "a": "Todavía no. La app para iPhone sale primero; la versión Android está prevista y esta página enlazará a Google Play cuando esté disponible."
      }
    ],
    "related": [
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Fotografía el ticket, fija la garantía y recibe un aviso antes de que venza. Sin conexión, pago único."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Caída de tensión, sección, llenado de tubo y caja según NEC 2023, sin conexión. Pago único."
      },
      {
        "name": "Caffeine Tracker: Curfew",
        "href": "/apps/caffeine-tracker",
        "blurb": "Cuánta cafeína te queda y hasta qué hora puedes tomar el último café. Gratis."
      }
    ],
    "disclaimer": "Unit Price Calculator & Tax es una ayuda para la compra. Los tipos impositivos y las reglas de redondeo varían según el país y la tienda; comprueba el importe final en el ticket."
  },
  "caffeine-tracker": {
    "head": {
      "title": "App para controlar la cafeína en iPhone: cuánta cafeína te queda y tu hora límite antes de dormir",
      "description": "Rastreador de cafeína gratis para iPhone: registra café, té y bebidas energéticas en dos toques, mira los miligramos que siguen en tu cuerpo con un modelo de vida media y recibe un toque de queda para la última taza. Sin conexión, sin cuenta, 19 idiomas.",
      "keywords": "app cafeína, rastreador de cafeína iphone, calculadora de cafeína, vida media cafeína calculadora, contador de café, registro de cafeína, cuánto dura la cafeína, cuándo dejar de tomar café para dormir, calculadora cafeína sueño",
      "ogTitle": "Caffeine Tracker: Curfew: ¿cuánta cafeína te queda dentro?",
      "ogDescription": "Registra una bebida en dos toques, mira bajar el nivel y recibe la hora límite del último café si quieres dormir a tu hora. App gratis para iPhone."
    },
    "h1": "Un rastreador de cafeína que muestra lo que sigue en tu cuerpo y hasta qué hora puedes tomar el último café",
    "answer": "Caffeine Tracker: Curfew estima la cafeína activa en tu cuerpo a partir de lo que registras, con un modelo de vida media (unas 5 horas para la mayoría de adultos, ajustable). Registra espresso, café de filtro, latte, té, matcha, bebidas energéticas y más en dos toques, mira una curva de 12 horas, mantén el día por debajo de 400 mg y fija una hora de dormir con un objetivo (25, 50 o 100 mg) para recibir un toque de queda: la hora límite de tu última bebida. Funciona sin conexión y sin cuenta. Un Pro de pago único añade sincronización con Apple Salud, historial de 30 días y bebidas personalizadas.",
    "quickFacts": [
      [
        "Precio",
        "Gratis. Pro de pago único, sin suscripción"
      ],
      [
        "Modelo",
        "Decaimiento por vida media, de 2,5 a 8 h, 5 h por defecto"
      ],
      [
        "Bebidas",
        "21 preajustes con mg típicos, pequeño / normal / grande, personalizadas con Pro"
      ],
      [
        "Privacidad",
        "Sin conexión, sin cuenta; Apple Salud solo se escribe si lo activas"
      ]
    ],
    "screenshotsTitle": "Lo que obtienes: el número que importa ahora, un toque de queda para esta noche y una semana que se entiende",
    "screenshots": [
      {
        "alt": "Pantalla principal del rastreador de cafeína en iPhone con 128 mg en el cuerpo, total del día frente a 400 mg, toque de queda y curva de 12 horas",
        "caption": "Cuánta cafeína te queda dentro"
      },
      {
        "alt": "Hoja de añadir bebida con cold brew seleccionado, selector de tamaño, hora y lista de cafés con búsqueda",
        "caption": "Registra una bebida en dos toques"
      },
      {
        "alt": "Pantalla de historial con gráfico de barras de siete días y la media diaria",
        "caption": "Mira tu semana, detecta el hábito"
      },
      {
        "alt": "Ajustes con hora de dormir, cafeína al acostarte, vida media y límite diario",
        "caption": "Fija tu hora de dormir, recibe un toque de queda"
      }
    ],
    "howTo": {
      "title": "Cómo encontrar tu hora límite de cafeína",
      "intro": "La pregunta no es cuánto café tomas, sino cuánto queda cuando apoyas la cabeza en la almohada. Tres ajustes y la app hace las cuentas.",
      "steps": [
        {
          "name": "Fija tu hora de dormir",
          "text": "Ajustes → Sueño → Hora de dormir. La app siempre apunta a la hora de dormir de esta noche, aunque registres una bebida tarde, pasada la medianoche."
        },
        {
          "name": "Elige con cuánta cafeína puedes dormir",
          "text": "25 mg si tienes el sueño ligero, 50 mg para la mayoría, 100 mg si la cafeína apenas te afecta. Es el nivel objetivo al acostarte."
        },
        {
          "name": "Registra lo que bebes",
          "text": "Toca una bebida en la pantalla principal (espresso, filtro, latte, té, energética) o abre la lista completa con tamaños y hora para la taza que olvidaste."
        },
        {
          "name": "Lee el toque de queda",
          "text": "La tarjeta Toque de queda dice, por ejemplo: «Última bebida de 95 mg antes de las 15:40 para estar por debajo de 50 mg al acostarte». Pasada esa hora, te dice cuánto te dejaría otra taza al acostarte."
        }
      ]
    },
    "featuresTitle": "Construida alrededor de un número: lo que está activo ahora",
    "features": [
      {
        "icon": "☕",
        "title": "Nivel en vivo",
        "text": "Cada dosis decae con un modelo de vida media. Mira los miligramos activos, un estado (despejado, activo, acelerado) y cuánto falta para bajar de tu objetivo."
      },
      {
        "icon": "🌙",
        "title": "Toque de queda",
        "text": "Hora límite de tu bebida habitual para estar por debajo del objetivo al acostarte. Vida media ajustable para embarazo, medicación o metabolismos rápidos."
      },
      {
        "icon": "⚡",
        "title": "Registro en dos toques",
        "text": "Seis favoritos en la pantalla principal; 21 preajustes con contenidos típicos; pequeño, normal y grande; registro con hora pasada."
      },
      {
        "icon": "📊",
        "title": "Límite diario e historial",
        "text": "Progreso frente a 400, 300 o 200 mg. Siete días de totales con media y días por encima; 30 días con Pro."
      },
      {
        "icon": "❤️",
        "title": "Apple Salud (Pro)",
        "text": "Escribe la cafeína en Salud para tenerla junto a tus datos de sueño. Borrar una bebida elimina la muestra."
      },
      {
        "icon": "🌍",
        "title": "19 idiomas, sin conexión",
        "text": "Nada sale del móvil. Sin cuenta ni analíticas propias; Pro quita el banner de anuncios."
      }
    ],
    "intentsTitle": "Preguntas que responde esta app",
    "intents": [
      {
        "h": "¿Cuánto dura la cafeína en el cuerpo?",
        "p": "Su vida media es de unas 5 horas para la mayoría de adultos: una taza de 95 mg a las 15:00 son unos 48 mg a las 20:00 y 24 mg a la 1:00. La app dibuja exactamente esa curva para todo lo que registres."
      },
      {
        "h": "¿Cuándo debo dejar de tomar café para dormir?",
        "p": "Depende de tu hora de dormir, tu sensibilidad y lo que ya hayas tomado. Con un objetivo de 50 mg y hora de dormir a las 23:00, un solo café de 95 mg tiene que entrar antes de las 18:20; con dos tazas anteriores, mucho antes. La tarjeta lo calcula continuamente."
      },
      {
        "h": "¿Cuánta cafeína tiene un espresso, un latte o un cold brew?",
        "p": "Valores típicos: espresso 63 mg, latte o capuchino 75 mg (un shot), café de filtro 95 mg, cold brew 200 mg, té negro 47 mg, té verde 28 mg, matcha 70 mg, una energética de 250 ml 80 mg. Todos los preajustes se ajustan por tamaño y Pro permite cantidades exactas."
      },
      {
        "h": "¿Cuánta cafeína al día es demasiada?",
        "p": "La referencia habitual para adultos sanos es 400 mg al día; 200 mg durante el embarazo. La app lleva una barra de progreso frente al límite que elijas."
      },
      {
        "h": "¿Necesita internet o cuenta?",
        "p": "No. Todo funciona en el móvil. Apple Salud solo se escribe si lo activas en Pro."
      }
    ],
    "compare": {
      "title": "Caffeine Tracker: Curfew frente a una app de notas y a los rastreadores por suscripción",
      "intro": "Contar tazas no dice nada sobre esta noche. La mayoría de apps de cafeína sí calculan el nivel, pero cobran una suscripción mensual. Esta app da el nivel, el toque de queda y el historial gratis, con un Pro de pago único para la sincronización con Salud.",
      "columns": [
        "",
        "Caffeine Tracker: Curfew",
        "Notas / memoria",
        "Rastreadores por suscripción"
      ],
      "rows": [
        [
          "Cafeína activa con curva de decaimiento",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Toque de queda para la última bebida",
          "✓",
          "✗",
          "Algunos"
        ],
        [
          "Registro en dos toques con mg típicos",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Sincronización con Apple Salud",
          "✓ Pro (pago único)",
          "✗",
          "✓ Suscripción"
        ],
        [
          "Sin conexión, sin cuenta",
          "✓",
          "✓",
          "Depende"
        ],
        [
          "Precio",
          "Gratis, Pro de pago único",
          "Gratis",
          "Mensual o anual"
        ]
      ]
    },
    "faqs": [
      {
        "q": "¿Qué precisión tiene la estimación?",
        "a": "Es una estimación. El contenido de cafeína varía según la preparación y la marca, y la vida media entre personas (de 3 a 7 horas aproximadamente). Ajusta la vida media en Ajustes si sabes que eliminas la cafeína despacio o rápido. No es consejo médico."
      },
      {
        "q": "¿Qué incluye Pro?",
        "a": "Sincronización con Apple Salud (cafeína), historial de 30 días en vez de 7 y bebidas personalizadas con cantidades exactas. Un único pago; no hay suscripción."
      },
      {
        "q": "¿Lee mis datos de Salud?",
        "a": "No. Con Pro y el interruptor activado, escribe muestras de cafeína en Salud y las borra cuando eliminas una bebida. Nunca lee nada."
      },
      {
        "q": "¿Puedo registrar una bebida que olvidé?",
        "a": "Sí. Abre la lista completa y cambia la hora antes de añadir."
      },
      {
        "q": "¿Y si me acuesto después de medianoche?",
        "a": "Ponla normalmente (por ejemplo, 1:00). Una bebida registrada a las 23:00 sigue contando para esta noche."
      },
      {
        "q": "¿Qué idiomas?",
        "a": "Inglés, español, alemán, francés, italiano, portugués, neerlandés, polaco, ruso, ucraniano, turco, árabe, hindi, indonesio, vietnamita, tailandés, japonés, coreano y chino simplificado."
      },
      {
        "q": "¿Hay versión para Android?",
        "a": "Todavía no. La app para iPhone sale primero; la versión Android está prevista y esta página enlazará a Google Play cuando esté disponible."
      }
    ],
    "related": [
      {
        "name": "Unit Price Calculator & Tax",
        "href": "/apps/unit-price-calculator",
        "blurb": "Qué envase es más barato por kg o litro, descuentos acumulados, IVA, presupuesto del carrito y división de cuentas. Gratis."
      },
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Fotografía el ticket, fija la garantía y recibe un aviso antes de que venza. Sin conexión, pago único."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Caída de tensión, sección, llenado de tubo y caja según NEC 2023, sin conexión. Pago único."
      }
    ],
    "disclaimer": "Caffeine Tracker: Curfew usa un modelo simple de vida media y contenidos medios de cafeína. No es un producto sanitario ni consejo médico; consulta a un profesional sobre la cafeína y tu salud."
  },
};
