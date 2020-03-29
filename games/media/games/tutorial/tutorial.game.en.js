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
        enter: function(character, system, from) {
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
		<img src='media/games/tutorial/taberna.jpg' class='float_left'>\
		<p>Una vez preparado sal&#237 de camino a la taberna con paso ligero, no quer&#237a hacerla esperar y quedar mal.\
		Aunque vivo a las afueras del pueblo no se tarda mucho en llegar a la plaza central del mismo.</p>\
		\
		<p>Ya hab&#237a anochecido cuando llegu&#233 a la taberna. Para mi sorpresa, llegu&#233 antes que Luc&#237a.\
		As&#237 que decid&#237 esperarla en la entrada. Pasaron varios minutos hasta que al final la dislumbr&#233 corriendo hacia la taberna.</p>\
		\
		<p>-&#161Lo siento lo siento lo siento...! - Se le escucha decir mientras se acerca a la taberna.</p>\
		\
		<p>Hum, no s&#233 si<a href='sitaberna1'> ech&#225rselo en cara de mofa,</a> o<a href='sitaberna2'> echar pelillos a la mar.</a></p>" 

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
		<img src='media/games/tutorial/taberna.jpg' class='float_left'>\
		<p>Una vez preparado sal&#237 de camino a la taberna con paso ligero, no quer&#237a hacerla esperar y quedar mal.\
		Aunque vivo a las afueras del pueblo no se tarda mucho en llegar a la plaza central del mismo.</p>\
		\
		<p>Ya hab&#237a anochecido cuando llegu&#233 a la taberna. Para mi sorpresa, llegu&#233 antes que Luc&#237a.\
		As&#237 que decid&#237 esperarla en la entrada. Pasaron varios minutos hasta que al final la dislumbr&#233 corriendo hacia la taberna.</p>\
		\
		<p>-&#161Lo siento lo siento lo siento...! - Se le escucha decir mientras se acerca a la taberna.</p>\
		\
		<p>Hum, no s&#233 si<a href='sitaberna1'> ech&#225rselo en cara de mofa,</a> o<a href='sitaberna2'> echar pelillos a la mar.</a></p>" 

	),

	sitcultivo: new undum.SimpleSituation(
    	"<h1>Ir al cultivo</h1>\
    	<img src='media/games/tutorial/cultivo.jpg' class='float_left'>\
    	<p>Decido seguir arando el campo. Los brazos me pesaban del cansancio y el atardecer estaba llegando, pero justo antes de terminar, me sobresalto con el graznido de un cuerpo que ha pasado cerca de ti, por un momento ves que lleva algo brillante en su pico.\
       Lo sigues con cierta curiosidad hasta un árbol cerca del cultivo, viendo como se posa en él y vuelve a irse pero sin el objeto brillante en su pico.\
    	Escalas el árbol y ¡Qué leches! el maldito cuervo llevaba una pendiente de oro. Cojo el pendiente, bajo el árbol y salto de la alegría. Hoy es mi día de suerte, justo cuando necesitaba algo de dinero - piensas.\
    	Corrí lo más rápido que pude hacia el pueblo, ya que estaba empezando a anochecer y el herrero cerraba pronto, necesitabas ese dinero cuanto antes. \
    	Llegas como puedes a la herrería. Nada más entrar le dices al herrero:\
    	¡Buenas! Quiero venderte este pendiente, por favor, necesito el dinero cuanto antes.\
    	El herrero te mira con cara de duda.\
    	¿Un chico con un pendiente? Que extraño…\
    	En ese momento, Ferdinand sintió el verdadero terror, ¿como le explico que se lo he robado a un cuervo, que a su vez se lo habrá robado a alguien?\
    	En un segundo caes en la mejor excusa posible.\
    	¿Qué pasa? ¿Los chicos no podemos llevar pendientes?\
    	A lo que el herrero, de pronto, empezó a sudar bastamente, sabiendo que había perdido todo argumento para replicarme.\
   		No, no, sin problema claro, la verdad que no sé por qué te he preguntado eso jaja.\
    	El herrero me da el dinero suficiente para aguantar durante bastante tiempo, así que no tendré ningún problema para invitar a Lucía a cenar esta noche.\
    	Suspiro de cansancio por la tremenda tarde que he tenido entre el trabajo y llegar a la herrería, pero me despejo rápidamente, ya que he quedado con Lucía, así que <a href='continuacioncultivo'>me preparo con la mayor brevedad posible.</a>\
     	</p>"
	),
	
	continuacioncultivo: new undum.SimpleSituation(
		"<p>Una vez preparado sal&#237 de camino a la taberna con paso ligero, no quer&#237a hacerla esperar y quedar mal.\
		Aunque vivo a las afueras del pueblo no se tarda mucho en llegar a la plaza central del mismo.</p>\
		\
		<p>Ya hab&#237a anochecido cuando llegu&#233 a la taberna. Para mi sorpresa, llegu&#233 antes que Luc&#237a.\
		As&#237 que decid&#237 esperarla en la entrada. Pasaron varios minutos hasta que al final la dislumbr&#233 corriendo hacia la taberna.</p>\
		\
		<p>-&#161Lo siento lo siento lo siento...! - Se le escucha decir mientras se acerca a la taberna.</p>\
		\
		<p>Hum, no s&#233 si<a href='sitaberna1'> ech&#225rselo en cara en plan broma,</a> o<a href='sitaberna2'> echar pelillos a la mar.</a></p>"

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
	<p>-¿Que va a ser esta noche?</p>\
	<p>No s&#233 si pedir<a href='comidaa'> el tipico filete con carne y vino de beber</a>, algo más ligero en la forma de<a href='comidab'> un revuelto con hidromiel de bebida</a>, o simplemente\
	<a href='comidac'> que me sorprenda el camarero.</a></p>"
	
	),
   
   
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
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
    skill: new undum.IntegerQuality(
        "Habilidad", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Resistencia", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Fortuna</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiración", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novicio", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progreso', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>¡Disfruta de esta trepidante aventura!</p>");
};
