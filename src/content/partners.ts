/**
 * Obsahová vrstva — partneři programu (loga v assets/partners/trim).
 */

export type Partner = {
  src: string;
  alt: string;
};

const logo = (file: string, alt: string): Partner => ({
  src: `/assets/partners/trim/${file}`,
  alt,
});

/** Hlavní univerzitní partner. */
export const mainPartner = logo("vut.png", "VUT v Brně");

/** Univerzity a instituce. */
export const institutions: Partner[] = [
  logo("muni.png", "MUNI"),
  logo("mendelu.png", "MENDELU"),
  logo("unob.png", "Univerzita obrany"),
  logo("jmk.png", "Jihomoravský kraj"),
  logo("brno.png", "Statutární město Brno"),
];

/** Firemní patroni vynálezů. */
export const patrons: Partner[] = [
  logo("abb.png", "ABB"),
  logo("att.png", "AT&T"),
  logo("garrett.png", "Garrett"),
  logo("onsemi.png", "onsemi"),
  logo("honeywell.png", "Honeywell"),
  logo("nxp.png", "NXP"),
  logo("te.png", "TE Connectivity"),
  logo("thermofisher.png", "Thermo Fisher Scientific"),
  logo("biovendor.png", "BioVendor Group"),
  logo("bohemia.png", "Bohemia Interactive"),
  logo("siemens.png", "Siemens Energy"),
  logo("yunex.png", "Yunex Traffic"),
  logo("gen.png", "Gen"),
  logo("sap.png", "SAP"),
  logo("tietoevry.png", "Tietoevry"),
];

/** Partneři projektu. */
export const projectPartners: Partner[] = [
  logo("fablab.png", "FabLab Brno"),
  logo("czechitas.png", "Czechitas"),
  logo("ideastatica.png", "IDEA StatiCa"),
];
