package models

type Feat struct {
	//ID                 int    `json:"id,omitempty"`
	Name               string `json:"name,omitempty"`
	Type               string `json:"type,omitempty"`
	Description        string `json:"description,omitempty"`
	Prerequisites      string `json:"prerequisites,omitempty"`
	PrerequisiteFeats  string `json:"prerequisite_feats,omitempty"`
	Benefit            string `json:"benefit,omitempty"`
	Normal             string `json:"normal,omitempty"`
	Special            string `json:"special,omitempty"`
	Source             string `json:"source,omitempty"`
	Fulltext           string `json:"fulltext,omitempty"`
	Teamwork           int    `json:"teamwork,omitempty"`
	Critical           int    `json:"critical,omitempty"`
	Grit               int    `json:"grit,omitempty"`
	Style              int    `json:"style,omitempty"`
	Performance        int    `json:"performance,omitempty"`
	Racial             int    `json:"racial,omitempty"`
	CompanionFamiliar  int    `json:"companion_familiar,omitempty"`
	RaceName           string `json:"race_name,omitempty"`
	Note               string `json:"note,omitempty"`
	Goal               string `json:"goal,omitempty"`
	CompletionBenefit  string `json:"completion_benefit,omitempty"`
	Multiples          int    `json:"multiples,omitempty"`
	SuggestedTraits    string `json:"suggested_traits,omitempty"`
	PrerequisiteSkills string `json:"prerequisite_skills,omitempty"`
	Panache            int    `json:"panache,omitempty"`
	Betrayal           int    `json:"betrayal,omitempty"`
	Targeting          int    `json:"targeting,omitempty"`
	Esoteric           int    `json:"esoteric,omitempty"`
	Stare              int    `json:"stare,omitempty"`
	WeaponMastery      int    `json:"weapon_mastery,omitempty"`
	ItemMastery        int    `json:"item_mastery,omitempty"`
	ArmorMastery       int    `json:"armor_mastery,omitempty"`
	ShieldMastery      int    `json:"shield_mastery,omitempty"`
	BloodHex           int    `json:"blood_hex,omitempty"`
	Trick              int    `json:"trick,omitempty"`
}
