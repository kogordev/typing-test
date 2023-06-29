var wordsModule = (function () {
	var words = [
		//https://www.ef.co.uk/english-resources/english-vocabulary/top-1000-words/
		//https://delim.co/#
		`a ability able about above accept according account across act action activity actually add address administration admit adult affect after again against age agency agent ago agree agreement ahead air all allow almost alone along already also although always American among amount analysis and animal another answer any anyone anything appear apply approach area argue arm around arrive art article artist as ask assume at attack attention attorney audience author authority available avoid away baby back bad bag ball bank bar base be beat beautiful because become bed before begin behavior behind believe benefit best better between beyond big bill billion bit black blood blue board body book born both box boy break bring brother budget build building business but buy by call camera campaign can cancer candidate capital car card care career carry case catch cause cell center central century certain certainly chair challenge chance change character charge check child choice choose church citizen city civil claim class clear clearly close coach cold collection college color come commercial common community company compare computer concern condition conference Congress consider consumer contain continue control cost could country couple course court cover create crime cultural culture cup current customer cut dark data daughter day dead deal death debate decade decide decision deep defense degree Democrat democratic describe design despite detail determine develop development die difference different difficult dinner direction director discover discuss discussion disease do doctor dog door down draw dream drive drop drug during each early east easy eat economic economy edge education effect effort eight either election else employee end energy enjoy enough enter entire environment environmental especially establish even evening event ever every everybody everyone everything evidence exactly example executive exist expect experience expert explain eye face fact factor fail fall family far fast father fear federal feel feeling few field fight figure fill film final finally financial find fine finger finish fire firm first fish five floor fly focus follow food foot for force foreign forget form former forward four free friend from front full fund future game garden gas general generation get girl give glass go goal good government great green ground group grow growth guess gun guy hair half hand hang happen happy hard have he head health hear heart heat heavy help her here herself high him himself his history hit hold home hope hospital hot hotel hour house how however huge human hundred husband I idea identify if image imagine impact important improve in include including increase indeed indicate individual industry information inside instead institution interest interesting international interview into investment involve issue it item its itself job join just keep key kid kill kind kitchen know knowledge land language large last late later laugh law lawyer lay lead leader learn least leave left leg legal less let letter level lie life light like likely line list listen little live local long look lose loss lot love low machine magazine main maintain major majority make man manage management manager many market marriage material matter may maybe me mean measure media medical meet meeting member memory mention message method middle might military million mind minute miss mission model modern moment money month more morning most mother mouth move movement movie Mr Mrs much music must my myself name nation national natural nature near nearly necessary need network never new news newspaper next nice night no none nor north not note nothing notice now n't number occur of off offer office officer official often oh oil ok old on once one only onto open operation opportunity option or order organization other others our out outside over own owner page pain painting paper parent part participant particular particularly partner party pass past patient pattern pay peace people per perform performance perhaps period person personal phone physical pick picture piece place plan plant play player PM point police policy political politics poor popular population position positive possible power practice prepare present president pressure pretty prevent price private probably problem process produce product production professional professor program project property protect prove provide public pull purpose push put quality question quickly quite race radio raise range rate rather reach read ready real reality realize really reason receive recent recently recognize record red reduce reflect region relate relationship religious remain remember remove report represent Republican require research resource respond response responsibility rest result return reveal rich right rise risk road rock role room rule run safe same save say scene school science scientist score sea season seat second section security see seek seem sell send senior sense series serious serve service set seven several sex sexual shake share she shoot short shot should shoulder show side sign significant similar simple simply since sing single sister sit site situation six size skill skin small smile so social society soldier some somebody someone something sometimes son song soon sort sound source south southern space speak special specific speech spend sport spring staff stage stand standard star start state statement station stay step still stock stop store story strategy street strong structure student study stuff style subject success successful such suddenly suffer suggest summer support sure surface system table take talk task tax teach teacher team technology television tell ten tend term test than thank that the their them themselves then theory there these they thing think third this those though thought thousand threat three through throughout throw thus time to today together tonight too top total tough toward town trade traditional training travel treat treatment tree trial trip trouble true truth try turn TV two type under understand unit until up upon us use usually value various very victim view violence visit voice vote wait walk wall want war watch water way we weapon wear week weight well west western what whatever when where whether which while white who whole whom whose why wide wife will win wind window wish with within without woman wonder word work worker world worry would write writer wrong yard yeah year yes yet you young your yourself`,

		//https://www.popsci.com/lunar-xprize-google-moon-landing/
		`If you can send a spacecraft to the moon and loop around our natural satellite one time, or—even better—gently set a rover down on the lunar surface, there could be money in it for you. $4.75 million, to be precise.

		That is, if you happen to be one of the select few finalist teams competing for the Google Lunar XPrize. The awarding organizations—Xprize and Google—have decided to split two prize amounts between whatever teams manage to achieve two distinct feats:
		
		$1.75 million is up for grabs as part of the Lunar Arrival Milestone Prize. To get a slice of that pie, a “spacecraft must complete one orbit around the moon or enter a direct descent approach to the lunar surface,” according to press materials supplied by XPrize.
		
		A larger chunk—three million dollars—will be split between spacecraft that win the Soft Landing Milestone Prize. To win that, the awarding foundation says that a “spacecraft must transmit data proving it soft-landed on the lunar surface.”
		
		Both of those achievements must be met before March 31, 2018, which is also the new deadline by which teams must complete their attempt at the $30 million Grand Prize. The Grand Prize goes to the first team that manages to put a robot on the moon, explore for 500 meters, and send high-def images and video back to Earth. There will also be a smaller prize for the second team to meet those goals. The catch? The teams need to be 90 percent privately funded.
		
		Robotic exploration of our solar system has long been the purview of national space agencies, which spend millions, and sometimes billions of dollars on developing new technologies. The Curiosity Rover, for example, cost about $2.6 billion (not a lot when you consider the length of the mission, but still pretty expensive). This competition is an attempt to find cheaper ways of exploring the space around us. Previous privately funded missions, like 4M back in 2014, have been relatively simple in design—and none have landed on the lunar surface.
		
		Five teams so far have secured contracts to launch their spacecraft; SpaceIL, Moon Express, Synergy Moon, TeamIndus, and HAKUTO. They all have official plans to launch something by the end of 2017, which is going to make for an exciting next few months in space news, but they now have a few extra months to complete their mission.
		
		It’s a sweet prize, but getting a share of the money won’t be easy. After all, it actually is rocket science.`,
		//https://www.kidsworldfun.com/shortstories_hareandtortoise.php
		`There once was a speedy Hare who bragged about how fast he could run. Tired of hearing him boast, the Tortoise challenged him to a race. All the animals in the forest gathered to watch.

		The Hare ran down the road for a while and then paused to rest. He looked back at the tortoise and cried out, "How do you expect to win this race when you are walking along at your slow, slow pace?"
		
		The Hare stretched himself out alongside the road and fell asleep, thinking, "There is plenty of time to relax."
		
		The Tortoise walked and walked, never ever stopping until he came to the finish line.
		
		The animals who were watching cheered so loudly for Tortoise that they woke up the Hare. The Hare stretched, yawned and began to run again, but it was too late. Tortoise had already crossed the finish line.`,
	];

	return {
		getWords(textNumber) {
			return words[textNumber];
		},
	};
})();
