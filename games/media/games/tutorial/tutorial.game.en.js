// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
	start: new undum.SimpleSituation(
		"<h1>Introducci&#243n</h1>\
        <img src='media/games/tutorial/granja.png' class='float_right'>\
        <p>Mi nombre es Ferdinand, y soy un simple campesino de 18 a&#241os que vive en un modesto pueblo llamado Ancira, \
		lejos de las grandes ciudades del reino. La vida aqu&#237 es muy simple, mi d&#237a a d&#237a consiste en cultivar y en conseguir sobrevivir. \
		Tampoco est&#225 tan mal, no hay que complicarse con muchos l&#237os, y la gente de aqu&#237 es muy entra&#241able. Me ayudaron mucho cuando falleci&#243 mi madre \
		hace ya 5 a&#241os, son como una gran familia para m&#237.</p>\
        \
        <p>Mi historia comenz&#243 como un d&#237a cualquiera. Me levant&#233 un poco m&#225s tarde de lo habitual, y mientras tomaba el desayuno, Luc&#237a, \
		mi mejor amiga desde que tengo uso de raz&#243n  apareci&#243 sin previo aviso</p>\
		<p>- &#161Saludos Ferdie!  &#191Te parecen que estas son horas para desayunar? </p>\
		<p>- No descans&#233 bien, y amanec&#237 tarde, tampoco hay que ponerse as&#237 - respondo sin hacerle mucho caso.</p>\
		<p>Luc&#237a me mir&#243 con una cara de enfado, pero simplemente resopl&#243 y continu&#243.</p>\
		<p>- Bueno, hab&#237a pensado que hoy podr&#237as acompa&#241arme para cuidar del ganado - dijo Luc&#237a - Necesitaremos provisiones para las fiestas venideras y un poco de ayuda no estar&#237a mal.</p>\
        \
        <p class='transient'>Ya ten&#237a planeado ir a por el cultivo, pues hoy era el d&#237a de la recolecta. No s&#233 qu&#233 decidir entre <a href='sit1'>acompa&#241ar a\
        Luc&#237a</a> o <a href='sitcultivo'>Ir al cultivo</a> </p>"
	),

	// NB: The 'hub' situation which is the main list of topics, is
	// defined wholly in the HTML file, and doesn't have an entry in
	// the game.situations dictionary in this file.

	// For variety, here we define a situation using the top-level
	// Situation type. This is a neat approach to generate text by
	// looking it up in the HTML document. For static text that makes
	// more sense than writing it longhand.
	situations: new undum.Situation({
		enter: function (character, system, from) {
			system.write($("#s_situations").html());
		},
		tags: ["topic"],
		optionText: "What Undum Games are Made Of",
		displayOrder: 1
	}),
	sit1: new undum.SimpleSituation(

		"<h1>Acompañar a Luc&#237a</h1>\
        <p>Est&#225 bien, hoy ir&#233 contigo - respond&#237. </p>\
        <img src='media/games/tutorial/ganado.jpg' class='float_right'>\
        \
		<p>Una gran sonrisa se esboza en la cara de Luc&#237a.</p>\
		<p>-&#161Genial! - dijo con una sonrisa esbozada - Pues ir&#233 para la granja ya. No tardes mucho, &#191vale? -\
		Despu&#233s de decir eso sali&#243 corriendo, casi tropezando por el camino.</p>\
		\
		<p>Despu&#233s de terminar el desayuno, fui a la granja con Luc&#237a. All&#237, ella me esperaba con la cara ilusionada,\
		como si fuera la primera vez que la ayudo en sus tareas.</p>\
		<p>-Bueno, as&#237 de primeras, puedes<a href='sit1a'> orde&#241ar las vacas</a>, o<a href='sit1b'> comprobar el pienso de las gallinas.</a></p>"
		,
		{
			enter: function (character, system, from) {
				$('body').css('background-image', 'url(media/games/tutorial/granja.jpg)').css( 'background-size','granja')
			}
		}
	),

	sit1a: new undum.SimpleSituation(
		"<p>-Creo que prefiero orde&#241ar las vacas.</p>\
		<img src='media/games/tutorial/vacas.jpg' class='float_right'>\
		<p>-&#161Pues aqu&#237 tienes! - Luc&#237a se da la vuelta, coge un cubo y lo levanta r&#225pidamente -\
		Hay m&#225s en ese almac&#233n, intenta llenar los que puedas. Luego ir&#233 a ayudarte si hace falta.</p>\
		\
		<p>Cog&#237 los cubos y me dirig&#237 a donde estaban todas las vacas. Parec&#237an bastante d&#243ciles,\
		as&#237 que empec&#233 a orde&#241arlas, una a una. Antes de darme cuenta, hab&#237a llenado todos los cubos que hab&#237a llevado.\
		Estaba metiendo la leche orde&#241ada en botellas cuando ella lleg&#243.</p>\
		\
		<p>-Vaya, qu&#233 velocidad - dijo Luc&#237a, bastante sorprendida - Ven&#237a porque estaba\
		algo preocupada por ti, pero veo que te desenvuelves bien con las vacas.</p>\
		<p>Ni que esta fuera la primera vez que orde&#241o una vaca - dije un tanto molesto.</p>\
		<p>-Bueno, viendo lo capaz que eres, vamos a hacer unas cuantas tareas juntas, &#191vale? - dijo Luc&#237a mientras gui&#241aba un ojo.</p>\
		\
		<p>As&#237 que despu&#233s de esa tarea, Luc&#237a y yo nos pasamos todo el d&#237a trabajando en la granja.\
		La verdad, me gusta su compa&#241&#237a as&#237 que fue un d&#237a muy llevadero. Faltaba poco para que empezara\
		a anochecer, as&#237 que decidimos dejarlo por hoy.</p>\
		\
		<p>-&#161Much&#237simas gracias Ferdie! - dijo alegremente Luc&#237a - No s&#233 cu&#225n &#250til ha sido tu ayuda,\
		pero desde luego ha sido mucho m&#225s divertido.</p>\
		<p>-Yo tambi&#233n me he divertido mucho - dije sonri&#233ndole de vuelta.</p>\
		\
		<p>Un silencio nos abrum&#243 de repente, mientras ve&#237amos como el atardecer iba avanzando.\
		No s&#233 cu&#225ntos segundos o minutos pasaron, hasta que ella rompi&#243 el silencio.</p>\
		\
		<p>-&#191Quieres que salgamos esta noche a cenar t&#250 y yo? - dijo Luc&#237a - Aunque no s&#233 d&#243nde podr&#237amos ir.</p>\
		<p>-&#191Qu&#233 tal en la vieja taberna? - es mi sitio favorito para comer, as&#237 que fue lo primero que se me vino a la mente.</p>\
		<p>-Uf... - no parece que le sentara muy bien - S&#233 que te encanta ese sitio, pero yo nunca he ido...</p>\
		<p>-Venga, que ya no eres una cr&#237a. - Trat&#233 de usar mis habilidades de persuasi&#243n -\
		Adem&#225s no es como si estuvieras sola, &#161yo te protejo si hace falta!</p>\
		<p>-&#161Hum! - lo que antes parec&#237an dudas desaparecieron instant&#225neamente tras ese comentario -\
		&#161Ni que fuera una damisela en apuros! Puedo apa&#241&#225rmelas sola, muchas gracias.</p>\
		<p>-&#191Entonces eso es un s&#237? - dije inquisitivamente.</p>\
		<p>-Est&#225 bien - concedi&#243 finalmente Luc&#237a - Voy a mi casa a cambiarme, nos vemos all&#237.</p>\
		\
		<p>Despu&#233s del intercambio volv&#237 a casa y me prepar&#233 para la cena.</p>\
		\
		<p>Una vez preparado sal&#237 de camino a la taberna con paso ligero, no quer&#237a hacerla esperar y quedar mal.\
		Aunque vivo a las afueras del pueblo no se tarda mucho en llegar a la plaza central del mismo.</p>\
		\
		<img src='media/games/tutorial/daga.jpg' class='float_left'>\
		<p>Tomé un atajo para no retrasar a mi amistosa compañera. Intenté no retrasarme por el camino, mas <a href='./daga' class='once'>una daga</a> de un color y empuñadura vistosa\
		 me hizo retrasarme para inspeccionarla</p>\
		<p>Ya hab&#237a anochecido cuando llegu&#233 a la taberna. Para mi sorpresa, llegu&#233 antes que Luc&#237a.\
		As&#237 que decid&#237 esperarla en la entrada. Pasaron varios minutos hasta que al final la dislumbr&#233 corriendo hacia la taberna.</p>\
		\
		<img src='media/games/tutorial/taberna.jpg' class='float_left'>\
		<p>-&#161Lo siento lo siento lo siento...! - Se le escucha decir mientras se acerca a la taberna.</p>\
		\
		<p>Hum, no s&#233 si<a href='sitaberna1'> ech&#225rselo en cara de mofa,</a> o<a href='sitaberna2'> echar pelillos a la mar.</a></p>"
		, {
			actions: {
				'daga': function (character, system, action) {
					system.setQuality("daga", true);
					system.setCharacterText("<p> La daga te induce un poder interior tan intenso que sientes la fuerza del verdadero Thor\
					corriendo por tus venas</p>");
				}
			}
		}
	),

	sit1b: new undum.SimpleSituation(
		"<p>-Creo que comprobar&#233 el pienso de las gallinas.</p> \
		<img src='media/games/tutorial/gallinas.jpg' class='float_right'>\
		<p>-Bueno, pues ve al almac&#233n y coge el saco marr&#243n que est&#225 dentro. Luego ir&#233 a ayudarte si hace falta. - dijo Luc&#237a. </p> \
		\
		Despu&#233s de eso, me dirig&#237 al almac&#233n. Estaba bastante bien protegido, as&#237 que pese a ser de d&#237a el interior estaba\
		bastante oscuro. Cog&#237 el saco que se encontraba en la entrada y me dirig&#237 al gallinero.\
		Empec&#233 a rellenar los comederos que se encontraban vac&#237os, pero la tarea se trunc&#243 cuando una gallina picote&#243 el saco,\
		rasg&#225ndolo en el proceso. Mucho pienso acab&#243 esparcido por el suelo.</p>\
		\
		<p>-&#161&#191Pero qu&#233 ha pasado aqu&#237?! - Luc&#237a entr&#243 al gallinero como una exhalaci&#243n - &#161&#191Ferdie?!</p>\
		<p>-Ugh... - era un poco vergonzoso, nunca te hab&#237a pasado algo as&#237 - La gallina ha roto el saco...</p>\
		<p>-Madre m&#237a, no se te puede dejar solo ni un segundo eh... Venga, te ayudo a limpiar este desastre.</p>\
		\
		<p>As&#237 que despu&#233s de esa tarea, Luc&#237a y yo nos pasamos todo el d&#237a trabajando en la granja.\
		La verdad, me gusta su compa&#241&#237a as&#237 que fue un d&#237a muy llevadero. Faltaba poco para que empezara\
		a anochecer, as&#237 que decidimos dejarlo por hoy.</p>\
		\
		<p>-&#161Much&#237simas gracias Ferdie! - dijo alegremente Luc&#237a - No s&#233 cu&#225n &#250til ha sido tu ayuda,\
		pero desde luego ha sido mucho m&#225s divertido.</p>\
		<p>-Yo tambi&#233n me he divertido mucho - dije sonri&#233ndole de vuelta.</p>\
		\
		<p>Un silencio nos abrum&#243 de repente, mientras ve&#237amos como el atardecer iba avanzando.\
		No s&#233 cu&#225ntos segundos o minutos pasaron, hasta que ella rompi&#243 el silencio.</p>\
		\
		<p>-&#191Quieres que salgamos esta noche a cenar t&#250 y yo? - dijo Luc&#237a - Aunque no s&#233 d&#243nde podr&#237amos ir.</p>\
		<p>-&#191Qu&#233 tal en la vieja taberna? - es mi sitio favorito para comer, as&#237 que fue lo primero que se me vino a la mente.</p>\
		<p>-Uf... - no parece que le sentara muy bien - S&#233 que te encanta ese sitio, pero yo nunca he ido...</p>\
		<p>-Venga, que ya no eres una cr&#237a. - Trat&#233 de usar mis habilidades de persuasi&#243n -\
		Adem&#225s no es como si estuvieras sola, &#161yo te protejo si hace falta!</p>\
		<p>-&#161Hum! - lo que antes parec&#237an dudas desaparecieron instant&#225neamente tras ese comentario -\
		&#161Ni que fuera una damisela en apuros! Puedo apa&#241&#225rmelas sola, muchas gracias.</p>\
		<p>-&#191Entonces eso es un s&#237? - dije inquisitivamente.</p>\
		<p>-Est&#225 bien - concedi&#243 finalmente Luc&#237a - Voy a mi casa a cambiarme, nos vemos all&#237.</p>\
		\
		<p>Despu&#233s del intercambio volv&#237 a casa y me prepar&#233 para la cena.</p>\
		\
		<p>Una vez preparado sal&#237 de camino a la taberna con paso ligero, no quer&#237a hacerla esperar y quedar mal.\
		Aunque vivo a las afueras del pueblo no se tarda mucho en llegar a la plaza central del mismo.</p>\
		\
		<img src='media/games/tutorial/daga.jpg' class='float_left'>\
		<p>Tomé un atajo para no retrasar a mi amistosa compañera. Intenté no retrasarme por el camino, mas <a href='./daga' class='once'>una daga</a>  de un color y empuñadura vistosa\
		 me hizo retrasarme para inspeccionarla</p>\
		<p>Ya hab&#237a anochecido cuando llegu&#233 a la taberna. Para mi sorpresa, llegu&#233 antes que Luc&#237a.\
		As&#237 que decid&#237 esperarla en la entrada. Pasaron varios minutos hasta que al final la dislumbr&#233 corriendo hacia la taberna.</p>\
		<img src='media/games/tutorial/taberna.jpg' class='float_left'>\
		\
		<p>-&#161Lo siento lo siento lo siento...! - Se le escucha decir mientras se acerca a la taberna.</p>\
		\
		<p>Hum, no s&#233 si<a href='sitaberna1'> ech&#225rselo en cara de mofa,</a> o<a href='sitaberna2'> echar pelillos a la mar.</a></p>"
		, {
			actions: {
				'daga': function (character, system, action) {
					system.setQuality("daga", true);
					system.setCharacterText("<p> La daga te induce un poder interior tan intenso que sientes la fuerza del verdadero Thor\
					corriendo por tus venas</p>");
				}
			}
		}
	),

	sitcultivo: new undum.SimpleSituation(
		"<h1>Ir al cultivo</h1>\
		<p>Decido seguir arando el campo. Los brazos me pesaban del cansancio y el atardecer estaba llegando,\
		<img src='media/games/tutorial/cultivo.jpg' class='float_right'>\
		pero justo antes de terminar, me sobresalté con el graznido de un cuervo que pasó cerca de mí, por un momento vi que llevaba algo brillante en su pico.\
        Lo seguí con cierta curiosidad hasta un árbol cerca del cultivo, viendo como se posa en él y vuelve a irse pero sin el objeto brillante en su pico.\
    	Escalé el árbol y ¡Qué leches! el cuervo llevaba un pendiente de oro. Cojo el pendiente, bajo el árbol y salto de la alegría. Hoy es mi día de suerte, justo cuando necesitaba algo de dinero - piensas.\
    	Corrí lo más rápido que pude hacia el pueblo, ya que estaba empezando a anochecer y el herrero cerraba pronto \
		<img src='media/games/tutorial/forja.jpg' class='float_left'></p>\
		<p>Llegué como pude a la herrería. Nada más entrar le dije al herrero:</p>\
		<p>- ¡Buenas! Quiero venderte este pendiente, por favor, necesito el dinero cuanto antes.</p>\
    	<p>El herrero me miró con cara de duda.</p>\
    	- ¿Un chico con un pendiente? Que extraño…\
    	<p>En ese momento, Ferdinand sintió el verdadero terror, ¿como le explico que se lo he robado a un cuervo, que a su vez se lo habrá robado a alguien?\
		En un segundo caes en la mejor excusa posible.</p>\
    	<p>- ¿Qué pasa? ¿Los chicos no podemos llevar pendientes?\
    	A lo que el herrero, de pronto, empezó a sudar bastamente, sabiendo que había perdido todo argumento para replicarme.</p>\
   		<p>- No, no, sin problema claro, la verdad que no sé por qué te he preguntado eso jaja.</p>\
		<p>El herrero me da el dinero suficiente para aguantar durante bastante tiempo, así que no tendré ningún problema para invitar a Lucía a cenar esta noche.\
		Suspiro de cansancio por la tremenda tarde que he tenido entre el trabajo y llegar a la herrería, pero me despejo rápidamente, ya que he quedado con Lucía, así que <a href='continuacioncultivo'>me preparo con la mayor brevedad posible.</a>\
     	</p>"
	),

	continuacioncultivo: new undum.SimpleSituation(
		"<p>Una vez preparado sal&#237 de camino a la taberna con paso ligero, no quer&#237a hacerla esperar y quedar mal.\
		Aunque vivo a las afueras del pueblo no se tarda mucho en llegar a la plaza central del mismo.</p>\
		\
		<img src='media/games/tutorial/daga.jpg' class='float_left'>\
		<p>Tomé un atajo para no retrasar a mi amistosa compañera. Intenté no retrasarme por el camino, mas <a href='./daga' class='once'>una daga</a>  de un color y empuñadura vistosa\
		 me hizo retrasarme para inspeccionarla</p>\
		<p>Ya hab&#237a anochecido cuando llegu&#233 a la taberna. Para mi sorpresa, llegu&#233 antes que Luc&#237a.\
		As&#237 que decid&#237 esperarla en la entrada. Pasaron varios minutos hasta que al final la dislumbr&#233 corriendo hacia la taberna.</p>\
		\
		<p>-&#161Lo siento lo siento lo siento...! - Se le escucha decir mientras se acerca a la taberna.</p>\
		\
		<p>Hum, no s&#233 si<a href='sitaberna1'> ech&#225rselo en cara en plan broma,</a> o<a href='sitaberna2'> echar pelillos a la mar.</a></p>"
		, {
			actions: {
				'daga': function (character, system, action) {
					system.setQuality("daga", true);
					system.setCharacterText("<p> La daga te induce un poder interior tan intenso que sientes la fuerza del verdadero Thor\
					corriendo por tus venas</p>");
				}
			}
		}
	),

	sitaberna1: new undum.SimpleSituation(
		"<p>-Vaya vaya, y eso que eres tú la que siempre dice que “llegar tarde es de mala educación, ¡el tiempo es oro y no es\
	bueno gastar el de los demás! - dije intentando imitar de mala manera su voz.</p>\
	\
	<p>-¡Igual deberías hacer de bufón con imitaciones tan malas como esa! - dijo enojada Lucía mientras jadeaba después de\
	la carrerita - ¡Solo ha sido una vez!</p>\
	\
	<p>-Ya, ¿y por qué motivo me has hecho perder mi precioso tiempo entonces? - dije como mofa.</p>\
	\
	<p>-Simplemente no encontraba mi collar, eso es todo. Mi madre ha tenido que moverlo de sitio...</p>\
	\
	<p>Lucía mostró el collar orgullosamente, como si no lo hubiera visto ya cientos de veces. Pero sí es cierto que era un collar precioso.\
	Tengo entendido que se lo dio su padre muy de joven y siempre se aleja de su casa lo lleva encima, como si fuera un amuleto de buena suerte.</p>\
	<p>-Bueno, ¿vamos entrando?</p>\
	\
	<p>-¡Por supuesto! - dijo mientras guiñaba Lucía.</p>\
	\
	<p>Dentro de la taberna tomamos la mesa más cercana a la barra. El ambiente era muy cálido, estaba casi lleno con gente muy alegre\
	en las mesas de alrededor. Un camarero se acercó a la mesa al rato.</p>\
	\
	<p>-¿Qué va a ser esta noche?</p>\
	\
	<p>No s&#233 si pedir<a href='comidaa'> el tipico filete con carne y vino de beber</a>, algo más ligero en la forma de<a href='comidab'> un revuelto con hidromiel de bebida</a>, o simplemente\
	<a href='comidac'> que me sorprenda el camarero.</a></p>"
	,
		{
			enter: function (character, system, from) {
				$('body').css('background-image', 'url(media/games/tutorial/ftaberna.jpg)').css( 'background-size','cover','100% 100%')
			}
		}
	),

	sitaberna2: new undum.SimpleSituation(
		"<p>-Tranquila, he llegado hace nada, así que no me has hecho esperar - traté de tranquilizarla.</p>\
	\
	<p>-¡¿De verdad?! - dijo mientras jadeaba por la carrera Lucía. Se paró y tomó aire para responder aliviada - Me alegro...</p>\
	\
	<p>-En cualquier caso, no te ha pasado nada viniendo, ¿no?</p>\
	\
	<p>-Oh no, nada por el estilo. Es que no encontraba mi collar y no quería salir sin él.</p>\
	\
	<p>Lucía mostró el collar orgullosamente, como si no lo hubiera visto ya cientos de veces. Pero sí es cierto que era un collar precioso.\
	Tengo entendido que se lo dio su padre muy de joven y siempre se aleja de su casa lo lleva encima, como si fuera un amuleto de buena suerte.</p>\
	<p>-Bueno, ¿vamos entrando?</p>\
	\
	<p>-¡Por supuesto! - dijo mientras guiñaba Lucía.</p>\
	\
	<p>Dentro de la taberna tomamos la mesa más cercana a la barra. El ambiente era muy cálido, estaba casi lleno con gente muy alegre\
	en las mesas de alrededor. Un camarero se acercó a la mesa al rato.</p>\
	\
	<p>-¿Qué va a ser esta noche?</p>\
	\
	<p>No s&#233 si pedir<a href='comidaa'> el tipico filete con carne y vino de beber</a>, algo más ligero en la forma de<a href='comidab'> un revuelto con hidromiel de bebida</a>, o simplemente\
	<a href='comidac'> que me sorprenda el camarero.</a></p>"
	,
		{
			enter: function (character, system, from) {
				$('body').css('background-image', 'url(media/games/tutorial/ftaberna.jpg)').css( 'background-size','cover','100% 100%')
			}
		}
	),

	comidaa: new undum.SimpleSituation(
		"<p>-Pues para mí un buen filete de carne y vino para acompañarlo - era lo que casi siempre pedía, me encantaba como preparaban la carne allí.</p>\
	\
	<p>-¿Y la señorita?</p>\
	\
	<p>-Ya, ¿y por qué motivo me has hecho perder mi precioso tiempo entonces? - dije como mofa.</p>\
	\
	<p>-A mí ponme lo mismo que a él.</p>\
	\
	<p>-¿Estás segura? - estaba algo sorprendido - Igual es demasiada comida para ti.</p>\
	\
	<p>-¡Sí, estoy segura! - dijo mientras me apartaba la mirada.</p>\
	\
	<p>-Marchando entonces - dijo el camarero mientras se dirigía a la cocina.</p>\
	\
	<p>Charlé con Lucía sobre las fiestas venideras, hasta que finalmente llegó la comida. Eran unos filetes de carnes bastante grandes y suculentos,\
	con una salsa de setas para acompañarlo. Tenía un aspecto increíble, empecé a salivar dispuesto a comenzar a devorar mi plato, hasta que levanté\
	la mirada un segundo de éste para ver la cara de Lucía con una mezcla de disgusto y sorpresa que no podía dejar pasar.</p>\
	\
	<p>-Es… enorme - seguía bastante sorprendida, hasta que hizo un cambio radical atacandome - ¡¿Por qué no dijiste que era tan grande?!</p>\
	\
	<p>-Yo te había avisado, no es culpa mía que la señorita no sea capaz de tomar mi opinión en serio - dije mofándome un poco.</p>\
	\
	<p>-¡Ugh! - tras otro arrebato de ira, Lucía arremetió contra el plato.</p>\
	\
	<p>Nunca había visto comer tanto en mi vida, pero logró comerse el plato entero. Incluso se tomó el vino, pese a nunca haberla visto tomar dicha bebida.</p>\
	\
	<p>-¡¿Qué te ha parecido?! - dijo algo contenta - ¡No hay nada que no pueda conseguir!</p>\
	\
	<p>-Ni que esto fuera una competición o algo - dije, aunque para mis adentros admito que me pareció bastante graciosa mientras devoraba el plato de aquella manera.</p>\
	\
	<p>Terminamos la comida tranquilamente, fue una noche magnífica. Nos disponíamos a salir cuando entraron dos personas con apariencia intimidante\
	y misteriosa, parecían forasteros de algún lugar lejano, pero no le dimos mucha importancia y decidimos salir del bar.</p>\
	\
	<p>Estábamos llegando a la puerta cuando de pronto, un tío le sujetó el brazo de malas maneras a Lucía, la cual se giró con cara de pocos amigos.</p>\
	\
	<p>-¿Qué te crees que estás haciendo? - respondió con enfado Lucía.</p>\
	\
	<p>-Ehhh nenaaa - el hombre desprendía un fuerte olor a alcohol - ¿no quiereh da una vueltesita conmigo?</p>\
	\
	<p>Ella hizo una mueca disgustada, y ante la situación le soltó un puñetazo, haciendo que se tambaleara. Él se giró con aire violento, y otro hombre se levantó de la mesa de la que venía el borracho.</p>\
	\
	<p>-¿Quieres jugar, eh gatita? - dijo el borracho mientras se tocaba la cara.</p>\
	\
	<p>-¿Tienes algún problema con mi primo? - dijo el otro hombre.</p>\
	\
	<p>Viendo como se estaba desenvolviendo la situación barajas tus opciones, si<a href='peleaa'> meterte en el fregado</a> o<a href='peleab'> mantenerte al margen.</a></p>"

	),

	comidab: new undum.SimpleSituation(
		"<p>-Un revuelto y de beber hidromiel - Tampoco era cuestión de hincharse esta vez.</p>\
	\
	<p>-¿Y la señorita?</p>\
	\
	<p>-A mí ponme lo mismo que a él.</p>\
	\
	<p>-Marchando entonces - dijo el camarero mientras se dirigía a la cocina</p>\
	\
	<p>La cena fue fantástica. Charlé con Lucía sobre las fiestas venideras, hicimos bromas y nos lo pasamos genial. La comida también fue magnífica, \
	el plato estaba combinado de manera que no se hacía nada pesado, y los sabores de las verduras en el revuelto resaltaban de manera espectacular.</p>\
	\
	<p>- Pues debo darte la razón, -afirmó Lucía después de echar un trago de hidromiel - este sitio no está naaada mal. </p>\
	\
	<p>- Te lo dije, deberías hacerme caso más a menudo- dije en tono orgulloso. </p>\
	\
	<p>-Je, es verdad. Ya no eres aquel enclenque al que no le podías confiar nada. </p>\
	\
	<p>Terminamos la comida tranquilamente, fue una noche magnífica. Nos disponíamos a salir cuando entraron dos personas con apariencia intimidante\
	y misteriosa, parecían forasteros de algún lugar lejano, pero no le dimos mucha importancia y decidimos salir del bar.</p>\
	\
	<p>Estábamos llegando a la puerta cuando de pronto, un tío le sujetó el brazo de malas maneras a Lucía, la cual se giró con cara de pocos amigos.</p>\
	\
	<p>-¿Qué te crees que estás haciendo? - respondió con enfado Lucía.</p>\
	\
	<p>-Ehhh nenaaa - el hombre desprendía un fuerte olor a alcohol - ¿no quiereh da una vueltesita conmigo?</p>\
	\
	<p>Ella hizo una mueca disgustada, y ante la situación le soltó un puñetazo, haciendo que se tambaleara. Él se giró con aire violento, y otro hombre se levantó de la mesa de la que venía el borracho.</p>\
	\
	<p>-¿Quieres jugar, eh gatita? - dijo el borracho mientras se tocaba la cara.</p>\
	\
	<p>-¿Tienes algún problema con mi primo? - dijo el otro hombre.</p>\
	\
	<p>Viendo como se estaba desenvolviendo la situación barajas tus opciones, si<a href='peleaa'> meterte en el fregado</a> o<a href='peleab'> mantenerte al margen.</a></p>"

	),

	comidac: new undum.SimpleSituation(
		"<p>-¿Por qué no me sorprende hoy? Póngame lo que le apetezca.</p>\
	\
	<p>-Oh, esto es interesante - dijo el camarero algo sorprendido -¿Y la señorita?</p>\
	\
	<p>-Pues… venga por qué no, también quiero un plato sorpresa.</p>\
	\
	<p>-Están aventureros hoy eh… - dijo con una sonrisilla - Pues voy a ver que se le ocurre a cocina.</p>\
	\
	<p>Estábamos un poco nerviosos por la comida, aunque no quisiéramos admitirlo. Tampoco queríamos que la cena se arruinara por la comida, pues el ambiente era genial. Al rato llegó el camarero con la bebida.</p>\
	\
	<p>-Esta bebida es un trabajo casero, receta de nuestro chef. Todavía no sabemos si le va a gustar al público, así que hemos aprovechado para usaros de conejillos de indias - dijo en tono jocoso el camarero.</p>\
	\
	<p>-Pues no sé si me hace mucha gracia ser una conejilla de indias… ¿Podemos saber que lleva la bebida?</p>\
	\
	<p>-Es un secreto. - dijo mientras volvía a la cocina.</p>\
	<img src='media/games/tutorial/bebida.jpg' class='float_right'>\
	\
	<p>La bebida era de un tono oscuro, y tenía burbujas. Nunca había visto una bebida como aquella. Decidimos probarla y, sorprendentemente, estaba dulce. </p>\
	\
	<p>-Es… muy refrescante. - dije sorprendido - Está bastante mejor de lo que esperaba.</p>\
	\
	<p>¿Bromeas? ¡Es lo mejor que he tomado en mucho tiempo! - dijo Lucía para inmediatamente darle un largo trago a aquella misteriosa bebida.</p>\
	\
	<p>La comida acabó siendo un plato combinado, pero no pudimos dejar de pensar en aquella bebida misteriosa. Quizá la pida la próxima vez que venga a este lugar.</p>\
	\
	<p>Terminamos la comida tranquilamente, fue una noche magnífica. Nos disponíamos a salir cuando entraron dos personas con apariencia intimidante\
	y misteriosa, parecían forasteros de algún lugar lejano, pero no le dimos mucha importancia y decidimos salir del bar.</p>\
	\
	<p>Estábamos llegando a la puerta cuando de pronto, un tío le sujetó el brazo de malas maneras a Lucía, la cual se giró con cara de pocos amigos.</p>\
	\
	<p>-¿Qué te crees que estás haciendo? - respondió con enfado Lucía.</p>\
	\
	<p>-Ehhh nenaaa - el hombre desprendía un fuerte olor a alcohol - ¿no quiereh da una vueltesita conmigo?</p>\
	\
	<p>Ella hizo una mueca disgustada, y ante la situación le soltó un puñetazo, haciendo que se tambaleara. Él se giró con aire violento, y otro hombre se levantó de la mesa de la que venía el borracho.</p>\
	\
	<p>-¿Quieres jugar, eh gatita? - dijo el borracho mientras se tocaba la cara.</p>\
	\
	<p>-¿Tienes algún problema con mi primo? - dijo el otro hombre.</p>\
	\
	<p>Viendo como se estaba desenvolviendo la situación barajas tus opciones, si<a href='peleaa'> meterte en el fregado</a> o<a href='peleab'> mantenerte al margen.</a></p>"
	),
	"peleaa": new undum.SimpleSituation(
		"<p>El hombre borracho se disponía a darle una torta a Lucía, así que me puse en medio y encajé el\
		 golpe como pude.</p>\
		 \
		<p>-¡Ah, con que también quieres recibir tú…! - dijo el borracho enfadado\
		</p>",
		{
				enter: function( character, system, from ) {
					if( character.qualities.daga ) {
						system.doLink( "sidaga" );
					} else { 
						system.doLink( "nodaga" );
					}
				}
		}
	),
	"peleab": new undum.SimpleSituation(
		"<p>Decidí dar un paso hacia atrás viendo lo que se venía, pero el borracho se percató y soltó</p>\
			<p>-¡¿Tú no eres amigo de ella?!</p>\
			<p>-¿Yo? No, para nada, soy un refinado catador de tierras lejanas que...</p>\
			<p>-¡Déjate de tonterías Ferdie! - gritó Lucía desmantelando mi coartada.</p>\
			<p>-¡Vas a pillar! - dijo el borracho enfadado</p>",
			{
				enter: function( character, system, from ) {
					if( character.qualities.daga ) {
						system.doLink( "sidaga" );
					} else { 
						system.doLink( "nodaga" );
					}
				}
		}
	),
	"sidaga": new undum.SimpleSituation(
		"<img src='media/games/tutorial/tabernados.png' class='float_right'>\
		<p>Los 2 borrachos me acorralaron, lentamente pero no podía conseguir escapar. En ese momento recordé la daga \
		que encontré anteriormente. La saqué rápidamente y me defendí como pude, haciendole un rasguño a uno de los borrachos.\
		El hombre gritó y se desplomó casi al instante, al ver esto el otro borracho salió corriendo.\
		<p>- ¿Pero qué? Si solo le he hecho un rasguño.</p> \
		<p>- ¡Guau Ferdi nos has salvado! - dijo Lucía.</p>\
		Los dos encapuchados al ver la situación se acercaron y bajaron sus capuchas. Uno era un hombre de aspecto fornido y de pelo rubio, la otra persona era una mujer pelirroja y algo más bajita\
		<p>- Vaya, parece que habeis tenido bastante suerte, esa daga tiene algo especial. - dijo el hombre</p>\
		<p>- ¿puedo ver la daga? - dijo la mujer.</p>\
		<p>- Sí, claro toma. - respondí</p>\
		<p>- Mmmmmm, parece que la daga está impregnada de algún tipo de veneno, debes tener cuidado con ella, te la devuelvo.\
		<p>- Si no hubiera visto que llevabas una daga les hubiera dado una tunda yo mismo. - dijo el hombretón.</p>\
		<p>- Tú como siempre queriendo liarla por donde pasas ¿no? -respondió la mujer con cara borde.</p>\
		<p>- Es que sino es un rollo. - dijo el hombre sonriendo. - Por cierto, yo soy Félix, y mi compañera que no sabe divertirse se llama Anna.</p>\
		<p>- ¿Que no sabe divertirse? ¿Perdona? En fin. - respondió Anna resoplando - Somos mercenarios que pasabamos por aquí.</p>\
		<p>- ¡Encantada! Yo soy Lucía y este de aquí Ferdinand.</p>\
		<p>- Por cierto estamos bucando aprendices que nos ayuden. Yo soy un guerrero y ella es maga, podríamos enseñaros todo lo que sabemos.</p>\
		<p>-Yo… no estoy seguro - titubeé</p>\
		<p>-Escucha chaval - dijo Félix con un inusual tono serio - este pueblo no tiene ningún tipo de protección. Si llegara cualquier grupo de bandidos, Dios sabe lo que podría pasar.</p>\
		<p>Aquel comentario despertó recuerdos que tenía siempre presente. Aquel día hace 5 años… Si hubiera sido más fuerte, hubiera podido defenderla…</p>\
		<p>-Es un poco precipitado… - dijo Lucía algo preocupada</p>\
		<p>-No - dije decidido - Lo haré. La fuerza lo rige todo, y sin ella no puedes proteger lo que más te importa. Lo sé de primera mano…</p>\
		<p>-Ferdie… - dijo en tono triste Lucía - Yo te acompañaré.</p>\
		<p>-¿Lucía?¿Estás segura?</p>\
		<p>-Si te dejo solo es probable que te ahogues mientras bebes agua, ¡así que déjamelo a mí!</p>\
		<p>Me sentí reconfortado, como si una llama se encendiera dentro de mí.</p>\
		<p>-Tampoco tenéis que ir con tanta prisa. Mañana vendremos aquí por la mañana, y nos podéis dar la confirmación. Pensad también quién queréis que os entrene.</p>\
		<p>-¿Y eso por qué? - dijo Lucía.</p>\
		<p>-¡Si queréis ser guerreros venid conmigo! - dijo Félix - ¡Os enseñaré el arte de la batalla!</p>\
		<p>-Si queréis conocer el bello arte de la magia - dijo Anna - yo os haré magos de verdad.</p>\
		<p>-¿¡Magos!? - dijo ilusionada Lucía - ¿¡Nosotros?!</p>\
		<p>-Incluso si no tenéis talento para la magia, con una profesora como yo estoy segura de que podréis ser magos si os lo proponéis.</p>\
		<p>Después de esa conversación, cada uno se fue por su camino… Me despedí de Lucía y fue a mi casa. No tenía mucho que pensar, sabía que\
		era una oportunidad de oro, y no la iba a desaprovechar. La única duda que tenía era que clase de entrenamiento prefería\</p>\
		\
		<p>A la mañana siguiente me preparé, y me dirigí de nuevo a la cantina, donde nos esperaban nuestros amigos mercenarios.\
		Me encontré a Lucía por el camino, y ambos nerviosos llegamos a nuestro destino.</p>\
		<p>-¡Buenos días Ferdie! ¿Has decidido ya qué quieres aprender? - dijo Lucía</p>\
		<p>-Mmmm... lo sabrás cuando estemos con Félix y Anna - dije sonriendo para mis adentros</p>\
		<p>-Venga yaaaa - dijo mientras inflaba sus mejillas - necesitamos tener un equipo equilibrado...</p>\
		<p>-Pues decides cuando llegemos, no te sulfures.</p>\
		<p>Ella bufó como siempre, me encantaba burlarme de ella. Sin darnos cuenta llegamos finalmente a la cantina</p>\
		<p>-¡Buenos días! ¡Espero que hayáis decidido ya qué vais a hacer! - dijo Félix.</p>\
		<p>-El tiempo es oro, vamos a ponernos manos a la obra cuanto antes - añadió Anna.</p>\
		<p>Este es un momento muy importante de mi vida. Elijo volverme un <a href='caballerosidaga'>caballero</a> o<a href='mago'> un mago.</a>\</p>"
	),
	"nodaga": new undum.SimpleSituation(
		"<img src='media/games/tutorial/tabernados.png' class='float_right'>\
		<p>Los dos varones se disponían a darnos una paliza a los dos, mientras nosotros nos preparábamos para la contienda.\
		Sin previo aviso, una de las dos personas misteriosas apareció en mitad de la pelea.\
		Mostraba una figura alta y fornida, más de lo que esperaba. Rápidamente sujetó el brazo del borracho, donde se podía ver una sonrisa por debajo de la capucha.</p>\
		\
		<p>-¿Acaso tu madre no te enseñó cómo tratar a las damas? - dijo el hombre encapuchado con una sonrisa.</p>\
		<p>-¡Pero serás...!</p>\
		\
		<p>Con un rápido movimiento agarró al borracho, haciéndole una llave. Un grito de dolor llenó la taberna, a lo que siguió un lanzamiento hacia el amigo del borracho, echándoles fuera de la taberna.</p>\
		\
		<p>Los dos hombres se pusieron en pie a malas penas y salieron corriendo.\
		Poco a poco la taberna empezó a calmarse, hasta que lo único que se oía era la risa de aquel hombre encapuchado.\
		Sin percatarnos, la otra figura encapuchada se acercó y le dió un golpe en la cabeza.</p>\
		\
		<p>-¡Auch! - dijo el hombre encapuchado mientras se llevaba la mano a donde le habían golpeado.</p>\
		<p>-Que falta de delicadeza... - la voz del otro encapuchado era la de una mujer - De verdad, a veces me pregunto si vamos a poder ir a algún sitio sin dar la nota -  dijo mientras suspiraba.</p>\
		\
		<p>Aún estábamos algo sorprendidos, y me costó reaccionar, pero cuando me di cuenta salí corriendo hacia aquellas personas.</p>\
		<p>-¡Esperad! - dije jadeando - ¡Esperad por favor!</p>\
		<p>Los dos se pararon finalmente, dándose la vuelta.</p>\
		<p>-No os he agradecido lo que habéis hecho. - dije, mientras me percataba de que Lucía también había venido conmigo.</p>\
		<p>-¡Sí, muchas gracias! - mencionó ella</p>\
		<p>-¡No hay de qué! - dijo con un tono despreocupado el hombre - Éste cuerpo está acostumbrado a tratar con ganado como el de esta tarde.</p>\
		<p>-Lástima que solo sea eso lo que sabes hacer - dijo con desdén la mujer.</p>\
		<p>-Hum, yo soy Ferdinand, y ella es Lucía… ¿Os importaría decirme vuestros nombres?</p>\
		\
		<p>Los dos se miraron, y ambos se quitaron las capuchas. El hombre era rubio, con pelo largo y barba, mientras que la chica tenía un pelo más corto con un cabello pelirrojo.</p>\
		<p>-¡Mi nombre es Félix! - dijo el hombre con su energía habitual.</p>\
		<p>-A mí se me conoce como Anna. - dijo la mujer - Haréis bien en recordarlo.</p>\
		<p>-Oye Anna - dijo Félix - ellos pueden servir, ¿no?</p>\
		<p>-¿Con los primeros que pasan, en serio? - dijo Anna con tono escéptico - tú nunca cambias.</p>\
		<p>-¡Bueno, es que el chaval me recuerda a mí cuando era joven! - dijo Félix riéndose.</p>\
		<p>Me costaba ver en cómo me parecía, no era nada similar físicamente, y tampoco era rubio, así que no sabía cómo tomarme ese comentario.</p>\
		<p>-Perdonad - dijo Lucía en tono inquisitivo - ¿A qué os referís?<\p>\
		<p>-Bueno, estábamos pensando en conseguir nuevos principiantes para nuestra compañía - dijo con una sonrisa Félix- ¡y me parece que sois perfectos!</p>\
		<p>-¿Compañía? - pregunté.</p>\
		<p>-Somos unos mercenarios. - dijo Anna - Nuestra misión ahora mismo es encontrar reclutas, puesto que el jefe no se fía de guerreros experimentados. Y pensar que quiere poner mi superior intelecto en las manos de cualquier otra persona… - murmuró para sus adentros.</p>\
		<p>¿Mercenarios?¿Realmente iba a dejar mi vida actual para eso?</p>\
		<p>-Yo… no estoy seguro - titubeé</p>\
		<p>-Escucha chaval - dijo Félix con un inusual tono serio - este pueblo no tiene ningún tipo de protección. Si llegara cualquier grupo de bandidos, Dios sabe lo que podría pasar.</p>\
		<p>Aquel comentario despertó recuerdos que tenía siempre presente. Aquel día hace 5 años… Si hubiera sido más fuerte, hubiera podido defenderla…</p>\
		<p>-Es un poco precipitado… - dijo Lucía algo preocupada</p>\
		<p>-No - dije decidido - Lo haré. La fuerza lo rige todo, y sin ella no puedes proteger lo que más te importa. Lo sé de primera mano…</p>\
		<p>-Ferdie… - dijo en tono triste Lucía - Yo te acompañaré.</p>\
		<p>-¿Lucía?¿Estás segura?</p>\
		<p>-Si te dejo solo es probable que te ahogues mientras bebes agua, ¡así que déjamelo a mí!</p>\
		<p>Me sentí reconfortado, como si una llama se encendiera dentro de mí.</p>\
		<p>-Tampoco tenéis que ir con tanta prisa. Mañana vendremos aquí por la mañana, y nos podéis dar la confirmación. Pensad también quién queréis que os entrene.</p>\
		<p>-¿Y eso por qué? - dijo Lucía.</p>\
		<p>-¡Si queréis ser guerreros venid conmigo! - dijo Félix - ¡Os enseñaré el arte de la batalla!</p>\
		<p>-Si queréis conocer el bello arte de la magia - dijo Anna - yo os haré magos de verdad.</p>\
		<p>-¿¡Magos!? - dijo ilusionada Lucía - ¿¡Nosotros?!</p>\
		<p>-Incluso si no tenéis talento para la magia, con una profesora como yo estoy segura de que podréis ser magos si os lo proponéis.</p>\
		<p>Después de esa conversación, cada uno se fue por su camino… Me despedí de Lucía y fui a mi casa. No tenía mucho que pensar, sabía que\
		era una oportunidad de oro, y no la iba a desaprovechar. La única duda que tenía era que clase de entrenamiento prefería.<\p>\
		\
		<p>A la mañana siguiente me preparé, y me dirigí de nuevo a la cantina, donde nos esperaban nuestros amigos mercenarios.\
		Me encontré a Lucía por el camino, y ambos nerviosos llegamos a nuestro destino.</p>\
		<p>-¡Buenos días Ferdie! ¿Has decidido ya qué quieres aprender? - dijo Lucía</p>\
		<p>-Mmmm... lo sabrás cuando estemos con Félix y Anna - dije sonriendo para mis adentros</p>\
		<p>-Venga yaaaa - dijo mientras inflaba sus mejillas - necesitamos tener un equipo equilibrado...</p>\
		<p>-Pues decides cuando llegemos, no te sulfures.</p>\
		<p>Ella bufó como siempre, me encantaba burlarme de ella. Sin darnos cuenta llegamos finalmente a la cantina</p>\
		<p>-¡Buenos días! ¡Espero que hayáis decidido ya qué vais a hacer! - dijo Félix.</p>\
		<p>-El tiempo es oro, vamos a ponernos manos a la obra cuanto antes - añadió Anna.</p>\
		<p>Este es un momento muy importante de mi vida. Elijo volverme un <a href='caballeronodaga'>caballero</a> o<a href='mago'> un mago.</a> \</p>"
	),
	"mago": new undum.SimpleSituation(
		"<img src='media/games/tutorial/mago.png' class='float_right'>\
		<p> Me despedí de mi pueblo y de la gente que apreciaba y partí hacia la ciudad con el resto. Pasaron 5 años desde aquel día. \
		<p>Me he estado formando durante este tiempo con mi maestra Anna,la cual me ha enseñado muchas técnicas y conjuros para usar durante la batalla.</p>\
		\
		<p>Estuve practicando y aprendiendo nuevos hechizos durante meses en una sala de entrenamiento junto a Lucía, bajo supervisión de nuestra maestra.</p>\
		<p>- Vaya, parece que has mejorado Lucía, mas nunca llegarás a mi nivel de poder. -comenté en tono burlesco.</p>\
		<p>- No me subestimes Ferdie , te vas a enterar. -respondió Lucía acompañado de un hechizo <a href='https://elderscrolls.fandom.com/es/wiki/Proyectil_%C3%ADgneo'>proyectil ígneo.</a></p>\
		<img src='media/games/tutorial/pigneo.jpg' class='float_right'>\
		<p> Afortunadamente mi elevado conocimiento en la hechicería me hizo inmune a su ataque utilizando el hechizo `circulo de protección`.</p>\
		<p>-Ya basta.-exclamó Anna con autoridad.</p>\
		<p>-Creo que ya estáis listos para encaminar con nosotros una misión especial-añadió. </p>\
		<p>-¿De qué se trata?-interrumpió Lucía.</p>\
		<p>-Tenemos que encargarnos del emperador <a href='https://elderscrolls.fandom.com/es/wiki/Tito_Mede_II_(Skyrim)'>Tito Mede II</a>, un \
		emperador maligno que secuestra a escondidas a los niños y esclaviza a los hombres para expandir La Hermandad Oscura-explicó Anna. </p>\
		Yo había oído hablar de esa hermandad pero desconocía el origen de su proveninecia.</p>\
		<p>-Está bien, os ayudaremos.-exhalté con enorme energía. </p>\
		<p>-Genial,partiremos al castillo por la noche. Os explicaré el plan por el camino.-respondió Anna\
		-Pero antes de eso me gustaría hablar con vosotros de algo.-dijo Anna algo más serio</p>\
		<p>-Claro, <a href='mago2'>estamos listos.</a></p>"		
	),
	"mago2": new undum.SimpleSituation(
		"<p>-Va a ser una misión muy difícil y es posible que si queremos matar al emperador\
		<img src='media/games/tutorial/baston.jpg' class='float_right'>\
		alguno de nosotros no continúe con vida. Es por ello que me gustaría que uno de vosotros se quedara con esto.\
		Se trata de un que os permitirá aumentar vuestra magia en el combate.\
		Así igual podéis igualar mi nivel mágico-concluyó Anna con ahínco</p>\
		<p>Pues o <a href='bastonf'>me quedo con el bastón,</a> o <a href='bastonl'>se lo encomiendo a Lucía</a></p>"
		
		),

	"bastonf": new undum.SimpleSituation(
		"<p>-Muy bien - dije confiado- yo me quedaré con el <a href='./baston' class='once'> bastón mágico</a>.\
		Con esto creo que estamos <a href='confirm'>listos</a></p>"
		, {
			actions: {
				'baston': function (character, system, action) {
					system.setQuality("baston", true);
					system.setCharacterText("<p>Coges el bastón con energía. Sientes su poder y su dureza a la vez que ligero de manipular.</p>");
				}
			}
		}

		),

	"confirm": new undum.SimpleSituation(
	"<p>-¿Estáis seguros?- dijo Anna. </p>",
		{
				enter: function( character, system, from ) {
					if( character.qualities.baston ) {
						system.doLink( "mago3" );
					} else { 
						system.doLink( "retry" );
					}
				}
		}
	),

	"retry": new undum.SimpleSituation(
	"<p>-Espera, ¿no vas a coger el <a href='bastonf'>bastón</a>? Porque si no <a href='bastonl'>me lo quedo yo</a>-dijo Lucía.</p>"
	),

	
	"mago3": new undum.SimpleSituation(
		"<p>-Vamos</p>\
	<p>Estaba muy nervioso, era nuestra primera misión como magos. A Lucía también se le notaba bastante nerviosa, se le podían ver las gotas de sudor \
	deslizándose por su frente a kilómetros. Llegamos al castillo unas pocas horas después de nuestra salida. Podíamos ver 2 guardias vigilando la puerta principal</p>\
	<p>-Vale, lo haremos como hemos ensayado.- comentó Anna</p>\
	<p>- Lucía y yo lanzamos un conjuro de alteración: <a href='https://elderscrolls.fandom.com/es/wiki/Par%C3%A1lisis_masiva\
	'>(Parálisis masiva) </a , para evitar que pudieran pedir refuerzos, o iniciar una pelea. Consiguientemente nos acercamos a los soldados, y le clavamos un puñal en el corazón.</p>\
	<img src='media/games/tutorial/saloncastillo.jpg' class='float_right'>\
	<p>Nos disponemos a entrar en el castillo mientras Anna y Felix esconden los cadáveres en un foso cerca del lugar. Dentro del castillo nos encontramos en el \
	salón principal donde encontramos más soldados. No contamos con ello pero debíamos librarnos de ellos para poder pasar, siendo lo más sigilosos posibles </p>\
	<p> Lucía propone lanzar un hechizo de <a href='invisibilidad'>invisibilidad</a>, mientras yo insisto en que es mejor usar <a href='runa'>runa de frenesí</a>(Hechizo que nos permite tener la misma apariencia que un objetivo)</p>\ </p>"
	),

	"invisibilidad": new undum.SimpleSituation(
		"<p>-Genial, nos haremos invisibles</p>\
		<img src='media/games/tutorial/escalera.jpg' class='float_right'>\
		<p>Lanzamos el hechizo y nos movemos con sigilo subiendo las escaleras y abriendo la puerta del rellano mientras vigilamos que no hay ningún guardia cerca. </p>\
		<p>-Justamente al llegar a la puerta, un soldado se dirige hacia nuestra dirección, por lo que tenemos que evitar que nos detecte desplazándonos un poco al lado. El guardia\
		percibe en el ambiente una sensación extraña por lo que teníamos que intentar que no nos detectara de cualquier manera. En ese momento, 2 guardias más se acercan a su posición.</p>\
		<p>+¿Quiénes sois?, No me suenan vuestras caras-Preguntó el guardia que casi nos detecta</p>\
		<p>-Venimos para sustituirte en la guardia nocturna. Puedes retirarte soldado - respondió uno de los dos guardias</p>\
		<p>+Esto es un poco extraño, el emperador me ordenó que vigil...- </p>\
		<p>Sin dejar que terminara la frase, uno de los soldados lo asesina a sangre fría degoyándole la garganta con un puñal.</p>\
		<p>-Salid de ahí- nos susurró uno de los guardias</p>\
		<p>-De repente los guardias empiezan a sufrir una transformación en otras personas. Eran <a href='contmago'>Anna y Felix </a></p>\
		</p>"
	),

	"runa": new undum.SimpleSituation(
		"<p>-Genial, nos haremos pasar por soldados</p>\
			<p>Una vez convertidos en soldados nos disponemos a subir las escaleras y abrir la puerta del rellano, sin tratar de levantar muchas sospechas.</p>\
			<p>Al llegar a la puerta, un soldado se nos quedó fijamente mirando y optó por acercarse hacia nosotros.</p>\
		<p>+¿Quiénes sois?, No me suenan vuestras caras-Preguntó el guardia</p>\
		<p>-Somos nuevos reclutas, el emperador nos comandó ocuparnos del turno nocturno hoy-respondió Lucía</p>\
		<p>+Que extraño, estas cosas siempre me las notifica el emper...</p>\
		<p>En ese momento, una hoja de daga sobresalío del orificio de su boca, desplomándose en el suelo.Tras su cuerpo se encontraban <a href='contmago'>Anna, y Felix </a>con la daga en la mano</p>\
</p>"
	),
	"contmago": new undum.SimpleSituation(
		"<p>-Gracias por la ayuda- les dije.</p>\
		<p>-Así es- respondió Felix.</p>\
		<p>-Vamos, no tenemos tiempo que perder-respondió Lucía enérgica.</p>\
		<img src='media/games/tutorial/pasillocastillo.jpg' class='float_right'>\
		<p>En ese momento recorremos todo el pasillo hasta la habitación del emperador. Al llegar, Lucía la abre con poca discrección mientras nosotros vigilábamos.\
		 En ese momento, vio un grupo de 12 soldados de la Hermandad Oscura apuntándole con ballestas, al mando del emperador.</p>\
		<p>-¡DISPARAD!-ordenó el emperador.</p>\
		<p>-Las flechas impactaron en el pecho, brazos y cabeza de Lucía, arrebatándole así su vida.</p>\
		<p>-Al fijarme en el sonido de las ballestas, vi el cuerpo de Lucía desplomarse en el suelo. Una ira se apoderó de mí, haciendo que entrara en la habitación y quemara a todos mediante el hechizo \
		<a href='https://elderscrolls.fandom.com/es/wiki/Tormenta_de_fuego'>tormenta de fuego </a>.</p>\
		<p>Lamentablemente, el emperador había escapado por la ventana, así que corro tras él para acabar <a href='contmago2'> con esto de una vez por todas.</a></p>\
		<p></p>\
</p>"
	),
	"contmago2": new undum.SimpleSituation(
		"<p>Logré alcanzarle debido a su avanzada edad.</p>\
		<p>-¿En serio vas a matarme con tus hechizos?, pelea con tu arma como un hombre-dijo el emperador </p>\
		<p>-Quiero que sufras. Vas a pagar lo que le has hecho a Lucía- respondí</p>\
		<p>Saqué mi bastón y él su espada daédrica y comenzamos un frenetico duelo.Paraba muy bien mis golpes de ira. En uno de esos golpes contratacó\
		con una estocada en el hombro que me dejó malherido.</p>\
		<p>¿Tus últimas palabras?- dijo riendo el emperador</p>\
		<p>Me levanté, presiendo la herida para que no perdiera mucha sangre</p>\
		<p>¿Sabes?,toda mi vida he sufrido pérdidas de mis seres queridos. Pero nunca he podido vengar su muerte. Me has arrebatado lo único que me quedaba y vas a morir por ello.-</p>\
		<p>El emperador se dispuso a darme el golpe de gracia, pero logro esquivarlo en el último momento. Gracias a un cabezazo, logro arrebatarle su espada la cual se la clavo en el corazón lentamente.</p>\
		<p>Uso un hechizo de curación para recuperarme y decido <a href='contmago3'> huir</a> dejando atrás a Anna y a Felix </p>\
</p>"
	),

	"contmago3": new undum.SimpleSituation(
		"<img src='media/games/tutorial/montanas.jpg' class='float_right'>\
		<p>Dejé todo y marché hacia las montañas del Norte donde llevo una vida pacífica y tranquila</p>\
		<p>Actualmente estoy casado con una mujer maravillosa,Freida ,con la que he podido tener 2 fantásticos hijos, Leia y Skywalker </p>\
		<h1>FIN</h1>"

	),
	
	"bastonl": new undum.SimpleSituation(
		"<p>-Mejor quédatelo tú Lucía - dije.</p>\
		<p>-¡Muy bien, no os arrepentiréis! - dijo confiada mientras cogía el bastón.</p>\
		<p>-¿Ya está todo decidido no? -dijo Anna- Pues vámonos sin más dilación.</p>\
		<p> El viaje fue arduo, por el camino no nos encontramos muchas complicaciones pero fue bastante largo. Aún así\
		teníamos que estar listos para la batalla. Iba a ser la más importante de nuestra vida sin lugar a dudas. </p>\
		<img src='media/games/tutorial/porton.jpg' class='float_right'>\
		<p>Finalmente llegamos al castillo. Era madrugada, así que era el momento perfecto para infiltrarse en el castillo.\
		Además, con nuestras habilidades mágicas éramos capaces de ver en la oscuridad, por lo que teníamos una clara ventaja respecto\
		a los guardas del castillo. Por ello, nos plantamos delante de la <a href='entrada'>entrada al castillo.</a></p>"
	),

	"entrada": new undum.SimpleSituation(
		"<p>Una vez en la entrada decidimos mirar alrededor. No había ningún guarda cerca, así que no teníamos que preocuparnos por eso.\
		Desde aquí podíamos probar a <a href='acercarse'>acercarnos a la puerta principal</a>, <a href='vuelta'>dar una vuelta al castillo</a>\
		, o <a href='magia'>usar los poderes mágicos para colarte en el castillo.</a></p>"
	),

	"acercarse": new undum.SimpleSituation(
		"<p>Veo una puerta gigantesca.</p>",
		{
				enter: function( character, system, from ) {
					if( character.qualities.llave ) {
						system.doLink( "puerta1" );
					} else { 
						system.doLink( "puerta2" );
					}
				}
		}
	),

	"puerta1": new undum.SimpleSituation(
		"<img src='media/games/tutorial/cerradura.jpg' class='float_right'>\
		<p>Me fijo en que la puerta posee una cerradura... Puedo intentar <a href='abrir'>abrirla con la llave</a>. Aún así, soy un mago, así que \
		puedo <a href='puertam'>intentar destruir la puerta.</a> Si no supongo que tendré que <a href='entrada'>volver a la entrada.</a></p>"
	),

	"puerta2": new undum.SimpleSituation(
		"<img src='media/games/tutorial/cerradura.jpg' class='float_right'>\
		<p>Me fijo en que la puerta posee una cerradura, pero no tengo la llave para abrirla. Aún así, eres un mago, así que \
		puedo <a href='puertam'>intentar destruir la puerta.</a> Si no supongo que tendré que <a href='entrada'>volver a la entrada.</a></p>"
	),

	"puertam": new undum.SimpleSituation(
		"<p>-Ya que estamos aquí vamos a entrar mediante la fuerza bruta - dije mientras preparaba un hechizo ígneo.</p>\
		<p>-¡¿Estás seguro de que es buena idea?! - dijo alarmada Lucía</p>\
		<p>-¡Pues claro! ¿Qué podría salir mal?</p>\
		<p>La bola de fuego destruyó la puerta por completo, pero a los pocos segundos numerosos guardas del interior del castillo llegaron a la entrada. \
		Intentamos escabullirnos pero unos magos nos atacaron desde las ventanas del castillo mientras tratábamos de huir, creando un muro de fuego \
		que impedía nuestra huida. Numerosos guardas se abalanzaron y acabaron con nostros... Parece que todo salió mal.</p>\
		<img src='media/games/tutorial/muerto.png' class='float_right'>\
		<p><h1>HAS MUERTO</h1></p>"
	),

	"abrir": new undum.SimpleSituation(
		"<p>Abrí la puerta con la llave, y nos infiltramos en el castillo. Avanzamos rápidamente por el castillo, esquivando los guardas\
		que había dentro. Llegamos a la parte más alta sin mucha complicación, pero todavía no había rastro de nuestro objetivo.</p>\
		<p>-Parece que nos toca escalar eso - dije señalando la torre, que era lo único que nos faltaba por explorar.</p>\
		<p>-Sí, coincido. - dijo Anna- Es altamente probable que nuestro objetivo se encuentre en lo más alto de la torre.</p>\
		<img src='media/games/tutorial/torre.jpg' class='float_right'>\
		<p>No podíamos abrir la puerta a esa torre, pero vimos numerosas hendiduras en la torre, así que decidimos empezar a \
		escalar. Hacía frío y era bastante complicado escalar la torre, pero poco a poco y con ayuda de nuestra magia fuimos capaces de llegar \
		a lo más alto. Allí miramos por la ventana, y vimos como Tito Mede estaba sentado en su trono.</p>\
		<p>Esta era la batalla final, teníamos <a href='preludio'>que decidir cómo actuar.</a></p>"
	),



	"vuelta": new undum.SimpleSituation(
		"<p>Decidimos dar una vuelta alrededor del castillo para estudiarlo mejor. El castillo era bastante alto, pero no parecía tener gran superficie. \
		A lo lejos vislunmbramos un par de guardas vigilando los alrededores. Debido a que es de noche todavía no nos ven, así que decidimos alejarnos \
		un poco y escondernos en la maleza. ¿Qué hacemos contra esos guardias?</p>\
		<img src='media/games/tutorial/noche.jpg' class='float_right'>\
		<p>-Oye, <a href='luciad'>yo puedo distraer a uno de ellos</a>. Mientras tú puedes encargarte del otro.</p>\
		<p>Podía ser peligroso de todos modos, así que pensé en <a href='peleas'>enfrentearme a ellos solo</a>. Sabía que era\
		fuerte y no quería poner a Lucía en peligro. Si no, estábamos a tiempo de <a href='entrada>volver a la entrada.</a>, o si tenemos \
		suerte, podemos <a href='colarse'>colarnos detrás de los guardas,</a> ya que sospechaba que tenían que estar guardando algo.</p>"
	),

	
	"peleas": new undum.SimpleSituation(
		"<p>-Mejor me enfrentaré yo a ellos sólo - dije con confianza - no quiero poneros en peligro </p> \
		<p>-¡Me niego!¡Es muy peligroso, y no soy alguien de quién tengas que preocuparte, sé pelear!</p> \
		<p>Ignoré su comentario y salí corriendo hacia los guardas. Una vez me avistaron, comencé a invocar una magia ígnea. \
		Sin embargo, no tuve en cuenta la velocidad de los guardas, que se me abalanzaron antes de poder lanzar mi hechizo.</p>\
		<p>Intenté escabullirme de su ataque, pero la espada me cortó la pierna, reduciendo mi movilidad. No pude hacer nada\
		frente al siguiente ataque... Debí haber sido más precabido...</p>\
		<img src='media/games/tutorial/muerto.png' class='float_right'>\
		<p><h1>HAS MUERTO</h1></p>"
	),

	"colarse": new undum.SimpleSituation(
		"<p>-Creo que es mejor que les ignoremos e intentemos colarnos - dije - Tiene que haber algo bueno detrás si lo están guardando.</p> \
		<p>-Está bien - dijo Anna - Pero aseguraos de que no os vean</p> \
		<p>Logramos colocarnos detrás de ellos. Parecía un camino ruinoso que llevaba a algún tipo de entrada trasera. \
		Avanzamos sin dilación, pero el camino estaba en muy mal estado y se desprendió gran parte del camino haciendo un estruendo.</p>\
		<p>Los guardas cercanos se percataron y llegaron rápidamente a nuestra posición. Intentamos pelear pero estaban demasiado cerca\
		y no podíamos hacer ninguna magia desde esta distancia. La misión fue un fracaso...</p>\
		<img src='media/games/tutorial/muerto.png' class='float_right'>\
		<p><h1>HAS MUERTO</h1></p>"
	),

	"luciad": new undum.SimpleSituation(
		"<p>-Está bien, pero no hagas nada peligroso - Cofiaba en sus habilidades porque tenía el bastón mágico.</p>\
		<p>Lucía asintió y se adelantó. Se escondió en un árbol muy alto, y empezó a usar un hechizo que asemejaba el grito de unos cuervos. \
		Uno de los guardas fue hacia el bosque, dejando expuesto al otro guarda.</p>\
		<p>-Es una oportunidad de oro - dijo Anna sonriendo.</p>\
		<p>No podía estar más de acuerdo, así que decidimos lanzarle dos ondas al guarda que se había quedado solo, haciéndole cortes profundos mientras gritaba. \
		Los gritos alertaron al guarda que había caído en la distracción de Lucía, pero su destino ya estaba sellado. \
		Con una floritura Lucía cayó encima del guarda y usó magia de hielo para congelarlo.</p>\
		<p>-Todo según el plan - dijo Anna confiada </p>\
		<p>No podíamos hacer nada con el guarda congelado, así que examinamos al guarda. Aunque el cuerpo estaba destrozado, esperábamos encontrar \
		algo de utilidad. Tras buscar un poco, encontramos una <a href='./llave' class='once'> llave</a> y un <a href='./mapa' class='once'> mapa</a> en su posesión. \
		<img src='media/games/tutorial/mapa.jpg' class='float_right'>\
		<img src='media/games/tutorial/llaves.jpg' class='float_right'>\
		Ahora que habíamos acabado con la vigilancia, podíamos <a href='entrada2'>volver a la entrada,</a> o seguir por <a href='escondite'>el camino que los guardas estaban vigilando.</a></p>",
		{
			actions: {
				'llave': function (character, system, action) {
					system.setQuality("llave", true);
					system.setCharacterText("<p>Una llave que puede servir para abrir alguna puerta.</p>");
				},
				'mapa': function (character, system, action) {
					system.setQuality("mapa", true);
					system.setCharacterText("<p>Un mapa del castillo.</p>");
				}
			}
		}
	),

	"escondite": new undum.SimpleSituation(
		"<p>-Vamos a colarnos por ahí - dije - Tiene que haber algo bueno detrás si lo estaban vigilando.</p>\
		<p>-Está bien - dijo Anna - Pero aseguraos de que no os vean</p>\
		<p>Parecía un camino ruinoso que llevaba a algún tipo de entrada trasera. \
		Avanzamos sin dilación, pero el camino estaba en muy mal estado y se desprendió gran parte del camino haciendo un estruendo.</p>\
		<p>Por suerte ya no había enemigos por nuestros alrededores, así que logramos colarnos dentro del castillo sin mayor problema.\
		Era una entrada por las alcantarillas, así que intentamos infiltramos por ahí. Sin embargo no encontramos ningún método para avanzar...</p>\
		<p>-¡Menuda pérdida de tiempo! -dijo cabreada Lucía - Supongo que no tenemos más opción que <a href='entrada2'>volver a la entrada</a></p>"
	),

	"entrada2": new undum.SimpleSituation(
		"<p>Una vez en la entrada decidimos mirar alrededor. No había ningún guarda cerca, así que no teníamos que preocuparnos por eso.\
		Desde aquí podíamos probar a <a href='acercarse'>acercarnos a la puerta principal</a>, <a href='vuelta2'>dar una vuelta al castillo</a>\
		, o <a href='magia2'>usar los poderes mágicos para colarte en el castillo.</a></p>"
	),

	"magia": new undum.SimpleSituation(
		"<p>-Oye, creo que puedes usar el bastón para llevarme hasta esa ventana - le dije a Lucía.</p>\
		<p>-Bueno, supongo que podemos intentar ver que hay ahí, aunque estarás solo - dijo algo preocupada Lucía.</p>\
		<p>-No pasará nada, si no encuentro nada me daré la vuelta - dije para calmarla.</p>\
		<p>Lucía finalmente asintió, y usó los poderes del bastón para teletransportarme a la ventana.",
		{
				enter: function( character, system, from ) {
					if( character.qualities.mapa ) {
						system.doLink( "secreto" );
					} else { 
						system.doLink( "nada" );
					}
				}
		}
	),

	"nada": new undum.SimpleSituation(
		"<img src='media/games/tutorial/hab.jpg' class='float_right'>\
		<p>La habitación de la ventana parecía normal. No había nada que llamase especial atención. Intenté forzar \
		la puerta, pero no tenía ningún tipo de cerradura, parecía que estaba cerrada por el otro lado. Era muy raro, \
		pero no veía nada interesante, así que decidí ir a la ventana y hacerle señales a Lucía.</p>\
		<p>Al ver mi señal, usó el bastón y me trajo <a href='entrada'>de vuelta a la entrada</p>"
		),

	"magia2": new undum.SimpleSituation(
		"<p>-Oye, creo que puedes usar el bastón para llevarme hasta esa ventana - le dije a Lucía.</p>\
		<p>-Bueno, supongo que podemos intentar ver que hay ahí, aunque estarás solo - dijo algo preocupada Lucía.</p>\
		<p>-No pasará nada, si no encuentro nada me daré la vuelta - dije para calmarla.</p>\
		<p>Lucía finalmente asintió, y usó los poderes del bastón para teletransportarme a la ventana.",
		{
				enter: function( character, system, from ) {
					if( character.qualities.mapa ) {
						system.doLink( "secreto" );
					} else { 
						system.doLink( "nada2" );
					}
				}
		}
	),

	"nada2": new undum.SimpleSituation(
		"<img src='media/games/tutorial/hab.jpg' class='float_right'>\
		<p>La habitación de la ventana parecía normal. No había nada que llamase especial atención. Intenté forzar \
		la puerta, pero no tenía ningún tipo de cerradura, parecía que estaba cerrada por el otro lado. Era muy raro, \
		pero no veía nada interesante, así que decidí ir a la ventana y hacerle señales a Lucía.</p>\
		<p>Al ver mi señal, usó el bastón y me trajo <a href='entrada2'>de vuelta a la entrada</p>"
		),

	"secreto": new undum.SimpleSituation(
		"<p>La habitación de la ventana parecía normal. No había nada que llamase especial atención. Intenté forzar \
		la puerta, pero no tenía ningún tipo de cerradura, parecía que estaba cerrada por el otro lado. Era muy raro...\
		Decidí mirar el mapa del castillo, y parecía que había una sala secreta detrás de una pared donde había una estantería.</p>\
		<img src='media/games/tutorial/estante.jpg' class='float_right'>\
		<p>Quité la estantería del medio, y efectivamente había una puerta que llevaba a una pequeña sala. Allí había un libro \
		que destacaba por encima de todo. En la portada ponía<a href='./theworld' class='once'> 'The World'</a>, y parecía que era un hechizo muy potente. \
		En cualquier caso, no había mucho más que hacer, así que me fui por la ventana, y le hice señales a Lucía.</p>\
		<p>Al ver mi señal, usó el bastón y me trajo <a href='entrada2'>de vuelta a la entrada</p>", 
		{
			actions: {
				'theworld': function (character, system, action) {
					system.setQuality("theworld", true);
					system.setCharacterText("<p>Sientes que alberga un extraño poder que altera el tiempo...</p>");
				}
			}
		}
		),


	"vuelta2": new undum.SimpleSituation(
		"<p>No había nada más de interés alrededor del castillo salvo <a href='escondite'>el camino que los guardas estaban vigilando.</a>\
		La otra opción era <a href='entrada2'>volver a la entrada.</a></p>"
	),


	"caballeronodaga": new undum.SimpleSituation(
		"<img src='media/games/tutorial/caba.png' class='float_right'>\
		<p> Me despedí de mi pueblo y de la gente que apreciaba y partí hacia la ciudad con el resto. Pasaron 5 años desde aquel día. \
		Me he estado formando durante este tiempo con mi mentor Félix, me ha enseñado muchas técnicas y como moverme en una batalla.</p>\
		\
		<p>Me encontraba en las caballerizas entrenando con la lanza y el escudo contra Félix.</p>\
		<p>- Parece que los años te hacen factura Félix, puedo ganarte con los ojos cerrados si quiero. - dije.</p>\
		<p>- Pero qué dices bufón, vas a morder el polvo por lo que has dicho. - me respondió con enfado.</p>\
		\
		<img src='media/games/tutorial/pradera.jpg' class='float_right'>\
		<p>Chocamos las lanzas de madera unas cuantas veces más, hasta que el desenlace del combate de entrenamiento fue una victoria por mi parte.</p>\
		<p>- Vaya vaya, parece que he mejorado. - dije con orgullo.</p>\
		<p>- No te equivoques, te he dejado ganar, en el campo de batalla no me igualarías, pero en un entrenamiento no tengo ganas de ponerme en serio </p>\
		<p>- respondió Félix intentando desmerecer mi victoria.</p>\
		<p>Nos dirigimos a dejar las armas cuando, de pronto entran 4 encapuchados con dagas en mano. </p>\
		<p>- ¿Quién es Ferdinand? - preguntó el más grande.</p>\
		<p>- ¿Quién lo pregunta? -  respondí con un mal presentimiento.</p>\
		<p>- No te hará falta saberlo. En realidad no importa, vais a morir los dos igualmente. - respondió con aire de superioridad </p>\
		<p>Los cuatro se abalanzan sobre nosotros, pero no contaban con que sabíamos defendernos y ya habíamos calentado con el entrenamiento.\
		La batalla se repartió en dos encapuchados para cada uno. Me lanzan un cuchillo arrojadizo, pero lo paro con el escudo de madera, el otro hombre me sorprendió \
		por la derecha intentando dar una cuchillada con la daga, pero mis reflejos actúan y antes de que lo consiga le clavo la lanza de madera en el pecho, la cual se parte\
		y el hombre grita de dolor mientras caía al suelo. El hombre que me lanzó el cuchillo vino a por mí, era el más grande. </p>\
		<p>- Veo que no eres tan inútil como pareces pero a ver ahora cómo te defiendes pequeño. - dijo mientras se preparaba para arremeter contra mí.</p>\
		<p>Lanzó dos reveses contra mí, uno lo paré con el escudo, ya casi destruido por el golpe, pero el otro alcanzó mi pierna, dejándome una herida no muy grave, \
		ya que me eché para atrás y conseguí que el ataque no fuera a más.No tenía mucho más que hacer con el palo restante de la lanza, así que intenté buscar algo con lo que defenderme,\
		pude ver una <a href='sarten'>sarten</a>, un <a href='escudo'>escudo de hierro</a> y una <a href='flecha'>flecha puntiaguda</a>. \</p>"
	),

	"caballerosidaga": new undum.SimpleSituation(
		"<img src='media/games/tutorial/caba.png' class='float_right'>\
		<p> Me despedí de mi pueblo y de la gente que apreciaba y partí hacia la ciudad con el resto. Pasaron 5 años desde aquel día. \
		Me he estado formando durante este tiempo con mi mentor Félix, me ha enseñado muchas técnicas y como moverme en una batalla.</p>\
		\
		<p>Me encontraba en las caballerizas entrenando con la lanza y el escudo contra Félix.</p>\
		<p>- Parece que los años te hacen factura Félix, puedo ganarte con los ojos cerrados si quiero. - dije.</p>\
		<p>- Pero qué dices bufón, vas a morder el polvo por lo que has dicho. - me respondió con enfado.</p>\
		\
		<img src='media/games/tutorial/pradera.jpg' class='float_right'>\
		<p>Chocamos las lanzas de madera unas cuantas veces más, hasta que el desenlace del combate de entrenamiento fue una victoria por mi parte.</p>\
		<p>- Vaya vaya, parece que he mejorado. - dije con orgullo.</p>\
		<p>- No te equivoques, te he dejado ganar, en el campo de batalla no me igualarías, pero en un entrenamiento no tengo ganas de ponerme en serio </p>\
		<p>- respondió Félix intentando desmerecer mi victoria.</p>\
		<p>Nos dirigimos a dejar las armas cuando, de pronto entran 4 encapuchados con dagas en mano. </p>\
		<p>- ¿Quién es Ferdinand? - preguntó el más grande.</p>\
		<p>- ¿Quién lo pregunta? -  respondí con un mal presentimiento.</p>\
		<p>- No te hará falta saberlo. En realidad no importa, vais a morir los dos igualmente. - respondió con aire de superioridad </p>\
		<p>Los cuatro se abalanzan sobre nosotros, pero no contaban con que sabíamos defendernos y ya habíamos calentado con el entrenamiento.\
		La batalla se repartió en dos encapuchados para cada uno. Me lanzan un cuchillo arrojadizo, pero lo paro con el escudo de madera, el otro hombre me sorprendió \
		por la derecha intentando dar una cuchillada con la daga, pero mis reflejos actúan y antes de que lo consiga le clavo la lanza de madera en el pecho, la cual se parte\
		y el hombre grita de dolor mientras caía al suelo. El hombre que me lanzó el cuchillo vino a por mí, era el más grande. </p>\
		<p>- Veo que no eres tan inútil como pareces pero a ver ahora cómo te defiendes pequeño. - dijo mientras se preparaba para arremeter contra mí.</p>\
		<p>Lanzó dos reveses contra mí, uno lo paré con el escudo, ya casi destruido por el golpe, pero el otro alcanzó mi pierna, dejándome una herida no muy grave, \
		ya que me eché para atrás y conseguí que el ataque no fuera a más.No tenía mucho más que hacer con el palo restante de la lanza.</p>\
		<p>Recordé que llevaba encima la daga que encontré aquella vez, así que le lancé lo que me quedaba de lanza a modo de distracción y saqué la daga. \
		Intenté defenderme de los siguientes golpes con lo que me quedaba de escudo y cuando vi mi oportunidad, realicé un contraataque, \
		hiriendo en la barriga al agresor y produciendo el efecto de la daga. <a href='continuar'>Continuar.</a></p>"
	),
	"continuar": new undum.SimpleSituation(
		"<img src='media/games/tutorial/pradera.jpg' class='float_right'>\
		<p> Habiendo derribado a los dos malhechores que iban a por mí, comprobé cómo iba la situación de Félix contra los dos restantes agresores, para mi sorpresa Félix ya había acabado con ellos hace un rato.</p>\
		<p>- Te lo dije, en el campo de batalla te supero con creces chavalin. - dijo Félix riendose.</p>\
		<p>- Solo ha sido suerte viejales. - dije mientras también me reía.</p>\
		<p>Registramos sus pertenencias para ver si había alguna pista del por qué del ataque, cuando Félix encontró algo:</p>\
		<p>- Eh Ferdinand, tienes que ver esto, parece una carta donde dice que te asesinen. ¡Es del rey!. </p>\
		<p>- ¿Pero por qué el rey querría asesinarme? - respondí con asombro. </p>\
		<p>- Según dice aquí eres el heredero de la corona indirectamente, ya que eres el hijo bastardo de este, el rey Ashnard, también conocido como el rey loco. </p>\
		<p>Se ve que los rumores de que hace ya años tuvo una escapada bastante sospechosa son ciertos. - concretó Félix. </p>\
		<p>- Quizás eso explica por qué a mi madre la mataron unos bandidos, ¡Maldito enfermo, me las pagará! - dije muy cabreado.</p>\
		<p>- ¿Qué piensas hacer? - me dijo Félix.</p>\
		<p><a href='dagarapida'>Armarte rapidamente e ir por él</a> o <a href='dagalucia'>buscar a Lucía y Anna</a> para que te ayuden en la pelea</p>\
"		
	),

	"sarten": new undum.SimpleSituation(
		"<img src='media/games/tutorial/sarten.jpg' class='float_left'>\
		<p>Pude ver el mango saliente de una <a href='./sarten' class='once'> sartén</a> en una de las cajas apiladas que había donde guardamos las armas, la mayoría era menaje y piezas de armas estropeadas. \
		<p>Justo antes de que uno de los encapuchados se abalanzase sobre mí, pude esquivarlo y alcanzar la sartén por el mango.</p>\
		\
		<p> Habiendo derribado a los dos malhechores que iban a por mí, comprobé cómo iba la situación de Félix contra los dos restantes agresores, para mi sorpresa Félix ya había acabado con ellos hace un rato.</p>\
		<p>- Te lo dije, en el campo de batalla te supero con creces chavalin. - dijo Félix riendose.</p>\
		<p>- Solo ha sido suerte viejales. - dije mientras también me reía.</p>\
		<p>Registramos sus pertenencias para ver si había alguna pista del por qué del ataque, cuando Félix encontró algo:</p>\
		<p>- Eh Ferdinand, tienes que ver esto, parece una carta donde dice que te asesinen. ¡Es del rey!. </p>\
		<p>- ¿Pero por qué el rey querría asesinarme? - respondí con asombro. </p>\
		<p>- Según dice aquí eres el heredero de la corona indirectamente, ya que eres el hijo bastardo de este, el rey Ashnard, también conocido como el rey loco. </p>\
		<p>Se ve que los rumores de que hace ya años tuvo una escapada bastante sospechosa son ciertos. - concretó Félix. </p>\
		<p>- Quizás eso explica por qué a mi madre la mataron unos bandidos, ¡Maldito enfermo, me las pagará! - dije muy cabreado.</p>\
		<p>- ¿Qué piensas hacer? - me dijo Félix.</p>\
		<p><a href='rapida'>Armarte rapidamente e ir por él</a> o <a href='Lucia'>buscar a Lucía y Anna</a> para que te ayuden en la pelea</p>"
		, {
			actions: {
				'sarten': function (character, system, action) {
					system.setQuality("sarten", true);
					system.setCharacterText("<p>Adquieres una sartén que seguro que en otro tiempo tuvo una mejor vida.</p>");
				}
			}
		}
		),
	"escudo": new undum.SimpleSituation(
		"<p>Cogí el <a href='./escudo' class='once'> escudo de hierro </a>que tenía detrás mía colgado en la pared, me lo puse en el brazo y lo lancé contra este, le golpee en la frente del encapuchado más grande, haciéndole un instanockeo.</p>\
		<img src='media/games/tutorial/escudo.png' class='float_left'>\
		<p>-¡Vengadores Unidos! - Grité.</p>\
		<p>-¿Pero qué dices? - saltó Félix.</p>\
		<p>No lo sé, me ha salido del alma. -dije.</p>\
		<p> Habiendo derribado a los dos malhechores que iban a por mí, comprobé cómo iba la situación de Félix contra los dos restantes agresores, para mi sorpresa Félix ya había acabado con ellos hace un rato.</p>\
		<p>- Te lo dije, en el campo de batalla te supero con creces chavalin. - dijo Félix riendose.</p>\
		<p>- Solo ha sido suerte viejales. - dije mientras también me reía.</p>\
		<p>Registramos sus pertenencias para ver si había alguna pista del por qué del ataque, cuando Félix encontró algo:</p>\
		<p>- Eh Ferdinand, tienes que ver esto, parece una carta donde dice que te asesinen. ¡Es del rey!. </p>\
		<p>- ¿Pero por qué el rey querría asesinarme? - respondí con asombro. </p>\
		<p>- Según dice aquí eres el heredero de la corona indirectamente, ya que eres el hijo bastardo de este, el rey Ashnard, también conocido como el rey loco. </p>\
		<p>Se ve que los rumores de que hace ya años tuvo una escapada bastante sospechosa son ciertos. - concretó Félix. </p>\
		<p>- Quizás eso explica por qué a mi madre la mataron unos bandidos, ¡Maldito enfermo, me las pagará! - dije muy cabreado.</p>\
		<p>- ¿Qué piensas hacer? - me dijo Félix.</p>\
		<p><a href='rapida'>Armarte rapidamente e ir por él</a> o <a href='Lucia'>buscar a Lucía y Anna</a> para que te ayuden en la pelea</p>"
		, {
			actions: {
				'escudo': function (character, system, action) {
					system.setQuality("escudo", true);
					system.setCharacterText("<p>Adquieres un escudo con un dibujo de una estrella en su centro.</p>");
				}
			}
		}
		),
	"flecha": new undum.SimpleSituation(
		"<img src='media/games/tutorial/flecha.png' class='float_left'>\
		<p> Agarré una <a href='./flecha' class='once'> flecha </a>que había visto dentro de un carcaj y con un ataque rápido, se la clavé al enorme encapuchado en el ojo, \
		gritando este de dolor y cayendo hacia atrás.</p>\
		<p> Habiendo derribado a los dos malhechores que iban a por mí, comprobé cómo iba la situación de Félix contra los dos restantes agresores, para mi sorpresa Félix ya había acabado con ellos hace un rato.</p>\
		<p>- Te lo dije, en el campo de batalla te supero con creces chavalin. - dijo Félix riendose.</p>\
		<p>- Solo ha sido suerte viejales. - dije mientras también me reía.</p>\
		<p>Registramos sus pertenencias para ver si había alguna pista del por qué del ataque, cuando Félix encontró algo:</p>\
		<p>- Eh Ferdinand, tienes que ver esto, parece una carta donde dice que te asesinen. ¡Es del rey!. </p>\
		<p>- ¿Pero por qué el rey querría asesinarme? - respondí con asombro. </p>\
		<p>- Según dice aquí eres el heredero de la corona indirectamente, ya que eres el hijo bastardo de este, el rey Ashnard, también conocido como el rey loco. </p>\
		<p>Se ve que los rumores de que hace ya años tuvo una escapada bastante sospechosa son ciertos. - concretó Félix. </p>\
		<p>- Quizás eso explica por qué a mi madre la mataron unos bandidos, ¡Maldito enfermo, me las pagará! - dije muy cabreado.</p>\
		<p>- ¿Qué piensas hacer? - me dijo Félix.</p>\
		<p><a href='rapida'>Armarte rapidamente e ir por él</a> o <a href='Lucia'>buscar a Lucía y Anna</a> para que te ayuden en la pelea</p>"
		, {
			actions: {
				'flecha': function (character, system, action) {
					system.setQuality("flecha", true);
					system.setCharacterText("<p>Adquieres una flecha  puntiaguda.</p>");
				}
			}
		}
	),
	"dagarapida": new undum.SimpleSituation(
		"<p> Decidí armarme rápidamente y fui directo al castillo con Félix, solicité una audiencia con el rey y entre a la sala del trono.</p>\
		<p>- Vaya, si has conseguido sobrevivir engendro mio. - dijo el rey Ashnar.</p>\
		<p>- Para tu desgracia sí, vengaré la muerte de mi madre.</p>\
		<p>- Esa mujer deberia haber muerto aquella noche en las calles como la perra que fue.- dijo el rey mientras se reia.</p>\
		<p>- ¡Te voy a matar!</p>\
		<p>- ¡Guardias! - gritó el rey Ashnar.</p>\
		<p>5 caballeros reales se pusieron entre nosotros y el rey, pero me zafé rápidamente de los que iban a por mí y Félix se encargó de entretener a los restantes. \
		El rey sacó un espadón Claymore de detrás del trono y arremetió contra mí.</p>\
		<p>Pero antes que nada saqué la daga que me había acompañado durante toda esta aventura y se la lancé al rey haciéndole una pequeña herida en la cara.</p>\
		<p>- De verdad crees que así vas a conseguir algo pequeño desgraci.... - El rey calló sobre sus rodillas no entendiendo que estaba ocurriendo.</p>\
		<p>- Esa daga tiene veneno, tu reinado ha terminado viejo loco. - dije con orgullo y odio.</p>\
		<p>- ¡Mierdaaaaa! - gritó el rey loco antes de morir.</p>\
		\
		<p>Así fue como me convertí en Rey, en el nuevo rey loco, Ferdinand I el tirano, sometí a toda la humanidad a mi poder y goberné haciendo lo que quería hasta el final.</p>\
		<img src='media/games/tutorial/finrey.png' class='float_left'>\
		<h1>FIN</h1>"		
	),
	"rapida": new undum.SimpleSituation(
		"<p> Decidí armarme rápidamente y fui directo al castillo con Félix, solicité una audiencia con el rey y entre a la sala del trono.</p>\
		<p>- Vaya, si has conseguido sobrevivir engendro mio. - dijo el rey Ashnar.</p>\
		<p>- Para tu desgracia sí, vengaré la muerte de mi madre.</p>\
		<p>- Esa mujer deberia haber muerto aquella noche en las calles como la perra que fue.- dijo el rey mientras se reia.</p>\
		<p>- ¡Te voy a matar!</p>\
		<p>- ¡Guardias! - gritó el rey Ashnar.</p>\
		<p>5 caballeros reales se pusieron entre nosotros y el rey, pero me zafé rápidamente de los que iban a por mí y Félix se encargó de entretener a los restantes. \
		El rey sacó un espadón Claymore de detrás del trono y arremetió contra mí.</p>\
		<p>Saqué mi lanza y mi escudo de hierro, intenté parar el golpe del rey loco pero esa Claymore tenía algo especial, no pude contener \
		el golpe y salí despedido hacia las paredes del palacio, teniendo la mala suerte de estrellarme contra un pincho de la decoración del castillo \
		y muriendo en el acto. Así fue como no conseguí mi objetivo y morí en vano, el rey loco siguió a sus anchas reinando a placer y haciendo todo tipo de barbaridades sin que nadie pudiera hacer nada. </p>\
		<h1>FIN</h1>\
		<img src='media/games/tutorial/rip.png' class='float_left'>"
	),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
	daga: new undum.OnOffQuality(
		"Daga", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),
	sarten: new undum.OnOffQuality(
		"Sartén", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),
	escudo: new undum.OnOffQuality(
		"Escudo", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),
	flecha: new undum.OnOffQuality(
		"Flecha", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),
	llave: new undum.OnOffQuality(
		"Llave", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),
	mapa: new undum.OnOffQuality(
		"Mapa", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),
	theworld: new undum.OnOffQuality(
		"The World", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),
	baston: new undum.OnOffQuality(
		"Bastón", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
	),
	stamina: new undum.NumericQuality(
		"Resistencia", { priority: "0002", group: 'stats' }
	)
}; {

}

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
	inventario: new undum.QualityGroup('Inventario', { priority: "0001" }),
	stats: new undum.QualityGroup(null, { priority: "0001" }),
};


// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
	system.setQuality("daga", false)
	system.setQuality("sarten", false)
	system.setQuality("escudo", false)
	system.setQuality("flecha", false)
	system.setQuality("llave", false)
	system.setQuality("mapa", false)
	system.setQuality("theworld", false)
	system.setQuality("baston", false)
	character.qualities.stamina = 12;
	system.setCharacterText("<p>¡Disfruta de esta trepidante aventura!</p>");
};
