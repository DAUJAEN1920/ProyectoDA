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
        Luc&#237a</a> o <a href='sit1'>Ir al cultivo</a> </p>"
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
        "<p>Est&#225 bien, hoy ir&#233 contigo - respond&#237. </p>\
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
		<p>Ya hab&#237a anochecido cuando llegu&#233 a la taberna. Para mi sorpresa, llegu&#233 antes que Luc&#237a.\
		As&#237 que decid&#237 esperarla en la entrada. Pasaron varios minutos hasta que al final la dislumbr&#233 corriendo hacia la taberna.</p>\
		\
		<p>-&#161Lo siento lo siento lo siento...! - Se le escucha decir mientras se acerca a la taberna.</p>\
		\
		<p>Hum, no s&#233 si<a href='sit3'> ech&#225rselo en cara en plan broma,</a> o<a href='sit4'> echar pelillos a la mar.</a></p>" 

	),

	sit1b: new undum.SimpleSituation(
		"<p>-Creo que comprobar&#233 el pienso de las gallinas.</p> \
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
		<p>Ya hab&#237a anochecido cuando llegu&#233 a la taberna. Para mi sorpresa, llegu&#233 antes que Luc&#237a.\
		As&#237 que decid&#237 esperarla en la entrada. Pasaron varios minutos hasta que al final la dislumbr&#233 corriendo hacia la taberna.</p>\
		\
		<p>-&#161Lo siento lo siento lo siento...! - Se le escucha decir mientras se acerca a la taberna.</p>\
		\
		<p>Hum, no s&#233 si<a href='sit3'> ech&#225rselo en cara en plan broma,</a> o<a href='sit4'> echar pelillos a la mar.</a></p>" 

	),


    link: new undum.SimpleSituation(
        "<p>Between each chunk of new text, Undum inserts a discreet line\
        in the margin. This allows you to see at a glance everything that\
        has been output as a result of your last click.\
        It is particularly useful for small devices, or when\
        lots of content has appeared. The window also scrolls so the start\
        of the new content is as near to the top of the window as possible.\
        This is also designed to help you read more naturally.</p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>The 'Different Kinds of Links' topic has more\
        about these links.\
        Let's return to the <a href='hub'>topic list</a>.</p>",
        {
            heading: "Disappearing Content",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "<p>There are three types of link in Undum. The first two we've seen\
        in previous topics:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
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
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
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
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
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
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
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
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
