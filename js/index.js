<<<<<<< HEAD
var id;
function play(id){
  console.log(id);
  let audioFileName = id.id + "Audio";
  let audio = document.getElementById(audioFileName);

  if(audio.paused){
    audio.load();
    //$audio.animate({volume: newVolume}, 1000);
    //fade in sound
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

// Don't use window.onLoad like this in production, because it can only listen to one function.
window.onload = function() {
  svgPanZoom('#RunescapeMap', {
    zoomEnabled: true,
    dblClickZoomEnabled: false,
    controlIconsEnabled: true

  });
};

document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, true);
=======
var id;
function play(id){
  if(id == Harmony){
    var audio = document.getElementById("HarmonyAudio");
  }else if (id == NewbieMelody) {
    var audio = document.getElementById("NewbieMelodyAudio");
  }else if (id == CityOfTheDead) {
    var audio = document.getElementById("CityOfTheDeadAudio");
  }else if (id == Sphinx) {
    var audio = document.getElementById("SphinxAudio");
  }else if (id == PharaohsTomb) {
    var audio = document.getElementById("PharaohsTombAudio");
  }else if (id == OverToNardah) {
    var audio = document.getElementById("OverToNardahAudio");
  }else if (id == Scarab){
    var audio = document.getElementById("ScarabAudio");
  }else if (id == SunburnOne) {
    var audio = document.getElementById("SunburnOneAudio");
  }else if (id == SunburnTwo) {
    var audio = document.getElementById("SunburnTwoAudio");
  }else if (id == Dynasty) {
    var audio = document.getElementById("DynastyAudio");
  }else if (id == DesertHeat) {
    var audio = document.getElementById("DesertHeatAudio");
  }else if (id == DesertVoyage) {
    var audio = document.getElementById("DesertVoyageAudio");
  }else if (id == TheDesert) {
    var audio = document.getElementById("TheDesertAudio");
  }else if (id == TheGolem) {
    var audio = document.getElementById("TheGolemAudio");
  }else if (id == Egypt) {
    var audio = document.getElementById("EgyptAudio");
  }else if (id == ArabianThree) {
    var audio = document.getElementById("ArabianThreeAudio");
  }else if (id == ArabianOneOne) {
    var audio = document.getElementById("ArabianOneOneAudio");
  }else if (id == AlKharid) {
    var audio = document.getElementById("AlKharidAudio");
  }else if (id == DuelArena) {
    var audio = document.getElementById("DuelArenaAudio");
  }else if (id == ArabianOneTwo) {
    var audio = document.getElementById("ArabianOneTwoAudio");
  }else if (id == ArabianTwo) {
    var audio = document.getElementById("ArabianTwoAudio");
  }else if (id == Shine) {
    var audio = document.getElementById("ShineAudio");
  }else if (id == BanditCamp) {
    var audio = document.getElementById("BanditCampAudio");
  }else if (id == InTheBrine) {
    var audio = document.getElementById("InTheBrineAudio");
  }else if (id == DistantLand) {
    var audio = document.getElementById("DistantLandAudio");
  }else if (id == ShadowlandOne) {
    var audio = document.getElementById("ShadowlandOneAudio");
  }else if (id == ShadowlandTwo) {
    var audio = document.getElementById("ShadowlandTwoAudio");
  }else if (id == TheShadow) {
    var audio = document.getElementById("TheShadowAudio");
  }else if (id == DanceOfTheUndead) {
    var audio = document.getElementById("DanceOfTheUndeadAudio");
  }else if (id == BoneDance) {
    var audio = document.getElementById("BoneDanceAudio");
  }else if (id == Stagnant) {
    var audio = document.getElementById("StagnantAudio");
  }else if (id == Natural) {
    var audio = document.getElementById("NaturalAudio");
  }else if (id == Venture) {
    var audio = document.getElementById("VentureAudio");
  }else if (id == StillNight) {
    var audio = document.getElementById("StillNightAudio");
  }else if (id == ExpanseOne) {
    var audio = document.getElementById("ExpanseOneAudio");
  }else if (id == AutumnVoyage) {
    var audio = document.getElementById("AutumnVoyageAudio");
  }else if (id == Yesteryear) {
    var audio = document.getElementById("YesteryearAudio");
  }else if (id == Waterlogged) {
    var audio = document.getElementById("WaterloggedAudio");
  }else if (id == Deadlands) {
    var audio = document.getElementById("DeadlandsAudio");
  }else if (id == TheOtherSide) {
    var audio = document.getElementById("TheOtherSideAudio");
  }else if (id == DragontoothIsland) {
    var audio = document.getElementById("DragontoothIslandAudio");
  }else if (id == Shipwrecked) {
    var audio = document.getElementById("ShipwreckedAudio");
  }else if (id == FenkenstrainsRefrain) {
    var audio = document.getElementById("FenkenstrainsRefrainAudio");
  }else if (id == Village) {
    var audio = document.getElementById("VillageAudio");
  }else if (id == TheTerribleTower) {
    var audio = document.getElementById("TheTerribleTowerAudio");
  }else if (id == Morytania) {
    var audio = document.getElementById("MorytaniaAudio");
  }else if (id == DeadQuiet) {
    var audio = document.getElementById("DeadQuietAudio");
  }else if (id == Forbidden) {
    var audio = document.getElementById("ForbiddenAudio");
  }else if (id == Parade) {
    var audio = document.getElementById("ParadeAudio");
  }else if (id == LullabyOne) {
    var audio = document.getElementById("LullabyOneAudio");
  }else if (id == Medieval) {
    var audio = document.getElementById("MedievalAudio");
  }else if (id == Adventure) {
    var audio = document.getElementById("AdventureAudio");
  }else if (id == Garden) {
    var audio = document.getElementById("GardenAudio");
  }else if (id == CrystalSword) {
    var audio = document.getElementById("CrystalSwordAudio");
  }else if (id == Underground) {
    var audio = document.getElementById("UndergroundAudio");
  }else if (id == Dark) {
    var audio = document.getElementById("DarkAudio");
  }else if (id == Witching) {
    var audio = document.getElementById("WitchingAudio");
  }else if (id == DangerousOne) {
    var audio = document.getElementById("DangerousOneAudio");
  }else if (id == ScapeSad) {
    var audio = document.getElementById("ScapeSadAudio");
  }else if (id == EverlastingFire) {
    var audio = document.getElementById("EverlastingFireAudio");
  }else if (id == Regal) {
    var audio = document.getElementById("RegalAudio");
  }else if (id == Faithless) {
    var audio = document.getElementById("FaithlessAudio");
  }else if (id == Shining) {
    var audio = document.getElementById("ShiningAudio");
  }else if (id == WolfMountain) {
    var audio = document.getElementById("WolfMountainAudio");
  }else if (id == ScapeWildOne) {
    var audio = document.getElementById("ScapeWildOneAudio");
  }else if (id == ExpanseTwo) {
    var audio = document.getElementById("ExpanseTwoAudio");
  }else if (id == NightfallOne) {
    var audio = document.getElementById("NightfallOneAdudio");
  }else if (id == CloseQuarters) {
    var audio = document.getElementById("CloseQuartersAudio");
  }else if (id == ScapeWildTwo) {
    var audio = document.getElementById("ScapeWildTwoAudio");
  }else if (id == DeadCanDance) {
    var audio = document.getElementById("DeadCanDanceAudio");
  }else if (id == MoodyOne) {
    var audio = document.getElementById("MoodyOneAudio");
  }else if (id == Lightness) {
    var audio = document.getElementById("LightnessAudio");
  }else if (id == Doorways) {
    var audio = document.getElementById("DoorwaysAudio");
  }else if (id == Spirit) {
    var audio = document.getElementById("SpiritAudio");
  }else if (id == Greatness) {
    var audio = document.getElementById("GreatnessAudio");
  }else if (id == FluteSalad) {
    var audio = document.getElementById("FluteSaladAudio");
  }else if (id == BookOfSpells) {
    var audio = document.getElementById("BookOfSpellsAudio");
  }else if (id == Vision) {
    var audio = document.getElementById("VisionAudio");
  }else if (id == UnknownLand) {
    var audio = document.getElementById("UnknownLandAudio");
  }else if (id == Spooky) {
    var audio = document.getElementById("SpookyAudio");
  }else if (id == Barbarianism) {
    var audio = document.getElementById("BarbarianismAudio");
  }else if (id == Forever) {
    var audio = document.getElementById("ForeverAudio");
  }else if (id == DangerousTwo) {
    var audio = document.getElementById("DangerousTwoAudio");
  }else if (id == Wildwood) {
    var audio = document.getElementById("WildwoodAudio");
  }else if (id == Undercurrent) {
    var audio = document.getElementById("UndercurrentAudio");
  }else if (id == WildernessOneOne) {
    var audio = document.getElementById("WildernessOneOneAudio");
  }else if (id == WildernessOneTwo) {
    var audio = document.getElementById("WildernessOneTwoAudio");
  }else if (id == WildernessTwo) {
    var audio = document.getElementById("WildernessTwoAudio");
  }else if (id == WildSide) {
    var audio = document.getElementById("WildSideAudio");
  }else if (id == MageArena) {
    var audio = document.getElementById("MageArenaAudio");
  }else if (id == PiratesOfPeril) {
    var audio = document.getElementById("PiratesOfPerilAudio");
  }else if (id == GaolOne) {
    var audio = document.getElementById("GaolOneAudio");
  }else if (id == LegionOne) {
    var audio = document.getElementById("LegionOneAudio");
  }else if (id == ArmyOfDarkness) {
    var audio = document.getElementById("ArmyOfDarknessAudio");
  }else if (id == Inspirational) {
    var audio = document.getElementById("InspirationalAudio");
  }else if (id == Alone) {
    var audio = document.getElementById("AloneAudio");
  }else if (id == GnomeTheme) {
    var audio = document.getElementById("GnomeThemeAudio");
  }else if (id == Workshop) {
    var audio = document.getElementById("WorkshopAudio");
  }else if (id == Wander) {
    var audio = document.getElementById("WanderAudio");
  }else if (id == SeaShantyTwo) {
    var audio = document.getElementById("SeaShantyTwoAudio");
  }else if (id == Tomorrow) {
    var audio = document.getElementById("TomorrowAudio");
  }else if (id == Marooned) {
    var audio = document.getElementById("MaroonedAudio");
  }else if (id == IslandLife) {
    var audio = document.getElementById("IslandLifeAudio");
  }else if (id == NullAndVoid) {
    var audio = document.getElementById("NullAndVoidAudio");
  }else if (id == PestControl) {
    var audio = document.getElementById("PestControlAudio");
  }else if (id == Anywhere) {
    var audio = document.getElementById("AnywhereAudio");
  }else if (id == MonkeyMadness) {
    var audio = document.getElementById("MonkeyMadnessAudio");
  }else if (id == Reggae) {
    var audio = document.getElementById("ReggaeAudio");
  }else if (id == JungleIslandOne) {
    var audio = document.getElementById("JungleIslandOneAudio");
  }else if (id == SpookyJungle) {
    var audio = document.getElementById("SpookyJungleAudio");
  }else if (id == JunglyOne) {
    var audio = document.getElementById("JunglyOneAudio");
  }else if (id == AmbientJungle) {
    var audio = document.getElementById("AmbientJungleAudio");
  }else if (id == TribalTwo) {
    var audio = document.getElementById("TribalTwoAudio");
  }else if (id == FanfareTwo) {
    var audio = document.getElementById("FanfareTwoAudio");
  }else if (id == ReggaeTwo) {
    var audio = document.getElementById("ReggaeTwoAudio");
  }else if (id == Tribal) {
    var audio = document.getElementById("TribalAudio");
  }else if (id == JunglyThree) {
    var audio = document.getElementById("JunglyThreeAudio");
  }else if (id == Nomad) {
    var audio = document.getElementById("NomadAudio");
  }else if (id == TribalBackground) {
    var audio = document.getElementById("TribalBackgroundAudio");
  }else if (id == JungleTroubles) {
    var audio = document.getElementById("JungleTroublesAudio");
  }else if (id == SeaShanty) {
    var audio = document.getElementById("SeaShantyAudio");
  }else if (id == JungleIslandTwo) {
    var audio = document.getElementById("JungleIslandTwoAudio");
  }else if (id == HighSeas) {
    var audio = document.getElementById("HighSeasAudio");
  }else if (id == LandLubber) {
    var audio = document.getElementById("LandLubberAudio");
  }else if (id == JunglyTwo) {
    var audio = document.getElementById("JunglyTwoAudio");
  }else if (id == JollyR) {
    var audio = document.getElementById("JollyRAudio");
  }else if (id == MudskipperMelody) {
    var audio = document.getElementById("MudskipperMelodyAudio");
  }else if (id == Attention) {
    var audio = document.getElementById("AttentionAudio");
  }else if (id == LongWayHome) {
    var audio = document.getElementById("LongWayHomeAudio");
  }else if (id == Emperor) {
    var audio = document.getElementById("EmperorAudio");
  }else if (id == NightfallTwo) {
    var audio = document.getElementById("NightfallTwoAudio");
  }else if (id == MilesAway) {
    var audio = document.getElementById("MilesAwayAudio");
  }else if (id == Arrival) {
    var audio = document.getElementById("ArrivalAudio");
  }else if (id == Fanfare) {
    var audio = document.getElementById("FanfareAudio");
  }else if (id == ScapeSoft) {
    var audio = document.getElementById("ScapeSoftAudio");
  }else if (id == Gnome) {
    var audio = document.getElementById("GnomeAudio");
  }else if (id == Splendour) {
    var audio = document.getElementById("SplendourAudio");
  }else if (id == Wonder) {
    var audio = document.getElementById("WonderAudio");
  }else if (id == Principality) {
    var audio = document.getElementById("PrincipalityAudio");
  }else if (id == Kingdom) {
    var audio = document.getElementById("KingdomAudio");
  }else if (id == IceMelody) {
    var audio = document.getElementById("IceMelodyAudio");
  }else if (id == Fishing) {
    var audio = document.getElementById("FishingAudio");
  }else if (id == Background) {
    var audio = document.getElementById("BackgroundAudio");
  }else if (id == Background) {
    var audio = document.getElementById("BackgroundAudio");
  }else if (id == FruitsDeMer) {
    var audio = document.getElementById("FruitsDeMerAudio");
  }else if (id == WildernessThree) {
    var audio = document.getElementById("WildernessThreeAudio");
  }else if (id == Troubled) {
    var audio = document.getElementById("TroubledAudio");
  }else if (id == Serene) {
    var audio = document.getElementById("SereneAudio");
  }else if (id == DeepWildy) {
    var audio = document.getElementById("DeepWildyAudio");
  }else if (id == Frostbite) {
    var audio = document.getElementById("FrostbiteAudio");
  }else if (id == Stranded) {
    var audio = document.getElementById("StrandedAudio");
  }else if (id == Sojourn) {
    var audio = document.getElementById("SojournAudio");
  }else if (id == Tremble) {
    var audio = document.getElementById("TrembleAudio");
  }else if (id == Contest) {
    var audio = document.getElementById("ContestAudio");
  }else if (id == RomancingTheCrone) {
    var audio = document.getElementById("RomancingTheCroneAudio");
  }else if (id == HellsBells) {
    var audio = document.getElementById("HellsBellsAudio");
  }else if (id == Settlement) {
    var audio = document.getElementById("SettlementAudio");
  }else if (id == Borderland) {
    var audio = document.getElementById("BorderlandAudio");
  }else if (id == Legend) {
    var audio = document.getElementById("LegendAudio");
  }else if (id == Camelot) {
    var audio = document.getElementById("CamelotAudio");
  }else if (id == MonarchWaltz) {
    var audio = document.getElementById("MonarchWaltzAudio");
  }else if (id == Overture) {
    var audio = document.getElementById("OvertureAudio");
  }else if (id == Lightwalk) {
    var audio = document.getElementById("LightwalkAudio");
  }else if (id == MagicalJourney) {
    var audio = document.getElementById("MagicalJourneyAudio");
  }else if (id == Trinity) {
    var audio = document.getElementById("TrinityAudio");
  }else if (id == RiversideOne) {
    var audio = document.getElementById("RiversideOneAudio");
  }else if (id == ChompyHunt) {
    var audio = document.getElementById("ChompyHuntAudio");
  }else if (id == Grumpy) {
    var audio = document.getElementById("GrumpyAudio");
  }else if (id == Soundscape) {
    var audio = document.getElementById("SoundscapeAudio");
  }else if (id == InTheManor) {
    var audio = document.getElementById("InTheManorAudio");
  }else if (id == GaolTwo) {
    var audio = document.getElementById("GaolTwoAudio");
  }else if (id == ZogreDance) {
    var audio = document.getElementById("ZogreDanceAudio");
  }else if (id == RomperChomper) {
    var audio = document.getElementById("RomperChomperAudio");
  }else if (id == LongAgo) {
    var audio = document.getElementById("LongAgoAudio");
  }else if (id == BigChords) {
    var audio = document.getElementById("BigChordsAudio");
  }else if (id == Melodrama) {
    var audio = document.getElementById("MelodramaAudio");
  }else if (id == CastleWars) {
    var audio = document.getElementById("CastleWarsAudio");
  }else if (id == LostSoul) {
    var audio = document.getElementById("LostSoulAudio");
  }else if (id == Exposed) {
    var audio = document.getElementById("ExposedAudio");
  }else if (id == RiversideTwo) {
    var audio = document.getElementById("RiversideTwoAudio");
  }else if (id == MagicDance) {
    var audio = document.getElementById("MagicDanceAudio");
  }else if (id == Meridian) {
    var audio = document.getElementById("MeridianAudio");
  }else if (id == Forest) {
    var audio = document.getElementById("ForestAudio");
  }else if (id == FarAway) {
    var audio = document.getElementById("FarAwayAudio");
  }else if (id == Serenade) {
    var audio = document.getElementById("SerenadeAudio");
  }else if (id == Emotion) {
    var audio = document.getElementById("EmotionAudio");
  }else if (id == AttackFour) {
    var audio = document.getElementById("AttackFourAudio");
  }else if (id == FanfareThree) {
    var audio = document.getElementById("FanfareThreeAudio");
  }else if (id == Upcoming) {
    var audio = document.getElementById("UpcomingAudio");
  }else if (id == BalladOfEnchantment) {
    var audio = document.getElementById("BalladOfEnchantmentAudio");
  }else if (id == AttackOne) {
    var audio = document.getElementById("AttackOneAudio");
  }else if (id == Expecting) {
    var audio = document.getElementById("ExpectingAudio");
  }else if (id == ElvenMist) {
    var audio = document.getElementById("ElvenMistAudio");
  }else if (id == Breeze) {
    var audio = document.getElementById("BreezeAudio");
  }else if (id == Woodland) {
    var audio = document.getElementById("WoodlandAudio");
  }else if (id == Everywhere) {
    var audio = document.getElementById("EverywhereAudio");
  }else if (id == CrystalCastle) {
    var audio = document.getElementById("CrystalCastleAudio");
  }else if (id == Overpass) {
    var audio = document.getElementById("OverpassAudio");
  }else if (id == MoodyTwo) {
    var audio = document.getElementById("MoodyTwoAudio");
  }else if (id == SadMeadow) {
    var audio = document.getElementById("SadMeadowAudio");
  }else if (id == Knightly) {
    var audio = document.getElementById("KnightlyAudio");
  }else if (id == Baroque) {
    var audio = document.getElementById("BaroqueAudio");
  }else if (id == Wonderous) {
    var audio = document.getElementById("WonderousAudio");
  }else if (id == TheTower) {
    var audio = document.getElementById("TheTowerAudio");
  }else if (id == March) {
    var audio = document.getElementById("MarchAudio");
  }else if (id == Neverland) {
    var audio = document.getElementById("NeverlandAudio");
  }else if (id == GnomeVillageTwo) {
    var audio = document.getElementById("GnomeVillageTwoAudio");
  }else if (id == GnomeVillage) {
    var audio = document.getElementById("GnomeVillageAudio");
  }else if (id == Waterfall) {
    var audio = document.getElementById("WaterfallAudio");
  }else if (id == Mellow) {
    var audio = document.getElementById("MellowAudio");
  }else if (id == TalkingForest) {
    var audio = document.getElementById("TalkingForestAudio");
  }else if (id == Theme) {
    var audio = document.getElementById("ThemeAudio");
  }else if (id == Voyage) {
    var audio = document.getElementById("VoyageAudio");
  }else if (id == GnomeKing) {
    var audio = document.getElementById("GnomeKingAudio");
  }else if (id == Gnomeball) {
    var audio = document.getElementById("GnomeballAudio");
  }else if (id == MakingWaves) {
    var audio = document.getElementById("MakingWavesAudio");
  }else if (id == LegionTwo) {
    var audio = document.getElementById("LegionTwoAudio");
  }else if (id == LullabyTwo) {
    var audio = document.getElementById("LullabyTwoAudio");
  }else if (id == Saga) {
    var audio = document.getElementById("SagaAudio");
  }else if (id == Lighthouse) {
    var audio = document.getElementById("LighthouseAudio");
  }else if (id == TheDesolateisle) {
    var audio = document.getElementById("TheDesolateisleAudio");
  }else if (id == Rellekka) {
    var audio = document.getElementById("RellekkaAudio");
  }else if (id == Miscellania) {
    var audio = document.getElementById("MiscellaniaAudio");
  }else if (id == Etceteria) {
    var audio = document.getElementById("EtceteriaAudio");
  }else if (id == MonkeyMadness) {
    var audio = document.getElementById("MonkeyMadnessAudio");
  }else if (id == Dream) {
    var audio = document.getElementById("DreamAudio");
  }else if (id == Start) {
    var audio = document.getElementById("StartAudio");
  }else if (id == Horizon) {
    var audio = document.getElementById("HorizonAudio");
  }else if (id == Lasting) {
    var audio = document.getElementById("LastingAudio");
  }else if (id == TreeSpirits) {
    var audio = document.getElementById("TreeSpiritsAudio");
  }


  if(audio.paused){
    audio.load();
    //$audio.animate({volume: newVolume}, 1000);
    //fade in sound
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

// Don't use window.onLoad like this in production, because it can only listen to one function.
window.onload = function() {
  svgPanZoom('#RunescapeMap', {
    zoomEnabled: true,
    dblClickZoomEnabled: false,
    controlIconsEnabled: true

  });
};

document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, true);
>>>>>>> 0c369c5ba55c6f4c599ac947e92c4ec4fc2e1304
