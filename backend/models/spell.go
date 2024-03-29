package models

type Spell struct {
	Name                 string `json:"name,omitempty"`
	School               string `json:"school,omitempty"`
	Subschool            string `json:"subschool,omitempty"`
	Descriptor           string `json:"descriptor,omitempty"`
	SpellLevel           string `json:"spell_level,omitempty"`
	CastingTime          string `json:"casting_time,omitempty"`
	Components           string `json:"components,omitempty"`
	CostlyComponents     int    `json:"costly_components,omitempty"`
	Range                string `json:"range,omitempty"`
	Area                 string `json:"area,omitempty"`
	Effect               string `json:"effect,omitempty"`
	Targets              string `json:"targets,omitempty"`
	Duration             string `json:"duration,omitempty"`
	Dismissible          int    `json:"dismissible,omitempty"`
	Shapeable            int    `json:"shapeable,omitempty"`
	SavingThrow          string `json:"saving_throw,omitempty"`
	SpellResistance      string `json:"spell_resistance,omitempty"`
	Description          string `json:"description,omitempty"`
	DescriptionFormatted string `json:"description_formatted,omitempty"`
	Source               string `json:"source,omitempty"`
	FullText             string `json:"full_text,omitempty"`
	Verbal               int    `json:"verbal,omitempty"`
	Somatic              int    `json:"somatic,omitempty"`
	Material             int    `json:"material,omitempty"`
	Focus                int    `json:"focus,omitempty"`
	DivineFocus          int    `json:"divine_focus,omitempty"`
	Sor                  int    `json:"sor,omitempty"`
	Wiz                  int    `json:"wiz,omitempty"`
	Cleric               string `json:"cleric,omitempty"`
	Druid                string `json:"druid,omitempty"`
	Ranger               string `json:"ranger,omitempty"`
	Bard                 string `json:"bard,omitempty"`
	Paladin              string `json:"paladin,omitempty"`
	Alchemist            string `json:"alchemist,omitempty"`
	Summoner             string `json:"summoner,omitempty"`
	Witch                string `json:"witch,omitempty"`
	Inquisitor           string `json:"inquisitor,omitempty"`
	Oracle               string `json:"oracle,omitempty"`
	Antipaladin          string `json:"antipaladin,omitempty"`
	Magus                int    `json:"magus,omitempty"`
	Adept                string `json:"adept,omitempty"`
	Deity                string `json:"deity,omitempty"`
	SLALevel             int    `json:"SLA_Level,omitempty"`
	Domain               string `json:"domain,omitempty"`
	ShortDescription     string `json:"short_description,omitempty"`
	Acid                 int    `json:"acid,omitempty"`
	Air                  int    `json:"air,omitempty"`
	Chaotic              int    `json:"chaotic,omitempty"`
	Cold                 int    `json:"cold,omitempty"`
	Curse                int    `json:"curse,omitempty"`
	Darkness             int    `json:"darkness,omitempty"`
	Death                int    `json:"death,omitempty"`
	Disease              int    `json:"disease,omitempty"`
	Earth                int    `json:"earth,omitempty"`
	Electricity          int    `json:"electricity,omitempty"`
	Emotion              int    `json:"emotion,omitempty"`
	Evil                 int    `json:"evil,omitempty"`
	Fear                 int    `json:"fear,omitempty"`
	Fire                 int    `json:"fire,omitempty"`
	Force                int    `json:"force,omitempty"`
	Good                 int    `json:"good,omitempty"`
	LanguageDependent    int    `json:"language_dependent,omitempty"`
	Lawful               int    `json:"lawful,omitempty"`
	Light                int    `json:"light,omitempty"`
	MindAffecting        int    `json:"mind_affecting,omitempty"`
	Pain                 int    `json:"pain,omitempty"`
	Poison               int    `json:"poison,omitempty"`
	Shadow               int    `json:"shadow,omitempty"`
	Sonic                int    `json:"sonic,omitempty"`
	Water                int    `json:"water,omitempty"`
	//Linktext             string `json:"linktext,omitempty"`
	//ID                   int    `json:"id,omitempty"`
	MaterialCosts        string `json:"material_costs,omitempty"`
	Bloodline            string `json:"bloodline,omitempty"`
	Patron               string `json:"patron,omitempty"`
	MythicText           string `json:"mythic_text,omitempty"`
	Augmented            string `json:"augmented,omitempty"`
	Mythic               int    `json:"mythic,omitempty"`
	Bloodrager           int    `json:"bloodrager,omitempty"`
	Shaman               string `json:"shaman,omitempty"`
	Psychic              string `json:"psychic,omitempty"`
	Medium               string `json:"medium,omitempty"`
	Mesmerist            string `json:"mesmerist,omitempty"`
	Occultist            string `json:"occultist,omitempty"`
	Spiritualist         string `json:"spiritualist,omitempty"`
	Skald                string `json:"skald,omitempty"`
	Investigator         string `json:"investigator,omitempty"`
	Hunter               string `json:"hunter,omitempty"`
	HauntStatistics      string `json:"haunt_statistics,omitempty"`
	Ruse                 int    `json:"ruse,omitempty"`
	Draconic             int    `json:"draconic,omitempty"`
	Meditative           int    `json:"meditative,omitempty"`
	SummonerUnchained    string `json:"summoner_unchained,omitempty"`
}
