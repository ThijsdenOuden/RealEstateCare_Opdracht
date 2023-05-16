export class PropertyReport {
  constructor(id, property_location, report_completed) {
    this.id = id;
    this.date_inspection = new Date().toISOString();
    this.property_location = property_location;
    this.report_completed = report_completed;
    this.report = [];
  }

  addReports(damageReport, maintenance, technicalInstallation, modification) {
    this.report.push(damageReport, maintenance, technicalInstallation, modification);
  }
}

export class DamageReport {
  constructor(dam_location, dam_new_damage, dam_kind_of_damage, dam_date_time, dam_needs_action, dam_description, dam_images) {
    this.dam_location = dam_location;
    this.dam_new_damage = dam_new_damage;
    this.dam_kind_of_damage = dam_kind_of_damage;
    this.dam_date_time = dam_date_time;
    this.dam_needs_action = dam_needs_action;
    this.dam_description = dam_description;
    this.dam_images = dam_images;
  }
}

export class Maintenance {
  constructor(main_location, main_kind_of_maintenance, main_needs_action, main_cost_indication, main_images) {
    this.main_location = main_location;
    this.main_kind_of_maintenance = main_kind_of_maintenance;
    this.main_needs_action = main_needs_action;
    this.main_cost_indication = main_cost_indication;
    this.main_images = main_images;
  }
}

export class TechnicalInstallation {
  constructor(tech_location, tech_installation_type, tech_reported_malfunction, tech_test_procedure, tech_approved, tech_remark, tech_images) {
    this.tech_location = tech_location;
    this.tech_installation_type = tech_installation_type;
    this.tech_reported_malfunction = tech_reported_malfunction;
    this.tech_test_procedure = tech_test_procedure;
    this.tech_approved = tech_approved;
    this.tech_remark = tech_remark;
    this.tech_images = tech_images;
  }
}

export class Modification {
  constructor(mod_documented_modifications, mod_location, mod_carried_out_by, mod_modification_type, mod_action, mod_remark, mod_images) {
    this.mod_documented_modifications = mod_documented_modifications;
    this.mod_location = mod_location;
    this.mod_carried_out_by = mod_carried_out_by;
    this.mod_modification_type = mod_modification_type;
    this.mod_action = mod_action;
    this.mod_remark = mod_remark;
    this.mod_images = mod_images;
  }
}


// Create instances of DamageReport, Maintenance, TechnicalInstallation, and Modification classes
// const damageReport1 = new DamageReport('Location1', true, 'Kind1', '2023-04-21', true, 'Description1', ['image1.jpg', 'image2.jpg']);
// const maintenance1 = new Maintenance('Location2', 'Kind2', true, '$100', ['image3.jpg', 'image4.jpg']);
// const technicalInstallation1 = new TechnicalInstallation('Location3', 'Type1', 'Malfunction1', 'TestProcedure1', true, 'Remark1', ['image5.jpg', 'image6.jpg']);
// const modification1 = new Modification('DocumentedModifications1', 'Location4', 'CarriedOutBy1', 'ModificationType1', 'Action1', 'Remark2', ['image7.jpg', 'image8.jpg']);

// Create an instance of PropertyReport
// const propertyReport1 = new PropertyReport('ID1', 'PropertyLocation1');

// Add the report objects to the PropertyReport instance
// propertyReport1.addDamageReport(damageReport1);
// propertyReport1.addMaintenance(maintenance1);
// propertyReport1.addTechnicalInstallation(technicalInstallation1);
// propertyReport1.addModification(modification1);