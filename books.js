const BOOKS = [
  {
    title: "Morgan & Mikhail's Clinical Anesthesiology",
    author: "John F. Butterworth, David C. Mackey, John D. Wasnick",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_131101.png"
  },
  {
    title: "Get Through Primary FRCA: SBAs",
    author: "Desikan Rangarajan, Mandeep Phull, Vinodkumar Patil",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_140609.png"
  },
  {
    title: "Essentials of Anaesthetic Equipment",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_140626.png"
  },
  {
    title: "Complications and Mishaps in Anesthesia",
    author: "Matthias Hubler, Thea Koch, Karen B. Domino",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_140701.png"
  },
  {
    title: "Basics of Anesthesia",
    author: "Ronald D. Miller, Manuel C. Pardo Jr.",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_1437716148.png"
  },
  {
    title: "Anesthesia In Cosmetic Surgery",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_anesthesia_in_cosmetic_surgery_ublog_tk.png"
  },
  {
    title: "Anesthesiology",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_anesthesiology_ublog_tk.png"
  },
  {
    title: "Case Files Neurology",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_case_files_neurology_ublog_tk.png"
  },
  {
    title: "Essential Clinical Anesthesia 2011",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_essential_clinical_anesthesia_2011_pg.png"
  },
  {
    title: "Essentials Of Regional Anesthesia",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_essentials_of_regional_anesthesia_ublog_tk.png"
  },
  {
    title: "First Aid For The Anesthesiology Boards",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_first_aid_for_the_anesthesiology_boards_ublog2_tk.png"
  },
  {
    title: "First Aid For The Anesthesiology Boards",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_first_aid_for_the_anesthesiology_boards_ublog_tk.png"
  },
  {
    title: "Monitoring In Anesthesia And Perioperative Care",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/anesthesia_monitoring_in_anesthesia_and_perioperative_care_u.png"
  },
  {
    title: "Atlas of Morphology and Functional Anatomy of the Brain",
    author: "T. Scarabino, U. Salvolini, F. Di Salle, H. Duvernoy, P. Rabischong",
    category: "Neurology",
    cover: "assets/covers/atlas_of_the_brain_colored_atlas_of_morphology_and_functiona.png"
  },
  {
    title: "Color Atlas of Family Medicine",
    author: "Richard P. Usatine, Mindy Ann Smith, E.J. Mayeaux Jr., Heidi Chumley",
    category: "General Medicine",
    cover: "assets/covers/book1_0071769641.png"
  },
  {
    title: "Emergencies in Critical Care",
    author: "Martin Beed, Richard Sherman, Ravi Mahajann",
    category: "Critical Care",
    cover: "assets/covers/book1_0199696276.png"
  },
  {
    title: "Sectional",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/book1_0323020038_sectional.png"
  },
  {
    title: "Zitelli and Davis' Atlas of Pediatric Physical Diagnosis",
    author: "Basil J. Zitelli, Sara McIntire, Andrew J. Nowalk",
    category: "Pediatrics",
    cover: "assets/covers/book1_0323079326_pdf_qshofzs.png"
  },
  {
    title: "Surgical Intensive Care Medicine",
    author: "Unknown",
    category: "Critical Care",
    cover: "assets/covers/book1_0387778926.png"
  },
  {
    title: "Ward's Anaesthetic Equipment",
    author: "Andrew J Davey, Ali Diba",
    category: "Anesthesia",
    cover: "assets/covers/book1_0702030945.png"
  },
  {
    title: "Monitoring in Neurocritical Care",
    author: "Peter D. Le Roux, Joshua M. Levine, W. Andrew Kofke",
    category: "Neurology",
    cover: "assets/covers/book1_1437701671.png"
  },
  {
    title: "Emergency Medicine: Lecture Notes",
    author: "Chris Moulton, David Yates",
    category: "Emergency Medicine",
    cover: "assets/covers/book1_1444336665.png"
  },
  {
    title: "Adult Emergency Medicine",
    author: "John F. O'Brien",
    category: "Emergency Medicine",
    cover: "assets/covers/book1_1840761784.png"
  },
  {
    title: "Neurocritical Care Board Review: Questions and Answers",
    author: "Asma Zakaria",
    category: "Neurology",
    cover: "assets/covers/book1_1936287579.png"
  },
  {
    title: "Tips and Tricks of Bedside Cardiology",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/book1_9350902680.png"
  },
  {
    title: "A Z Of Abdominal Radiology 2009",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_a_z_of_abdominal_radiology_2009.png"
  },
  {
    title: "Applied Radiological Anatomy For Medical Students",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_applied_radiological_anatomy_for_medical_students.png"
  },
  {
    title: "Atlas Of Chest Sonography 2003",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_atlas_of_chest_sonography_springer_2003.png"
  },
  {
    title: "Chest Imaging An Algorithmic Approach To Learning",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_chest_imaging_an_algorithmic_approach_to_learning_spri.png"
  },
  {
    title: "Clinical Anesthesiology Lessons Learned From Morbidity",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/book1_clinical_anesthesiology_lessons_learned_from_morbidity.png"
  },
  {
    title: "Clinically Oriented Pulmonary Imaging 2012",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_clinically_oriented_pulmonary_imaging_springer_2012.png"
  },
  {
    title: "Comparative Interpretation Of Ct And Standard Radiogra",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/book1_comparative_interpretation_of_ct_and_standard_radiogra.png"
  },
  {
    title: "Computed Tomography Of The Lung A Pattern Approach",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_computed_tomography_of_the_lung_a_pattern_approach_spr.png"
  },
  {
    title: "Ct Of The Acute Abdomen 2011",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_ct_of_the_acute_abdomen_springer_2011.png"
  },
  {
    title: "Ct Of The Retroperitoneum From Conventional To Multi",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_ct_of_the_retroperitoneum_from_conventional_to_multi_e.png"
  },
  {
    title: "Diagnostic Imaging Peter Armstrong",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_diagnostic_imaging_6th_peter_armstrong.png"
  },
  {
    title: "Emergency Radiology",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_emergency_radiology.png"
  },
  {
    title: "Emergency Radiology Of The Abdomen Imaging Features",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_emergency_radiology_of_the_abdomen_imaging_features_an.png"
  },
  {
    title: "Felsons Principles Of Chest Roentgenology 14160",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_felsons_principles_of_chest_roentgenology_3rd_ed_14160.png"
  },
  {
    title: "First Frcr Anatomy Questions And Answers",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/book1_first_frcr_anatomy_questions_and_answers_1.png"
  },
  {
    title: "Fluid Electrolyte And Acid Base Disorders Clinical",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/book1_fluid_electrolyte_and_acid_base_disorders_clinical_eva.png"
  },
  {
    title: "Introduction To Sectional Anatomy",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_introduction_to_sectional_anatomy.png"
  },
  {
    title: "Marinos The Icu Book",
    author: "Unknown",
    category: "Critical Care",
    cover: "assets/covers/book1_marinos_the_icu_book_4th_edition.png"
  },
  {
    title: "Mayil S Krishnam John Curtis Emergency Radiology",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_mayil_s_krishnam_john_curtis_emergency_radiology.png"
  },
  {
    title: "Neurological Emergencies In Clinical Practice",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/book1_neurological_emergencies_in_clinical_practice.png"
  },
  {
    title: "Noninvasive Ventilation In High Risk Infections And",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/book1_noninvasive_ventilation_in_high_risk_infections_and_ma.png"
  },
  {
    title: "Paediatric Imaging Manual 2008",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_paediatric_imaging_manual_2008.png"
  },
  {
    title: "Pediatric Chest Imaging Chest Imaging In Infants And",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_pediatric_chest_imaging_chest_imaging_in_infants_and_c.png"
  },
  {
    title: "Pharmacology And Physiology For Anesthesia",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/book1_pharmacology_and_physiology_for_anesthesia.png"
  },
  {
    title: "Practical Management Of Pain",
    author: "Unknown",
    category: "Pain Management",
    cover: "assets/covers/book1_practical_management_of_pain.png"
  },
  {
    title: "Practical Manual Of Echocardiography",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/book1_practical_manual_of_echocardiography.png"
  },
  {
    title: "Symptom Oriented Pain Management",
    author: "Unknown",
    category: "Pain Management",
    cover: "assets/covers/book1_symptom_oriented_pain_management.png"
  },
  {
    title: "Thoracic Radiology",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book1_thoracic_radiology.png"
  },
  {
    title: "040 Essential Radiology Clinical Presentation Pathophys",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_040_essential_radiology_clinical_presentation_pathophys.png"
  },
  {
    title: "Internal Medicine: An Illustrated Radiological Guide",
    author: "Jarrah Ali Al-Tubaikh",
    category: "Internal Medicine",
    cover: "assets/covers/book_3642037089.png"
  },
  {
    title: "ICU Protocols: A Stepwise Approach",
    author: "Rajesh Chawla, Subhash Todi",
    category: "Critical Care",
    cover: "assets/covers/book_8132205340_icu.png"
  },
  {
    title: "Abc Of Imaging In Trauma Abc Series",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_abc_of_imaging_in_trauma_abc_series.png"
  },
  {
    title: "Benumof And Hagberg S Airway Management",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/book_benumof_and_hagberg_s_airway_management.png"
  },
  {
    title: "Cardiovascular Problems In Emergency Medicine",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/book_cardiovascular_problems_in_emergency_medicine.png"
  },
  {
    title: "Case Files In Emergency Medicine",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/book_case_files_in_emergency_medicine.png"
  },
  {
    title: "Case Files Internal Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/book_case_files_internal_medicine.png"
  },
  {
    title: "Chest Imaging An Algorithmic Approach To Learning Sprin",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_chest_imaging_an_algorithmic_approach_to_learning_sprin.png"
  },
  {
    title: "Clinical Radiology",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_clinical_radiology.png"
  },
  {
    title: "Clinically Oriented Pulmonary Imaging 2012",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_clinically_oriented_pulmonary_imaging_springer_2012.png"
  },
  {
    title: "Comparative Interpretation Of Ct And Standard Radiograp",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/book_comparative_interpretation_of_ct_and_standard_radiograp.png"
  },
  {
    title: "Computed Tomography Of The Lung A Pattern Approach",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_computed_tomography_of_the_lung_a_pattern_approach_spri.png"
  },
  {
    title: "Ct Of The Airways 2008",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_ct_of_the_airways_springer_2008.png"
  },
  {
    title: "Ct Of The Retroperitoneum From Conventional To Multi",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_ct_of_the_retroperitoneum_from_conventional_to_multi_en.png"
  },
  {
    title: "Diagnostic Imaging Peter Armstrong",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_diagnostic_imaging_6th_peter_armstrong.png"
  },
  {
    title: "Emergency Medicine Clinical Essentials",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/book_emergency_medicine_clinical_essentials.png"
  },
  {
    title: "Emergency Radiology",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_emergency_radiology.png"
  },
  {
    title: "First Frcr Anatomy Questions And Answers",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/book_first_frcr_anatomy_questions_and_answers_1.png"
  },
  {
    title: "Fluid Electrolyte And Acid Base Disorders Clinical Eval",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/book_fluid_electrolyte_and_acid_base_disorders_clinical_eval.png"
  },
  {
    title: "Handbook Of Blood Gas Acid Base Interpretation",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/book_handbook_of_blood_gas_acid_base_interpretation.png"
  },
  {
    title: "International Trauma Life Support",
    author: "Unknown",
    category: "Trauma",
    cover: "assets/covers/book_international_trauma_life_support.png"
  },
  {
    title: "Introduction To Sectional Anatomy",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_introduction_to_sectional_anatomy.png"
  },
  {
    title: "Multislice Ct 2008 Maximilian F Reiser",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/book_multislice_ct_springer_2008_maximilian_f_reiser.png"
  },
  {
    title: "Neurological Emergencies In Clinical Practice",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/book_neurological_emergencies_in_clinical_practice.png"
  },
  {
    title: "Neuroradiology In Clinical Practice Internatio",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/book_neuroradiology_in_clinical_practice_springer_internatio.png"
  },
  {
    title: "Nip Neurology In Practice Emergency Management In Neuro",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/book_nip_neurology_in_practice_emergency_management_in_neuro.png"
  },
  {
    title: "Paediatric Imaging Manual 2008",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_paediatric_imaging_manual_2008.png"
  },
  {
    title: "Radiology For Surgeons In Clinical Practice",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/book_radiology_for_surgeons_in_clinical_practice_springer_20.png"
  },
  {
    title: "Small Bowel Obstruction Ct Features With Plain Film",
    author: "Unknown",
    category: "Abdominal / GI Imaging",
    cover: "assets/covers/book_small_bowel_obstruction_ct_features_with_plain_film_and.png"
  },
  {
    title: "Smith And Aitkenhead S Textbook Of Anesthesia",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/book_smith_and_aitkenhead_s_textbook_of_anesthesia.png"
  },
  {
    title: "Textbook Of Neurointensive Care",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/book_textbook_of_neurointensive_care.png"
  },
  {
    title: "The Neurologic Diagnosis",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/book_the_neurologic_diagnosis.png"
  },
  {
    title: "A Practical Approach To Cardiovascular",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_a_practical_approach_to_cardiovascular.png"
  },
  {
    title: "A Practical Guide To Mechanical Ventil",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_a_practical_guide_to_mechanical_ventil.png"
  },
  {
    title: "Cardiovascular Hemodynamics For The",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_cardiovascular_hemodynamics_for_the_cl.png"
  },
  {
    title: "Cardiovascular Imaging For Clinical",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_cardiovascular_imaging_for_clinical_pr.png"
  },
  {
    title: "Congenital Heart Defects Decision Maki",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_congenital_heart_defects_decision_maki.png"
  },
  {
    title: "Critical Care Of Children With Heart",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_critical_care_of_children_with_heart_d.png"
  },
  {
    title: "Handbook Of Respiratory Care",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_handbook_of_respiratory_care_3rd_ed_ub.png"
  },
  {
    title: "Heart Diseases In Children",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_heart_diseases_in_children_ublog_tk.png"
  },
  {
    title: "Jefferson Heart Institute Handbook",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_jefferson_heart_institute_handbook_of_.png"
  },
  {
    title: "Myocardial Imaging Tissue Doppler",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_myocardial_imaging_tissue_doppler_and_.png"
  },
  {
    title: "Novel Strategies In Ischemic Heart",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/cardiac_coloerd_books_novel_strategies_in_ischemic_heart_dis.png"
  },
  {
    title: "Chest Sonography",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/chest_sonarography_colored_chest_sonography_3rd_ed_ublog_tk.png"
  },
  {
    title: "Color Atlas And Text Of Clinical",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/clincal_medcine_colored_color_atlas_and_text_of_clinical_med.png"
  },
  {
    title: "Mayo Clinic Cardiology: Concise Textbook",
    author: "Joseph G. Murphy, Margaret A. Lloyd",
    category: "Cardiology",
    cover: "assets/covers/clincal_medcine_colored_medoldage.png"
  },
  {
    title: "Ulpmm Code Blue Bedside Procedures And Critical",
    author: "Unknown",
    category: "Critical Care",
    cover: "assets/covers/code_blue_ulpmm_code_blue_bedside_procedures_and_critical_in.png"
  },
  {
    title: "Head And Neck Imaging",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/ct_body_images_colored_head_and_neck_imaging_4th_ed_ublog_tk.png"
  },
  {
    title: "Imaging Of Vertebral Trauma",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/ct_body_images_colored_imaging_of_vertebral_trauma_3rd_ed_ub.png"
  },
  {
    title: "Myocardial Imaging Tissue Doppler",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/ct_body_images_colored_myocardial_imaging_tissue_doppler_and.png"
  },
  {
    title: "Hemorrhagic Stroke An Atlas Of Investigati",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/cva_books_colored_hemorrhagic_stroke_an_atlas_of_investigati.png"
  },
  {
    title: "Intracerebral Hemorrhage",
    author: "J. Ricardo Carhuapoma, Stephan A. Mayer, Daniel F. Hanley",
    category: "Neurology",
    cover: "assets/covers/cva_books_colored_intracer_hemorr_2009.png"
  },
  {
    title: "Dermatology",
    author: "Unknown",
    category: "Dermatology",
    cover: "assets/covers/dermatology_colored_dermatology.png"
  },
  {
    title: "Emergency Dermatology",
    author: "Unknown",
    category: "Dermatology",
    cover: "assets/covers/dermatology_colored_emergency_dermatology_ublog_tk.png"
  },
  {
    title: "Making Sense of Acute Medicine: A Guide to Diagnosis",
    author: "Paul F Jenkins, Paula H Johnson",
    category: "Internal Medicine",
    cover: "assets/covers/downloads_backup_0340984252.png"
  },
  {
    title: "Cardiovascular Problems in Emergency Medicine",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/downloads_backup_0470670673.png"
  },
  {
    title: "Macleod's Clinical Examination",
    author: "Graham Douglas, Fiona Nicol, Colin Robertson",
    category: "General Medicine",
    cover: "assets/covers/downloads_backup_0702047287.png"
  },
  {
    title: "ECG Workout: Exercises in Arrhythmia Interpretation",
    author: "Jane Huff",
    category: "Cardiology / ECG",
    cover: "assets/covers/downloads_backup_1451115539.png"
  },
  {
    title: "ICU Protocols: A Stepwise Approach",
    author: "Rajesh Chawla, Subhash Todi",
    category: "Critical Care",
    cover: "assets/covers/downloads_backup_8132205340_icu.png"
  },
  {
    title: "Echocardiography",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/downloads_backup_8847025826_echocard.png"
  },
  {
    title: "Ventilation",
    author: "Unknown",
    category: "Pulmonology",
    cover: "assets/covers/downloads_backup_8847055253_ventilat_1.png"
  },
  {
    title: "Abdominal Imaging",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_abdominal_imaging.png"
  },
  {
    title: "Applied Radiological Anatomy",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_applied_radiological_anatomy.png"
  },
  {
    title: "Benumof And Hagberg S Airway Management",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/downloads_backup_benumof_and_hagberg_s_airway_management.png"
  },
  {
    title: "Bronchoscopy",
    author: "Unknown",
    category: "Pulmonology",
    cover: "assets/covers/downloads_backup_bronchoscopy.png"
  },
  {
    title: "Burn Care And Treatment",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/downloads_backup_burn_care_and_treatment.png"
  },
  {
    title: "Cardiovascular Problems In Emergency Medici",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/downloads_backup_cardiovascular_problems_in_emergency_medici.png"
  },
  {
    title: "Case Files In Emergency Medicine",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/downloads_backup_case_files_in_emergency_medicine.png"
  },
  {
    title: "Case Files Internal Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/downloads_backup_case_files_internal_medicine.png"
  },
  {
    title: "Choosing The Correct Radiologic Test",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_choosing_the_correct_radiologic_test.png"
  },
  {
    title: "Clinical Radiology",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_clinical_radiology.png"
  },
  {
    title: "Ct Teaching Manual",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/downloads_backup_ct_teaching_manual.png"
  },
  {
    title: "Diagnostic And Surgical Imaging Anatomy",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_diagnostic_and_surgical_imaging_anatomy.png"
  },
  {
    title: "Diagnostic Imaging For The Emergency Physic",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_diagnostic_imaging_for_the_emergency_physic.png"
  },
  {
    title: "Ecg Interpretation",
    author: "Unknown",
    category: "Cardiology / ECG",
    cover: "assets/covers/downloads_backup_ecg_interpretation.png"
  },
  {
    title: "Ecg Problems",
    author: "Unknown",
    category: "Cardiology / ECG",
    cover: "assets/covers/downloads_backup_ecg_problems.png"
  },
  {
    title: "Electrocardiography Of Arrhythmias",
    author: "Unknown",
    category: "Cardiology / ECG",
    cover: "assets/covers/downloads_backup_electrocardiography_of_arrhythmias.png"
  },
  {
    title: "Emergency Medicine Clinical Essentials",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/downloads_backup_emergency_medicine_clinical_essentials.png"
  },
  {
    title: "Emergency Radiology",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_emergency_radiology.png"
  },
  {
    title: "Handbook Of Blood Gas Acid Base Interpretat",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/downloads_backup_handbook_of_blood_gas_acid_base_interpretat.png"
  },
  {
    title: "International Trauma Life Support",
    author: "Unknown",
    category: "Trauma",
    cover: "assets/covers/downloads_backup_international_trauma_life_support.png"
  },
  {
    title: "Oxford American Handbook Of Clinical Examin",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/downloads_backup_oxford_american_handbook_of_clinical_examin.png"
  },
  {
    title: "Parenchymal Diseases",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/downloads_backup_parenchymal_diseases.png"
  },
  {
    title: "Pulmonary Imaging",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_pulmonary_imaging.png"
  },
  {
    title: "Radiology Illustrated Chest",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/downloads_backup_radiology_illustrated_chest.png"
  },
  {
    title: "Smith And Aitkenhead S Textbook Of Anesthes",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/downloads_backup_smith_and_aitkenhead_s_textbook_of_anesthes.png"
  },
  {
    title: "Textbook Of Neurointensive Care",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/downloads_backup_textbook_of_neurointensive_care.png"
  },
  {
    title: "The Neurologic Diagnosis",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/downloads_backup_the_neurologic_diagnosis.png"
  },
  {
    title: "The Practice Of Clinical Echocardiography",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/downloads_backup_the_practice_of_clinical_echocardiography.png"
  },
  {
    title: "150 Practice Ecgs Interpretation And Review",
    author: "Unknown",
    category: "Cardiology / ECG",
    cover: "assets/covers/ecg_150_practice_ecgs_interpretation_and_review_3rd_ed_ublog.png"
  },
  {
    title: "A Practical Approach To Cardiovascular Medicine",
    author: "Unknown",
    category: "Cardiology / ECG",
    cover: "assets/covers/ecg_a_practical_approach_to_cardiovascular_medicine_ublog_tk.png"
  },
  {
    title: "Ecg Interpretation",
    author: "Unknown",
    category: "Cardiology / ECG",
    cover: "assets/covers/ecg_ecg_interpretation.png"
  },
  {
    title: "Ecg Problems",
    author: "Unknown",
    category: "Cardiology / ECG",
    cover: "assets/covers/ecg_ecg_problems.png"
  },
  {
    title: "Electrocardiography Of Arrhythmias",
    author: "Unknown",
    category: "Cardiology / ECG",
    cover: "assets/covers/ecg_electrocardiography_of_arrhythmias.png"
  },
  {
    title: "Case Based Echocardiography",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/echocardiography_colored_case_based_echocardiography_ublog_t.png"
  },
  {
    title: "Color Atlas Of Ultrasound Anatomy",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/echocardiography_colored_color_atlas_of_ultrasound_anatomy_u.png"
  },
  {
    title: "Establishing Better Standards Of",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/echocardiography_colored_establishing_better_standards_of_ca.png"
  },
  {
    title: "Feigenbaums Echocardiography",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/echocardiography_colored_feigenbaums_echocardiography_6th_ed.png"
  },
  {
    title: "Hemodynamic Monitoring Using Echoca",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/echocardiography_colored_hemodynamic_monitoring_using_echoca.png"
  },
  {
    title: "Interpreting Trauma Radiographs Ublo",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/emergency_books_colored_interpreting_trauma_radiographs_ublo.png"
  },
  {
    title: "Minor Emergencies",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/emergency_books_colored_minor_emergencies_2nd_ed_ublog_tk.png"
  },
  {
    title: "Surgical Intensive Care Medicine",
    author: "Unknown",
    category: "Critical Care",
    cover: "assets/covers/emergency_medicine_0199779120.png"
  },
  {
    title: "Emergency Cross-sectional Radiology",
    author: "Daniel Y.F. Chung, Dipanjali Mondal, Erskine J. Holmes, Rakesh Misra",
    category: "Radiology",
    cover: "assets/covers/emergency_medicine_0521279534.png"
  },
  {
    title: "Surgical Emergencies in Clinical Practice",
    author: "Iqbal Shergill, Manit Arya, Tahwinder Upile, Neeher Arya, Prokar Dasgupta",
    category: "Surgery",
    cover: "assets/covers/emergency_medicine_1447128753.png"
  },
  {
    title: "Annual Update in Intensive Care and Emergency Medicine 2014",
    author: "J.L. Vincent",
    category: "Critical Care",
    cover: "assets/covers/emergency_medicine_3319037455careemergency.png"
  },
  {
    title: "Annual Update in Intensive Care and Emergency Medicine 2014",
    author: "J.L. Vincent",
    category: "Critical Care",
    cover: "assets/covers/emergency_medicine_3319085778.png"
  },
  {
    title: "Emergency Medicine Clinical Essentials",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/emergency_medicine_emergency_medicine_clinical_essentials.png"
  },
  {
    title: "Ulpmm Code Blue Bedside Procedures And",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/emergency_medicine_ulpmm_code_blue_bedside_procedures_and_cr.png"
  },
  {
    title: "Emergency Cross-sectional Radiology",
    author: "Daniel Y.F. Chung, Dipanjali Mondal, Erskine J. Holmes, Rakesh Misra",
    category: "Radiology",
    cover: "assets/covers/emergency_x_radiology_0521279534.png"
  },
  {
    title: "Diseases of Ear, Nose & Throat",
    author: "Mohan Bansal",
    category: "ENT",
    cover: "assets/covers/ent_9350906422ear.png"
  },
  {
    title: "Anesthesiology Oral Board Flash Cards",
    author: "Jeff Gadsden, Dean Jones",
    category: "Anesthesia",
    cover: "assets/covers/nedal_0071714030.png"
  },
  {
    title: "Case Files: Neurology",
    author: "Eugene C. Toy, Ronald Simpson, Norman Tintner",
    category: "Neurology",
    cover: "assets/covers/nedal_0071761705.png"
  },
  {
    title: "Surgical Intensive Care Medicine",
    author: "Unknown",
    category: "Critical Care",
    cover: "assets/covers/nedal_0199779120.png"
  },
  {
    title: "Surgical Intensive Care Medicine",
    author: "Unknown",
    category: "Critical Care",
    cover: "assets/covers/nedal_0199915717.png"
  },
  {
    title: "Browse's Introduction to the Symptoms and Signs of Surgical Disease",
    author: "Norman L. Browse, John Black, Kevin G. Burnand, William E.G. Thomas",
    category: "Surgery",
    cover: "assets/covers/nedal_034081571x.png"
  },
  {
    title: "Chamberlain's Symptoms and Signs in Clinical Medicine",
    author: "Andrew R Houghton, David Gray",
    category: "General Medicine",
    cover: "assets/covers/nedal_0340974257.png"
  },
  {
    title: "RAPID Neurology & Neurosurgery",
    author: "Kumar Abhinav, Richard Edwards, Alan Whone",
    category: "Neurology",
    cover: "assets/covers/nedal_0470654430.png"
  },
  {
    title: "Emergency Cross-sectional Radiology",
    author: "Daniel Y.F. Chung, Dipanjali Mondal, Erskine J. Holmes, Rakesh Misra",
    category: "Radiology",
    cover: "assets/covers/nedal_0521279534.png"
  },
  {
    title: "Textbook of Adult Emergency Medicine",
    author: "Peter Cameron, George Jelinek, Anne-Maree Kelly, Anthony Brown, Mark Little",
    category: "Emergency Medicine",
    cover: "assets/covers/nedal_070205335x.png"
  },
  {
    title: "Morgan & Mikhail's Clinical Anesthesiology",
    author: "John F. Butterworth, David C. Mackey, John D. Wasnick",
    category: "Anesthesia",
    cover: "assets/covers/nedal_131101.png"
  },
  {
    title: "Neurology Board Review: An Illustrated Study Guide",
    author: "Niraj Mavinkurve, Kelly H. Flemming",
    category: "Neurology",
    cover: "assets/covers/nedal_1405162201neurolog.png"
  },
  {
    title: "Get Through Primary FRCA: SBAs",
    author: "Desikan Rangarajan, Mandeep Phull, Vinodkumar Patil",
    category: "Anesthesia",
    cover: "assets/covers/nedal_140609.png"
  },
  {
    title: "Faust's Anesthesiology Review",
    author: "Michael J. Murray, Barry A. Harrison, Jeff T. Mueller, Steven H. Rose, C. Thomas Wass, Denise J. Wedel",
    category: "Anesthesia",
    cover: "assets/covers/nedal_140614.png"
  },
  {
    title: "Essentials of Anaesthetic Equipment",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/nedal_140626.png"
  },
  {
    title: "Complications and Mishaps in Anesthesia",
    author: "Matthias Hubler, Thea Koch, Karen B. Domino",
    category: "Anesthesia",
    cover: "assets/covers/nedal_140701.png"
  },
  {
    title: "Practice Single Best Answer Questions for the Final FRCA: A Revision Guide",
    author: "Hozefa Ebrahim, Khalid Hasan, Mark Tindall, Michael Clarke, Natish Bindal",
    category: "Anesthesia",
    cover: "assets/covers/nedal_140704.png"
  },
  {
    title: "Anesthesiology and Otolaryngology",
    author: "Adam I. Levine, Satish Govindaraj, Samuel DeMaria Jr.",
    category: "Anesthesia",
    cover: "assets/covers/nedal_140706.png"
  },
  {
    title: "Anesthesiology: Examination and Board Review",
    author: "Mark Dershwitz, J. Matthias Walz",
    category: "Anesthesia",
    cover: "assets/covers/nedal_140920ex.png"
  },
  {
    title: "Anesthesiology",
    author: "David E. Longnecker, David L. Brown, Mark F. Newman, Warren M. Zapol",
    category: "Anesthesia",
    cover: "assets/covers/nedal_140920ln.png"
  },
  {
    title: "Surgical Emergencies in Clinical Practice",
    author: "Iqbal Shergill, Manit Arya, Tahwinder Upile, Neeher Arya, Prokar Dasgupta",
    category: "Surgery",
    cover: "assets/covers/nedal_1447128753.png"
  },
  {
    title: "Near Misses in Pediatric Anesthesia, 2nd Edition",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/nedal_1q2ro_near_misses_in_pediatric_anesthesia_2nd_edition.png"
  },
  {
    title: "Annual Update in Intensive Care and Emergency Medicine 2014",
    author: "J.L. Vincent",
    category: "Critical Care",
    cover: "assets/covers/nedal_3319037455careemergency.png"
  },
  {
    title: "Annual Update in Intensive Care and Emergency Medicine 2014",
    author: "J.L. Vincent",
    category: "Critical Care",
    cover: "assets/covers/nedal_3319085778.png"
  },
  {
    title: "Tips and Tricks of Bedside Cardiology",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/nedal_9350902680.png"
  },
  {
    title: "Diseases of Ear, Nose & Throat",
    author: "Mohan Bansal",
    category: "ENT",
    cover: "assets/covers/nedal_9350906422ear.png"
  },
  {
    title: "Anesthesiology Board Review Pearls Of Wisdom",
    author: "Unknown",
    category: "Anesthesia",
    cover: "assets/covers/nedal_anesthesiology_board_review_pearls_of_wisdom.png"
  },
  {
    title: "Primary FRCA: OSCEs in Anaesthesia",
    author: "William Simpson, Peter Frank, Andrew Davies, Simon Maguire",
    category: "Anesthesia",
    cover: "assets/covers/nedal_primary_frca_n.png"
  },
  {
    title: "Ulpmm Code Blue Bedside Procedures And Critical Inform",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/nedal_ulpmm_code_blue_bedside_procedures_and_critical_inform.png"
  },
  {
    title: "Ykdc5 Clinical Care Conundrums Challenging Diagnoses",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/nedal_ykdc5_clinical_care_conundrums_challenging_diagnoses_i.png"
  },
  {
    title: "A Dictionary Of Neurological Sign",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/neurological_sings_colored_a_dictionary_of_neurological_sign.png"
  },
  {
    title: "Caplan S Stroke A Clinical Approa",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/neurological_sings_colored_caplan_s_stroke_a_clinical_approa.png"
  },
  {
    title: "Case Studies In Neuroanesthesia",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/neurological_sings_colored_case_studies_in_neuroanesthesia_a.png"
  },
  {
    title: "European Handbook Of Neurological",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/neurological_sings_colored_european_handbook_of_neurological.png"
  },
  {
    title: "Localization In Clinical Neurolog",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/neurological_sings_colored_localization_in_clinical_neurolog.png"
  },
  {
    title: "Neurology Study Guide: Oral Board Examination Review",
    author: "Teresita Gondoa",
    category: "Neurology",
    cover: "assets/covers/neurological_sings_colored_ne_urol_ogy_stu_dy_gu_ide_ublog_t.png"
  },
  {
    title: "Neurology Board Review: An Illustrated Study Guide",
    author: "Niraj Mavinkurve, Kelly H. Flemming",
    category: "Neurology",
    cover: "assets/covers/neurological_sings_colored_neurology_board_review_an_illustr.png"
  },
  {
    title: "Musculoskeletal Examination",
    author: "Unknown",
    category: "Orthopedics",
    cover: "assets/covers/orthopedic_medicine_colored_musculoskeletal_examination_and_.png"
  },
  {
    title: "Cardiovascular Pediatric",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pediatric_critical_care_colored_cardiovascular_pediatric_cri.png"
  },
  {
    title: "Concise Guide To Pediatric",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pediatric_critical_care_colored_concise_guide_to_pediatric_a.png"
  },
  {
    title: "Critical Care Of Children",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pediatric_critical_care_colored_critical_care_of_children_wi.png"
  },
  {
    title: "Heart Diseases In Children",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pediatric_critical_care_colored_heart_diseases_in_children_u.png"
  },
  {
    title: "Imaging For Pediatricians",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pediatric_critical_care_colored_imaging_for_pediatricians_10.png"
  },
  {
    title: "Pediatric Critical Care",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pediatric_critical_care_colored_pediatric_critical_care_3th_.png"
  },
  {
    title: "Pediatric Critical Care",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pediatric_critical_care_colored_pediatric_critical_care_4th_.png"
  },
  {
    title: "Advanced Trauma Life Support (ATLS): Student Course Manual",
    author: "American College of Surgeons",
    category: "Trauma",
    cover: "assets/covers/trauma_1880696029.png"
  },
  {
    title: "Abc Of Imaging In Trauma Abc Series",
    author: "Unknown",
    category: "Trauma",
    cover: "assets/covers/trauma_abc_of_imaging_in_trauma_abc_series.png"
  },
  {
    title: "100 Cases in Clinical medicine",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_100_cases_in_clinical_medicine.png"
  },
  {
    title: "1000 MCQs Davidson Principles and Practice of Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_1000_mcqs_davidson_principles_and_practice_of_medicine__1_.png"
  },
  {
    title: "1000 mcqs davidson Principles and Practice of Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_1000_mcqs_davidson_principles_and_practice_of_medicine.png"
  },
  {
    title: "1000 MCQ’s for Davidson’s Principles Practice of Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_1000_mcq_s_for_davidson_s_principles_practice_of_medicine_.png"
  },
  {
    title: "100 Cases in General Practice 2e",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_100_cases_in_general_practice_2e.png"
  },
  {
    title: "100 Questions in Cardiology Diana Holdright, Hugh Montgomery",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/pharma_100_questions_in_cardiology_diana_holdright__hugh_montgomery.png"
  },
  {
    title: "101 Chest X-ray Solutions",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/pharma_101_chest_x-ray_solutions__1_.png"
  },
  {
    title: "2000 Curran’s Atlas Of Histopathology",
    author: "Unknown",
    category: "Pathology",
    cover: "assets/covers/pharma_2000_curran_s_atlas_of_histopathology.png"
  },
  {
    title: "2014 Code Blue",
    author: "Jandial, Rahul, Jandial, Danielle D.",
    category: "General Medicine",
    cover: "assets/covers/pharma_2014_code_blue_-_jandial__rahul__jandial__danielle_d_.png"
  },
  {
    title: "2015 Diabetes Cookbook For Dummies",
    author: "Rubin, Alan L",
    category: "Endocrinology",
    cover: "assets/covers/pharma_2015_diabetes_cookbook_for_dummies_-_rubin__alan_l.png"
  },
  {
    title: "2015 Medical Terminology For Dummies",
    author: "Henderson, Beverley",
    category: "General Medicine",
    cover: "assets/covers/pharma_2015_medical_terminology_for_dummies_-_henderson__beverley.png"
  },
  {
    title: "2016 William's Endocrinology, 13th Edition",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_2016_william_s_endocrinology__13th_edition.png"
  },
  {
    title: "2019 Kaplan USMLE Step 2 CK Internal Medicine Lecture Notes",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_2019_kaplan_usmle_step_2_ck_internal_medicine_lecture_notes.png"
  },
  {
    title: "2023 Nelson Essentials of Pediatrics 9th edition",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pharma_2023_nelson_essentials_of_pediatrics_9th_edition.png"
  },
  {
    title: "5-Cosmetic Dermatology",
    author: "Prins and Pract.",
    category: "Dermatology",
    cover: "assets/covers/pharma_5-cosmetic_dermatology_-_prins_and_pract_.png"
  },
  {
    title: "500 Single Best Answers in Medicine",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_500_single_best_answers_in_medicine.png"
  },
  {
    title: "5 6309974305547486998",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_5_6309974305547486998.png"
  },
  {
    title: "@Million medical books Internal medicine CCS",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma__million_medical_books_internal_medicine_ccs.png"
  },
  {
    title: "A Colour Handbook of Oral Medicine",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_a_colour_handbook_of_oral_medicine.png"
  },
  {
    title: "A Guide to clinical chemistry",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_a_guide_to_clinical_chemistry.png"
  },
  {
    title: "A History of Diabetes in Pregnancy 2012 889711519",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_a_history_of_diabetes_in_pregnancy_2012_889711519.png"
  },
  {
    title: "A Practical Guide to Diabetes Mellitus 7th ed 2016",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_a_practical_guide_to_diabetes_mellitus_7th_ed_2016.png"
  },
  {
    title: "A Textbook of Modern Toxicology",
    author: "Unknown",
    category: "Toxicology",
    cover: "assets/covers/pharma_a_textbook_of_modern_toxicology.png"
  },
  {
    title: "A Textbook of Pharmaceutical Analysis",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_a_textbook_of_pharmaceutical_analysis.png"
  },
  {
    title: "ABC of Breast Diseases, 3rd edition (ABC Series)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_abc_of_breast_diseases__3rd_edition__abc_series_.png"
  },
  {
    title: "ABC of Clinical Haematology (ABC Series)",
    author: "Unknown",
    category: "Hematology",
    cover: "assets/covers/pharma_abc_of_clinical_haematology__abc_series_.png"
  },
  {
    title: "ABC of Clinical Haematology",
    author: "Unknown",
    category: "Hematology",
    cover: "assets/covers/pharma_abc_of_clinical_haematology.png"
  },
  {
    title: "ABC Of Diabetes",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_abc_of_diabetes.png"
  },
  {
    title: "ABC of Kidney Disease (ABC Series)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_abc_of_kidney_disease__abc_series_.png"
  },
  {
    title: "ACP MKSAP19 Medical Knowledge Self Assessment Program Infectious",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_acp_mksap19_medical_knowledge_self_assessment_program_infectious.png"
  },
  {
    title: "Advanced organic chemistry reactions and mechanisms",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_advanced_organic_chemistry_reactions_and_mechanisms.png"
  },
  {
    title: "advanced Organic Chemistry",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_advanced_organic_chemistry.png"
  },
  {
    title: "Advances In Medical Physics 2008",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_advances_in_medical_physics_2008.png"
  },
  {
    title: "Aerosols Chemistry, Environmental Impacts and Health",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_aerosols_chemistry__environmental_impacts_and_health.png"
  },
  {
    title: "AK Mahapatra, Raj Kamal Textbook of Head Injury, 4e 2016",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_ak_mahapatra__raj_kamal_textbook_of_head_injury__4e_2016_.png"
  },
  {
    title: "Analytical Testing for the Pharmaceutical GMP Laboratory",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_analytical_testing_for_the_pharmaceutical_gmp_laboratory__1_.png"
  },
  {
    title: "Analytical Testing for the Pharmaceutical GMP Laboratory",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_analytical_testing_for_the_pharmaceutical_gmp_laboratory.png"
  },
  {
    title: "Anatomie et physiologie humanies",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_anatomie_et_physiologie_humanies.png"
  },
  {
    title: "Ansel’s Pharmaceutical Dosage Forms",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_ansel_s_pharmaceutical_dosage_forms.png"
  },
  {
    title: "Antibiotic Basics For Clinicians",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_antibiotic_basics_for_clinicians.png"
  },
  {
    title: "Antibiotics and antibiotic resistance",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_antibiotics_and_antibiotic_resistance.png"
  },
  {
    title: "Antibiotics Simplified",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_antibiotics_simplified.png"
  },
  {
    title: "Antoinette Mary Mind maps for medical students clinical 2017",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_antoinette_mary_mind_maps_for_medical_students_clinical_2017.png"
  },
  {
    title: "An Insider’s Guide to Clinical Medicine Archith Boloor; Anudeep",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_an_insider_s_guide_to_clinical_medicine_archith_boloor__anudeep.png"
  },
  {
    title: "API Textbook of Medicine (2 Volumes)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_api_textbook_of_medicine__2_volumes___2022_.png"
  },
  {
    title: "Applied Clinical Pharmacokinetics",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_applied_clinical_pharmacokinetics.png"
  },
  {
    title: "Applied Physical Pharmacy",
    author: "Unknown",
    category: "Pharmacy Practice",
    cover: "assets/covers/pharma_applied_physical_pharmacy.png"
  },
  {
    title: "Atkinsons Principles of Clinical Pharmacology Shiew Mei Huang, Juan",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_atkinsons_principles_of_clinical_pharmacology_shiew_mei_huang__juan.png"
  },
  {
    title: "Atlas and Anatomy of PET MRI, PET CT and SPECT CT",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_atlas_and_anatomy_of_pet_mri__pet_ct_and_spect_ct.png"
  },
  {
    title: "Atlas of Human Anatomy",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_atlas_of_human_anatomy.png"
  },
  {
    title: "Aulton’s Pharmaceutics The Design and Manufacture of Medicines 6th",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_aulton_s_pharmaceutics_the_design_and_manufacture_of_medicines_6th.png"
  },
  {
    title: "A Short Course in Medical Terminology",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_a_short_course_in_medical_terminology.png"
  },
  {
    title: "bacterial linvasion of host cells",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_bacterial_linvasion_of_host_cells.png"
  },
  {
    title: "Bacterial Pathogenesis",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_bacterial_pathogenesis.png"
  },
  {
    title: "BASIC & CLINICAL PHARMACOLOGY",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_basic___clinical_pharmacology.png"
  },
  {
    title: "Basic Concepts in Pharmacology",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_basic_concepts_in_pharmacology.png"
  },
  {
    title: "Basics of Medical Physics",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_basics_of_medical_physics.png"
  },
  {
    title: "Basic Clinical Pharmacology, 15th Edition Bertram G Katzung, Todd",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_basic_clinical_pharmacology__15th_edition_bertram_g_katzung__todd.png"
  },
  {
    title: "Basic Clinical Pharmacology 15th Bertram B Katzung, Todd W Vanderah",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_basic_clinical_pharmacology_15th_bertram_b_katzung__todd_w_vanderah.png"
  },
  {
    title: "Basic Medical Biochemistry A Clinical Approach 2nd Edition",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_basic_medical_biochemistry_a_clinical_approach_2nd_edition.png"
  },
  {
    title: "Bates' Guide to Physical Examination",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_bates__guide_to_physical_examination.png"
  },
  {
    title: "Beckers world of the cell",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_beckers_world_of_the_cell.png"
  },
  {
    title: "Biochemistry",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_biochemistry.png"
  },
  {
    title: "Biochemistry 5th ed",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_biochemistry_5th_ed.png"
  },
  {
    title: "Biochemistry MCQ",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_biochemistry_mcq.png"
  },
  {
    title: "Biochemistry",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_biochemistry.png"
  },
  {
    title: "Bioinformatics- A Practical Guide to the Analysis of Genes",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_bioinformatics-_a_practical_guide_to_the_analysis_of_genes.png"
  },
  {
    title: "Biopharmaceutics and pharmacokinetics a treatise",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_biopharmaceutics_and_pharmacokinetics___a_treatise.png"
  },
  {
    title: "BMA Illustrated Medical Dictionary, 4th Edition DKEnglish Z Library",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_bma_illustrated_medical_dictionary__4th_edition_dkenglish_z_library.png"
  },
  {
    title: "BMJ Best Practice Assessment of Anemia",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_bmj_best_practice_assessment_of_anemia.png"
  },
  {
    title: "BNF 2021",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_bnf_2021.png"
  },
  {
    title: "BNF 85 March – September 2023 24 British formulation LONDON, 2023",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_bnf_85_march___september_2023_24_british_formulation_london__2023.png"
  },
  {
    title: "BOARD BASIC",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_board_basic.png"
  },
  {
    title: "Board basics",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_board_basics.png"
  },
  {
    title: "Bradley’s Neurology in Clinical Practice, 2-Volume Set",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/pharma_bradley_s_neurology_in_clinical_practice__2-volume_set.png"
  },
  {
    title: "Brain Imaging with MRI and CT An Image Pattern Approach",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/pharma_brain_imaging_with_mri_and_ct_an_image_pattern_approach.png"
  },
  {
    title: "Braunwald’s Heart Disease A Textbook of Cardiovascular Medicine",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/pharma_braunwald_s_heart_disease_a_textbook_of_cardiovascular_medicine.png"
  },
  {
    title: "breast disease 2019",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_breast_disease_2019.png"
  },
  {
    title: "Breast disease diagnosis and pathology Volume -1",
    author: "Unknown",
    category: "Pathology",
    cover: "assets/covers/pharma_breast_disease___diagnosis_and_pathology__volume_-1.png"
  },
  {
    title: "Breast Disease Management and Therapies, Volume- 2",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_breast_disease___management_and_therapies__volume-_2.png"
  },
  {
    title: "Brenner and Stevens’ Pharmacology Edition, 2022",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_brenner_and_stevens__pharmacology_edition__2022.png"
  },
  {
    title: "Brenner and Stevens’ Pharmacology",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_brenner_and_stevens__pharmacology.png"
  },
  {
    title: "BRODY'S HUMAN PHARMACOLOGY-Lynn Wecker(15th E)",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_brody_s_human_pharmacology-lynn_wecker_15th_e_.png"
  },
  {
    title: "BRS pharmacology مترجم",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_brs_pharmacology_مترجم.png"
  },
  {
    title: "BRS Physiology, 6th Edition",
    author: "Unknown",
    category: "Physiology",
    cover: "assets/covers/pharma_brs_physiology__6th_edition.png"
  },
  {
    title: "BRS Pharmacology Sarah Lerchenfeldt, Gary RosenfeldEnglish",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_brs_pharmacology_sarah_lerchenfeldt__gary_rosenfeldenglish_.png"
  },
  {
    title: "Campbell Reece Biology Seventh Edition Neil Campbell, Jane Reece",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_campbell_reece_biology_seventh_edition_neil_campbell__jane_reece.png"
  },
  {
    title: "Cancer Biomarkers and Targets in Digestive Organs",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_cancer_biomarkers_and_targets_in_digestive_organs.png"
  },
  {
    title: "Cancer Detection and Diagnosis; A Handbook of Emerging",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_cancer_detection_and_diagnosis__a_handbook_of_emerging.png"
  },
  {
    title: "CARDIO",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/pharma_cardio__1_.png"
  },
  {
    title: "Cardiology Board Review",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/pharma_cardiology_board_review.png"
  },
  {
    title: "Cardiology Board Review Ramdas G Pai, Padmini VaradarajanEnglish",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/pharma_cardiology_board_review_ramdas_g_pai__padmini_varadarajanenglish.png"
  },
  {
    title: "Casarett & Doull’s Toxicology The Basic Science of Poisons 9e by",
    author: "Unknown",
    category: "Toxicology",
    cover: "assets/covers/pharma_casarett___doull_s_toxicology_the_basic_science_of_poisons_9e_by.png"
  },
  {
    title: "Case file internal medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_case_file_internal_medicine.png"
  },
  {
    title: "Case Files Internal Medicine (4th 2012) [Toy & Patlan]",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_case_files_internal_medicine__4th_2012___toy___patlan_.png"
  },
  {
    title: "Case Files Internal Medicine 5E Tele@Pharmacy7",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_case_files_internal_medicine_5e_tele_pharmacy7.png"
  },
  {
    title: "Cases in Clinical Medicine",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_cases_in_clinical_medicine.png"
  },
  {
    title: "Casos Clinicos 41 SEMI FINAL",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_casos_clinicos_41_semi_final_1_.png"
  },
  {
    title: "cell biology",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_cell_biology.png"
  },
  {
    title: "Check Your English Vocabulary for Medicine (Rawdon Wyatt)",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_check_your_english_vocabulary_for_medicine__rawdon_wyatt_.png"
  },
  {
    title: "chemistry and pharmacology drug",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_chemistry_and_pharmacology_drug.png"
  },
  {
    title: "Clinica Medica Vol 4",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_clinica_medica_vol_4.png"
  },
  {
    title: "Clinica Médica Vol 1",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_clinica_me_dica_vol_1.png"
  },
  {
    title: "CLINICAL BIOCHEMISTRY CONCEPTS AND TECHNIQUES",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_clinical_biochemistry_concepts_and_techniques.png"
  },
  {
    title: "Clinical Chemistry By David White",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_clinical_chemistry_by_david_white.png"
  },
  {
    title: "Clinical Laboratory Chemistry 2e By Robert Sunheimer",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_clinical_laboratory_chemistry_2e_by_robert_sunheimer.png"
  },
  {
    title: "Clinical laboratory management 3rd 2024",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_clinical_laboratory_management_3rd_2024.png"
  },
  {
    title: "Clinical Pain Management",
    author: "Cancer Pain",
    category: "General Medicine",
    cover: "assets/covers/pharma_clinical_pain_management_-_cancer_pain.png"
  },
  {
    title: "clinical pharmacoknitics",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_clinical_pharmacoknitics.png"
  },
  {
    title: "Clinical Pharmacology (12th Ed)",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_clinical_pharmacology__12th_ed_.png"
  },
  {
    title: "Clinical Pharmacology, 11th Ed. 2012- Dr.Alshareifi",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_clinical_pharmacology__11th_ed__2012-_dr_alshareifi.png"
  },
  {
    title: "CLINICAL PHARMACOLOGY-Susan M.Ford",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_clinical_pharmacology-susan_m_ford.png"
  },
  {
    title: "Clinical Skills Examinations (MedStudentNotes)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_clinical_skills_examinations__medstudentnotes_.png"
  },
  {
    title: "Clinical Chemistry 9th Edition 2021",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_clinical_chemistry_9th_edition_2021_.png"
  },
  {
    title: "Clínica Médica Vol 2",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_cli_nica_me_dica_vol_2.png"
  },
  {
    title: "Clínica Médica Vol 3",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_cli_nica_me_dica_vol_3.png"
  },
  {
    title: "Clínica Médica Vol 5",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_cli_nica_me_dica_vol_5.png"
  },
  {
    title: "CMDT 2020",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_cmdt_2020__1_.png"
  },
  {
    title: "CMDT 2020",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_cmdt_2020.png"
  },
  {
    title: "CMDT 2023",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_cmdt_2023.png"
  },
  {
    title: "Cognitive Neuroscience, 5th ed The Biology of the Mind Michael S",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/pharma_cognitive_neuroscience__5th_ed_the_biology_of_the_mind_michael_s.png"
  },
  {
    title: "Colour Atlas of Anatomical Pathology, Third Edition",
    author: "Unknown",
    category: "Pathology",
    cover: "assets/covers/pharma_colour_atlas_of_anatomical_pathology__third_edition.png"
  },
  {
    title: "Coma and Disorders of Consciousness (Schnakers) 2 ed",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_coma_and_disorders_of_consciousness__schnakers__2_ed__2018_.png"
  },
  {
    title: "Community Pharmacy Symptoms, Diagnosis and Treatment",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_community_pharmacy_symptoms__diagnosis_and_treatment.png"
  },
  {
    title: "Competency Based Pharmacology Practical Exercises 2024",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_competency_based_pharmacology_practical_exercises_2024__1_.png"
  },
  {
    title: "Competency Based Pharmacology Practical Exercises 2024",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_competency_based_pharmacology_practical_exercises_2024.png"
  },
  {
    title: "Competency Based Pharmacology Practical Exercises Rakesh Chandra",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_competency_based_pharmacology_practical_exercises_rakesh_chandra.png"
  },
  {
    title: "Concise notes in oncology for MRCP and MRCS",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_concise_notes_in_oncology_for_mrcp_and_mrcs.png"
  },
  {
    title: "CONCISE TEXTBOOK OF MEDICINE",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_concise_textbook_of_medicine.png"
  },
  {
    title: "Cosmetics dermatology products and procedure second edition",
    author: "Unknown",
    category: "Dermatology",
    cover: "assets/covers/pharma_cosmetics_dermatology_products_and_procedure_second_edition.png"
  },
  {
    title: "CRC Press -Multi - detector CTimaging 1+2 vol in one book",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/pharma_crc_press_-multi_-_detector_ctimaging_1_2_vol_in_one_book.png"
  },
  {
    title: "Critical Care Medicine MCQs Practice Book, 2e",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/pharma_critical_care_medicine_mcqs_practice_book__2e.png"
  },
  {
    title: "current diagnosis treatment in family-medicine",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_current_diagnosis_treatment_in_family-medicine.png"
  },
  {
    title: "CURRENT Medical Diagnosis and Treatment 2022",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_current_medical_diagnosis_and_treatment_2022.png"
  },
  {
    title: "CURRENT Occupational and Environmental",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_current_occupational_and_environmental.png"
  },
  {
    title: "Dale's Pharmacology Condensed",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_dale_s_pharmacology_condensed__2021_.png"
  },
  {
    title: "DAMS-HARRISON's 19th Based NoteBook",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_dams-harrison_s_19th_based_notebook.png"
  },
  {
    title: "Davidson's Self-Assessment in Medicine 2018",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_davidson_s_self-assessment_in_medicine_2018__1_.png"
  },
  {
    title: "davidsons ed 23",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_davidsons_ed_23_1_.png"
  },
  {
    title: "Davidsons Principles and Practice of Medicine 24th edition",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_davidsons_principles_and_practice_of_medicine_24th_edition.png"
  },
  {
    title: "Dental Radiography- Principles and Techniques, 4e",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_dental_radiography-_principles_and_techniques__4e.png"
  },
  {
    title: "Diabetes and Hypertension Evaluation and Management 2012",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_diabetes_and_hypertension_evaluation_and_management_2012.png"
  },
  {
    title: "diabetes care",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_diabetes_care.png"
  },
  {
    title: "Diabetes complications",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_diabetes_complications.png"
  },
  {
    title: "Diagnosis and Treatment in Internal Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_diagnosis_and_treatment_in_internal_medicine.png"
  },
  {
    title: "DRUG DOSES",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_drug_doses.png"
  },
  {
    title: "Drug therapy for type2 diabetes",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_drug_therapy_for_type2_diabetes.png"
  },
  {
    title: "Drugs in use case studies",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_drugs_in_use_case_studies.png"
  },
  {
    title: "Echocardiography Board Review 600 Multiple Choice Questions",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/pharma_echocardiography_board_review_600_multiple_choice_questions_.png"
  },
  {
    title: "EKG Standarisasi Interpretasi",
    author: "Gagah",
    category: "General Medicine",
    cover: "assets/covers/pharma_ekg_standarisasi_interpretasi_-_gagah.png"
  },
  {
    title: "EMQs and MCQs for Medical Finals",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_emqs_and_mcqs_for_medical_finals.png"
  },
  {
    title: "EMQs for the MRCS. Part A (Sri G. Thrumurthy,",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_emqs_for_the_mrcs__part_a__sri_g__thrumurthy_.png"
  },
  {
    title: "Encyclopedia of Endocrine Diseases 2nd ed",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_encyclopedia_of_endocrine_diseases_2nd_ed.png"
  },
  {
    title: "ENDO",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_endo.png"
  },
  {
    title: "Endocrine secrets by McDermott,",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_endocrine_secrets_by_mcdermott_.png"
  },
  {
    title: "ENT MCQs for Medical Students with Explanatory Answers",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_ent_mcqs_for_medical_students_with_explanatory_answers.png"
  },
  {
    title: "ESAP 2019 Endocrine Self-Assessment Program",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_esap_2019_endocrine_self-assessment_program.png"
  },
  {
    title: "Essential Endocrinology and Diabetes 2012",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_essential_endocrinology_and_diabetes_2012.png"
  },
  {
    title: "Essentials of Clinical Radiation Oncology",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_essentials_of_clinical_radiation_oncology.png"
  },
  {
    title: "Essentials of Inorganic Chemistry For Students of Pharmacy",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_essentials_of_inorganic_chemistry_for_students_of_pharmacy.png"
  },
  {
    title: "Essentials of Internal Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_essentials_of_internal_medicine__2014_.png"
  },
  {
    title: "essentials of Pathophsiology",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_essentials_of_pathophsiology.png"
  },
  {
    title: "ESSENTIALS OF PHARMACY PRACTICE 2023",
    author: "Unknown",
    category: "Pharmacy Practice",
    cover: "assets/covers/pharma_essentials_of_pharmacy_practice_2023.png"
  },
  {
    title: "ESSENTIALS OF PHYSICAL PHARMACY-D. V. Derle",
    author: "Unknown",
    category: "Pharmacy Practice",
    cover: "assets/covers/pharma_essentials_of_physical_pharmacy-d__v__derle.png"
  },
  {
    title: "Essentials of Practical Microbiology",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_essentials_of_practical_microbiology.png"
  },
  {
    title: "Essentials of Medical Biochemistry With Clinical Cases 2e By Bhagavan",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_essentials_of_medical_biochemistry_with_clinical_cases_2e_by_bhagavan.png"
  },
  {
    title: "Exam Prep Manual Boloor and Nayak medicine",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_exam_prep_manual_boloor_and_nayak_medicine.png"
  },
  {
    title: "Exam Preparatory Manual for Undergraduates Medicine",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_exam_preparatory_manual_for_undergraduates_medicine.png"
  },
  {
    title: "Exam preparatory Manual for Undergraduates Surgery-",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_exam_preparatory_manual_for_undergraduates_surgery-_2018_.png"
  },
  {
    title: "EXAM PREPARATORY MANUAL FOR UNDERGRADUATES medicine Archith Boloor",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_exam_preparatory_manual_for_undergraduates_medicine_archith_boloor.png"
  },
  {
    title: "Exercise and Sport in Diabetes 2005",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_exercise_and_sport_in_diabetes_2005.png"
  },
  {
    title: "FCCS 5th ed",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_fccs_5th_ed.png"
  },
  {
    title: "Ferri's CLINICAL ADVISOR 2021",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_ferri_s_clinical_advisor_2021.png"
  },
  {
    title: "FERRI'S BEST TEST A Practical Guide to Clinical Laboratory Medicine",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_ferri_s_best_test_a_practical_guide_to_clinical_laboratory_medicine.png"
  },
  {
    title: "First Aid for the USMLE Step 2 CK by 2023",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_first_aid_for_the_usmle_step_2_ck_by_2023.png"
  },
  {
    title: "Fischers Mastery of Surgery- Aneurysmal Disease",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_fischers_mastery_of_surgery-_aneurysmal_disease.png"
  },
  {
    title: "Food Science",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_food_science.png"
  },
  {
    title: "Fundamentals of Anatomy and physiology",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_fundamentals_of_anatomy_and_physiology__1_.png"
  },
  {
    title: "Fundamentals of Anatomy and Physiology",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_fundamentals_of_anatomy_and_physiology.png"
  },
  {
    title: "Fundamentals of Organic Chemistry 7e",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_fundamentals_of_organic_chemistry_7e.png"
  },
  {
    title: "Further MCQs in Pharmacy Practice",
    author: "Unknown",
    category: "Pharmacy Practice",
    cover: "assets/covers/pharma_further_mcqs_in_pharmacy_practice.png"
  },
  {
    title: "gastrointestinal (optimized)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_gastrointestinal__optimized_.png"
  },
  {
    title: "Gastrointestinal Malignancies A Practical Guide on Treatment Techniques",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_gastrointestinal_malignancies_a_practical_guide_on_treatment_techniques.png"
  },
  {
    title: "Gastroparesis Pathophysiology Presentation",
    author: "Unknown",
    category: "Physiology",
    cover: "assets/covers/pharma_gastroparesis_pathophysiology_presentation.png"
  },
  {
    title: "GENERAL 2",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_general_2.png"
  },
  {
    title: "General Internal Medicine Subspecilaty Consult Third Ed.",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_general_internal_medicine_subspecilaty_consult_third_ed_.png"
  },
  {
    title: "General medicine (optimized)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_general_medicine__optimized_.png"
  },
  {
    title: "GENOSYS",
    author: "Exam Preparatory Manual for Undergraduates",
    category: "General Medicine",
    cover: "assets/covers/pharma_genosys_-_exam_preparatory_manual_for_undergraduates.png"
  },
  {
    title: "Gillian M Newstead Breast MRI Interpretation Text and Case Analysis",
    author: "Unknown",
    category: "Radiology",
    cover: "assets/covers/pharma_gillian_m_newstead_breast_mri_interpretation_text_and_case_analysis.png"
  },
  {
    title: "GOLDFRANK’S TOXICOLOGIC EMERGENCIES",
    author: "Unknown",
    category: "Toxicology",
    cover: "assets/covers/pharma_goldfrank_s_toxicologic_emergencies.png"
  },
  {
    title: "Goldman-Cecil Medicine 2-Volume Set 27th Edition 2024",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_goldman-cecil_medicine_2-volume_set_27th_edition_2024.png"
  },
  {
    title: "Gray's Anatomy بالعربية",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_gray_s_anatomy_بالعربية.png"
  },
  {
    title: "Gray’s Anatomy for Students 4th",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_gray_s_anatomy_for_students_4th.png"
  },
  {
    title: "Gum Arabic and Breast Cancer Biology Biotechnology",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_gum_arabic_and_breast_cancer_biology_biotechnology.png"
  },
  {
    title: "Guyton and Hall Textbook of Medical Physiology",
    author: "Unknown",
    category: "Physiology",
    cover: "assets/covers/pharma_guyton_and_hall_textbook_of_medical_physiology__1_.png"
  },
  {
    title: "Guyton and Hall Textbook of Medical Physiology",
    author: "Unknown",
    category: "Physiology",
    cover: "assets/covers/pharma_guyton_and_hall_textbook_of_medical_physiology.png"
  },
  {
    title: "Gynecology By Ten Teachers 21st Edition 2024",
    author: "Unknown",
    category: "Obstetrics & Gynecology",
    cover: "assets/covers/pharma_gynecology_by_ten_teachers_21st_edition_2024.png"
  },
  {
    title: "Handbook of Biochemistry for Paramedical Students 2025",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_handbook_of_biochemistry_for_paramedical_students_2025.png"
  },
  {
    title: "Handbook of Modern Pharmaceutical Analysis-",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_handbook_of_modern_pharmaceutical_analysis-_2011_.png"
  },
  {
    title: "handbook of vitamens",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_handbook_of_vitamens.png"
  },
  {
    title: "Handbook of Vitamins 5th Edition",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_handbook_of_vitamins_5th_edition.png"
  },
  {
    title: "Handbook of Biochemistry for Paramedical Students Anithasri Anbalagan",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_handbook_of_biochemistry_for_paramedical_students_anithasri_anbalagan.png"
  },
  {
    title: "Handbook of drugs in intensive care an A Z guide 6th Edition, 2019",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_handbook_of_drugs_in_intensive_care_an_a_z_guide_6th_edition__2019.png"
  },
  {
    title: "Harborview Illustrated Tips and Tricks in Fracture Surgery",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_harborview_illustrated_tips_and_tricks_in_fracture_surgery.png"
  },
  {
    title: "HARPER'S ILLUSTRATED BIOCHEMISTRY 30th",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_harper_s_illustrated_biochemistry_30th.png"
  },
  {
    title: "Harrison 2025 22nd Edition",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_harrison_2025___22nd_edition.png"
  },
  {
    title: "Harrison's Rheumatology 2nd-Edition",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_harrison_s_rheumatology_2nd-edition.png"
  },
  {
    title: "Harrisons Manual of Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_harrisons_manual_of_medicine.png"
  },
  {
    title: "Harrisons Principles of Internal Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_harrisons_principles_of_internal_medicine.png"
  },
  {
    title: "Harrison’s Principles of Internal Medicine, 21st Edition 2022 Volume",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_harrison_s_principles_of_internal_medicine__21st_edition_2022_volume.png"
  },
  {
    title: "Harrison’s principles of internal medicine, self assessment and",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_harrison_s_principles_of_internal_medicine__self_assessment_and.png"
  },
  {
    title: "Harrys Cosmetiology-8th",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_harrys_cosmetiology-8th.png"
  },
  {
    title: "Hellman, and Rosenbergs Cancer Principles Practice of Oncology",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_hellman__and_rosenbergs_cancer_principles_practice_of_oncology.png"
  },
  {
    title: "hema",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_hema.png"
  },
  {
    title: "Hoffbrand's Postgraduate Haematology",
    author: "Unknown",
    category: "Hematology",
    cover: "assets/covers/pharma_hoffbrand_s_postgraduate_haematology.png"
  },
  {
    title: "HPLC Methods for Pharmaceutical Analysis",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_hplc_methods_for_pharmaceutical_analysis.png"
  },
  {
    title: "Human Anatomy DK (Alice Roberts)",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_human_anatomy_dk__alice_roberts_.png"
  },
  {
    title: "Human Body (Eyewitness Workbooks) (Claire Watts)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_human_body__eyewitness_workbooks___claire_watts_.png"
  },
  {
    title: "Human Physiology (Stuart Ira Fox)",
    author: "Unknown",
    category: "Physiology",
    cover: "assets/covers/pharma_human_physiology__stuart_ira_fox_.png"
  },
  {
    title: "Human Physiology From Cells to Systems",
    author: "Unknown",
    category: "Physiology",
    cover: "assets/covers/pharma_human_physiology_from_cells_to_systems.png"
  },
  {
    title: "ID",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_id.png"
  },
  {
    title: "IDF Diabetes Atlas 2015",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_idf_diabetes_atlas_2015.png"
  },
  {
    title: "Illustrated Textbook of Paediatrics",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pharma_illustrated_textbook_of_paediatrics.png"
  },
  {
    title: "Illustrated Medical Dictionary Essential A Z Quick Reference to",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_illustrated_medical_dictionary_essential_a_z_quick_reference_to.png"
  },
  {
    title: "ILMA Netter's Infectious Diseases-Elsevier",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_ilma_netter_s_infectious_diseases-elsevier__2021_.png"
  },
  {
    title: "ILMA TN 2022",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_ilma_tn_2022.png"
  },
  {
    title: "Important Clinical Points in Paediatrics",
    author: "Unknown",
    category: "Pediatrics",
    cover: "assets/covers/pharma_important_clinical_points_in_paediatrics.png"
  },
  {
    title: "Indian Pharmacopoeia 2018 The Indian Pharmacopoeia CommissionEnglish",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_indian_pharmacopoeia_2018_the_indian_pharmacopoeia_commissionenglish.png"
  },
  {
    title: "Insulin therapy 2016",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_insulin_therapy_2016.png"
  },
  {
    title: "Integration of Metabolism, Energetics, and Signal",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_integration_of_metabolism__energetics__and_signal.png"
  },
  {
    title: "Intensive care medicine MCQs multiple choice questions",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_intensive_care_medicine_mcqs___multiple_choice_questions.png"
  },
  {
    title: "Internal Medicine Essentials for Clerkship Students 2",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_internal_medicine_essentials_for_clerkship_students_2.png"
  },
  {
    title: "Internal Medicine Flashcards 2015",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_internal_medicine_flashcards_2015.png"
  },
  {
    title: "Internal-Medicine-Evidence-",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_internal-medicine-evidence-.png"
  },
  {
    title: "Internal Medicine Essentials for Clership Students",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_internal_medicine_essentials_for_clership_students.png"
  },
  {
    title: "Introduction to Organic Chemistry",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_introduction_to_organic_chemistry.png"
  },
  {
    title: "IraqDrugGuide24-25",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_iraqdrugguide24-25.png"
  },
  {
    title: "Jawetz Melnick & Adelbergs Medical Microbiology, 28e",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_jawetz_melnick___adelbergs_medical_microbiology__28e.png"
  },
  {
    title: "John R Hampton The ECG Made Easy",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/pharma_john_r_hampton_the_ecg_made_easy.png"
  },
  {
    title: "Joslin's Diabetes Mellitus 14th Ed",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_joslin_s_diabetes_mellitus_14th_ed.png"
  },
  {
    title: "Kanski's Clinical Ophthalmology A Systematic Approach 10th",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_kanski_s_clinical_ophthalmology_a_systematic_approach_10th_.png"
  },
  {
    title: "Katzung Trevors Pharmacology Examination and Board Review",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_katzung_trevors_pharmacology_examination_and_board_review.png"
  },
  {
    title: "Kumar Clarks Cases in Clinical Medicine, 5th Edition",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_kumar_clarks_cases_in_clinical_medicine__5th_edition.png"
  },
  {
    title: "Kumar & Clark's Cases in Clinical Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_kumar___clark_s_cases_in_clinical_medicine.png"
  },
  {
    title: "Kumar & Clark's Clinical Medicine 7th Edition 2011",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_kumar___clark_s_clinical_medicine_7th_edition_2011.png"
  },
  {
    title: "KUMAR & CLARK'S Clinical Medicine 9th Ed",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_kumar___clark_s_clinical_medicine_9th_ed__1_.png"
  },
  {
    title: "Kumar & Clark's Clinical Medicine 9th Ed",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_kumar___clark_s_clinical_medicine_9th_ed.png"
  },
  {
    title: "Kumar & Clark's Pass Finals 3rd Edition",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_kumar___clark_s_pass_finals_3rd_edition.png"
  },
  {
    title: "Kumar & Clark's Medical Management",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_kumar___clark_s_medical_management.png"
  },
  {
    title: "Lab Manual and Workbook",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_lab_manual_and_workbook.png"
  },
  {
    title: "Laboratory Procedures for Pharmacy Technicians, Spiral bound Version",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_laboratory_procedures_for_pharmacy_technicians__spiral_bound_version.png"
  },
  {
    title: "Lab Manual Selected Experiments of Pharmaceutical Analysis, Anees",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_lab_manual_selected_experiments_of_pharmaceutical_analysis__anees.png"
  },
  {
    title: "Lehninger Principles of Biochemistry 8ed 2021",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_lehninger_principles_of_biochemistry_8ed_2021.png"
  },
  {
    title: "Lippincott Pharmacology mcq",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_lippincott_pharmacology_mcq.png"
  },
  {
    title: "lippincott عربي",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_lippincott_عربي.png"
  },
  {
    title: "LIPPINCOTT'S PHARMACOLOGY-4th Edition",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_lippincott_s_pharmacology-4th_edition.png"
  },
  {
    title: "Lippincott Illustrated Reviews Pharmacology South Asia Karen Whalen",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_lippincott_illustrated_reviews_pharmacology_south_asia_karen_whalen.png"
  },
  {
    title: "M-K-S-A-P 18 RHEUM TABLES",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_m-k-s-a-p_18_rheum_tables.png"
  },
  {
    title: "Manual Washington de medicina interna hospitalaria",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_manual_washington_de_medicina_interna_hospitalaria.png"
  },
  {
    title: "Mass Spectrometry in Drug Metabolism and Disposition Basic",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_mass_spectrometry_in_drug_metabolism_and_disposition_basic_.png"
  },
  {
    title: "Master the Boards USMLE 6th ed",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_master_the_boards_usmle_6th_ed.png"
  },
  {
    title: "Master The Boards USMLE Step 2",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_master_the_boards_usmle_step_2__2023_.png"
  },
  {
    title: "Mayo Clinic Internal Medicine Board Review 11th Edition",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mayo_clinic_internal_medicine_board_review_11th_edition.png"
  },
  {
    title: "Mayo Clinic Internal Medicine Board Review Eleventh Ed",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mayo_clinic_internal_medicine_board_review_eleventh_ed.png"
  },
  {
    title: "Mayo Clinic Internal Medicine Board Review Tenth Ed.",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mayo_clinic_internal_medicine_board_review_tenth_ed_.png"
  },
  {
    title: "Mayo Clinic Internal Medicine Board Review Tenth Ed",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mayo_clinic_internal_medicine_board_review_tenth_ed.png"
  },
  {
    title: "Mayo Clinic Internal Medicine Concise Textbook",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mayo_clinic_internal_medicine_concise_textbook.png"
  },
  {
    title: "Mayo Clinic Internal Medicine Review",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mayo_clinic_internal_medicine_review.png"
  },
  {
    title: "Mayo Clinic Internal Medicine Board",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mayo_clinic_internal_medicine_board.png"
  },
  {
    title: "Mayo Clinic Internal Medicine Board Review 12th Questions Only",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mayo_clinic_internal_medicine_board_review_12th_questions_only.png"
  },
  {
    title: "MCQ in Clinical pharmacy",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_mcq_in_clinical_pharmacy.png"
  },
  {
    title: "MCQ is microbiology",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_mcq_is_microbiology.png"
  },
  {
    title: "MCQs in Anatomy",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_mcqs_in_anatomy.png"
  },
  {
    title: "MCQS in Anatomy A Self-Testing Supplement to Essential",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_mcqs_in_anatomy__a_self-testing_supplement_to_essential.png"
  },
  {
    title: "MCQs in Pharmacology",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_mcqs_in_pharmacology.png"
  },
  {
    title: "Medical Management of Diabetes a(BookSee.org)",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_medical_management_of_diabetes_a_booksee_org_.png"
  },
  {
    title: "Medicinal chemistry",
    author: "Ashutosh Kar",
    category: "Pharmacology",
    cover: "assets/covers/pharma_medicinal_chemistry_by_ashutosh_kar.png"
  },
  {
    title: "Medicinal Inorganic Chemistry Metal Based Drugs and Metal Goswami",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_medicinal_inorganic_chemistry_metal_based_drugs_and_metal_goswami.png"
  },
  {
    title: "Medicine exam prep manual Archita Boloor Ramdas nayak",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_medicine_exam_prep_manual_archita_boloor_ramdas_nayak.png"
  },
  {
    title: "Medicine is fun part 1 - 2020",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_medicine_is_fun_part_1_-_2020.png"
  },
  {
    title: "Medicine is fun part 2 - 2020",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_medicine_is_fun_part_2_-_2020.png"
  },
  {
    title: "Medicine is fun part 3 - 2020",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_medicine_is_fun_part_3_-_2020.png"
  },
  {
    title: "Medicine is fun part 4 - 2020",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_medicine_is_fun_part_4_-_2020.png"
  },
  {
    title: "Medicine is fun part 5 - 2020",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_medicine_is_fun_part_5_-_2020.png"
  },
  {
    title: "MedStucty INTERNAL MEDICINE Book 1",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstucty_internal_medicine_book_1.png"
  },
  {
    title: "MedStucty INTERNAL MEDICINE Book 2",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstucty_internal_medicine_book_2.png"
  },
  {
    title: "MedStucty INTERNAL MEDICINE Book 3",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstucty_internal_medicine_book_3.png"
  },
  {
    title: "MedStucty INTERNAL MEDICINE Book 4",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstucty_internal_medicine_book_4.png"
  },
  {
    title: "MedStucty INTERNAL MEDICINE Book 5",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstucty_internal_medicine_book_5.png"
  },
  {
    title: "medstudy 1",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstudy_1.png"
  },
  {
    title: "Medstudy 19th Edition",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstudy_19th_edition.png"
  },
  {
    title: "medstudy 2",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstudy_2.png"
  },
  {
    title: "medstudy 3",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstudy_3.png"
  },
  {
    title: "medstudy 4",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstudy_4.png"
  },
  {
    title: "medstudy 5",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_medstudy_5.png"
  },
  {
    title: "Microbiology with diseases by body system",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_microbiology_with_diseases_by_body_system.png"
  },
  {
    title: "Microbiology basic and clinical principles",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_microbiology_basic_and_clinical_principles.png"
  },
  {
    title: "microbiology question & answers",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_microbiology_question___answers.png"
  },
  {
    title: "Microbiology With Diseases",
    author: "Body System Modified Mastering Microbiology",
    category: "Microbiology",
    cover: "assets/covers/pharma_microbiology_with_diseases_by_body_system_modified_mastering_microbiology.png"
  },
  {
    title: "Mind Maps in Biochemistry-",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_mind_maps_in_biochemistry-__2021_.png"
  },
  {
    title: "Mind Maps for Medical Students Clinical",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_mind_maps_for_medical_students_clinical.png"
  },
  {
    title: "MKSAP 18 complete",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_18_complete.png"
  },
  {
    title: "MKSAP 19 ALL",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_19_all.png"
  },
  {
    title: "MKSAP 19 Endocrinology and Metabolism (ACP)",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_mksap_19_endocrinology_and_metabolism__acp_.png"
  },
  {
    title: "MKSAP 19 General",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_19_general.png"
  },
  {
    title: "MKSAP 19 NEPHROLOGY",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_19_nephrology.png"
  },
  {
    title: "MKSAP 19 NEUROLOGY",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_19_neurology.png"
  },
  {
    title: "MKSAP Board Basic 4 (ACP)",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_board_basic_4__acp_.png"
  },
  {
    title: "MKSAP for Students 5",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_for_students_5.png"
  },
  {
    title: "MKSAP18 Rheumatology",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap18_rheumatology.png"
  },
  {
    title: "MKSAP18-Gastroenterology and Hepatology",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap18-gastroenterology_and_hepatology.png"
  },
  {
    title: "MKSAP19 GASTROENTEROLOGY",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap19_gastroenterology.png"
  },
  {
    title: "MKSAP19 INFECTION",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap19_infection.png"
  },
  {
    title: "MKSAP 19 medical knowledge self assessment program General",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_19_medical_knowledge_self_assessment_program_general_.png"
  },
  {
    title: "MKSAP R 18 Neurology December 30",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_mksap_r_18_neurology_december_30.png"
  },
  {
    title: "Modulation of Sleep by Obesity, Diabetes, Age, and Diet 2015",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_modulation_of_sleep_by_obesity__diabetes__age__and_diet_2015.png"
  },
  {
    title: "molecular biology of the cell-seventh-edition-2022",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_molecular_biology_of_the_cell-seventh-edition-2022.png"
  },
  {
    title: "Molecular Cloning A Laboratory Manual Joseph Sambrook, David W Russel",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_molecular_cloning_a_laboratory_manual_joseph_sambrook__david_w_russel.png"
  },
  {
    title: "Mosby's Pharmacy Technician Exam Review 4th Edition",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_mosby_s_pharmacy_technician_exam_review_4th_edition.png"
  },
  {
    title: "Mosby’s Pharmacology Memory NoteCards",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_mosby_s_pharmacology_memory_notecards.png"
  },
  {
    title: "MRI Brain Atlas and Text (M.D. Balachandran, G.)",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/pharma_mri_brain_atlas_and_text__m_d__balachandran__g__.png"
  },
  {
    title: "Multiple Choice Questions and Answers in Surgery",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_multiple_choice_questions_and_answers_in_surgery.png"
  },
  {
    title: "Multiple Choice Questions and Viva Voce in Human Embryology First",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_multiple_choice_questions_and_viva_voce_in_human_embryology_first.png"
  },
  {
    title: "Multiple Choice Questions and Viva Voce in Human Histology Ujwala",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_multiple_choice_questions_and_viva_voce_in_human_histology_ujwala.png"
  },
  {
    title: "nephrology (optimized)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_nephrology__optimized_.png"
  },
  {
    title: "Netter Atlas of Human Anatomy Classic Regional Approach",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_netter_atlas_of_human_anatomy__classic_regional_approach.png"
  },
  {
    title: "Netter’s Anatomy Coloring Book (John T. Hansen)",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_netter_s_anatomy_coloring_book__john_t__hansen_.png"
  },
  {
    title: "Netter’s Introduction to Clinical Procedures",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_netter_s_introduction_to_clinical_procedures.png"
  },
  {
    title: "neurology (optimized)",
    author: "Unknown",
    category: "Neurology",
    cover: "assets/covers/pharma_neurology__optimized_.png"
  },
  {
    title: "Non-Prescription Medicines, Fourth Edition",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_non-prescription_medicines__fourth_edition__2010_.png"
  },
  {
    title: "Nutrition and Type 2 Diabetes Etiology and Prevention 2014",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_nutrition_and_type_2_diabetes__etiology_and_prevention_2014.png"
  },
  {
    title: "Nutritional Strategies for the Diabetic Prediabetic Patient Nutrition and Disease Prevention 2006",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_nutritional_strategies_for_the_diabetic_prediabetic_patient_nutrition_and_diseas.png"
  },
  {
    title: "oncology (optimized)",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_oncology__optimized_.png"
  },
  {
    title: "On Rounds 1000 Internal Medicine",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_on_rounds_1000_internal_medicine.png"
  },
  {
    title: "Organic Pharmaceutical and Medicinal Chemistry Vol 1",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_organic_pharmaceutical_and_medicinal_chemistry_vol_1.png"
  },
  {
    title: "Organic Pharmaceutical and Medicinal Chemistry Vol-2",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_organic_pharmaceutical_and_medicinal_chemistry_vol-2.png"
  },
  {
    title: "Organic Pharmaceutical and Medicinal Chemistry Vol-3",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_organic_pharmaceutical_and_medicinal_chemistry_vol-3.png"
  },
  {
    title: "Organic Chemistry in Medicine Michov B 2025 Cambridge Scholars Publishing",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_organic_chemistry_in_medicine_michov_b_2025_cambridge_scholars_publishing.png"
  },
  {
    title: "OSCEs for the MRCS Part B A Bailey Love Revision Guide",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_osces_for_the_mrcs_part_b_a_bailey_love_revision_guide.png"
  },
  {
    title: "OSCE and VIVA VOCE in Obstetrics and Gynaecology Calvin Chama null",
    author: "Unknown",
    category: "Obstetrics & Gynecology",
    cover: "assets/covers/pharma_osce_and_viva_voce_in_obstetrics_and_gynaecology_calvin_chama_null.png"
  },
  {
    title: "Oxford Handbook of Clinical Medicine 10th ed 2017",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_oxford_handbook_of_clinical_medicine_10th_ed_2017.png"
  },
  {
    title: "Oxford Handbook of Clinical Medicine 11th Ed. 2024",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_oxford_handbook_of_clinical_medicine_11th_ed__2024.png"
  },
  {
    title: "Oxford Handbook of Clinical Surgery 5e",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_oxford_handbook_of_clinical_surgery_5e.png"
  },
  {
    title: "Oxford Handbook of Endocrinology and Diabetes 4e",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_oxford_handbook_of_endocrinology_and_diabetes_4e.png"
  },
  {
    title: "Oxford Textbook of Medicine 3 vols.",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_oxford_textbook_of_medicine_3_vols_.png"
  },
  {
    title: "Oxford Handbook of Infectious Diseases and Microbiology 3ed 2025",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_oxford_handbook_of_infectious_diseases_and_microbiology_3ed_2025.png"
  },
  {
    title: "Palkos medical",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_palkos_medical.png"
  },
  {
    title: "Pharma Guide 2018",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pharma_guide_2018.png"
  },
  {
    title: "Pharma Guide Mind Maps By Dhshan Hassan",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pharma_guide_mind_maps_by_dhshan_hassan.png"
  },
  {
    title: "pharma guide",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pharma_guide.png"
  },
  {
    title: "pharmaceutical chemistry",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmaceutical_chemistry.png"
  },
  {
    title: "Pharmaceutical microbiology",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmaceutical_microbiology.png"
  },
  {
    title: "Pharmaceutical Organic Chemistry (Shyam Singh)",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmaceutical_organic_chemistry__shyam_singh_.png"
  },
  {
    title: "Pharmaceutical Analysis A Textbook for Pharmacy Students and Pharmaceutical",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmaceutical_analysis_a_textbook_for_pharmacy_students_and_pharmaceutical.png"
  },
  {
    title: "Pharmaceutical Chemistry Drugs and Their Biological Targets 2e",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmaceutical_chemistry_drugs_and_their_biological_targets_2e_.png"
  },
  {
    title: "Pharmacognosy",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pharmacognosy.png"
  },
  {
    title: "Pharmacognosy",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pharmacognosy.png"
  },
  {
    title: "Pharmacology (Brenner, George M.Stevens, Craig W)",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology__brenner__george_m_stevens__craig_w_.png"
  },
  {
    title: "Pharmacology Lippincott 7th e",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology_lippincott_7th_e.png"
  },
  {
    title: "Pharmacology MCQ Ain Shams",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology_mcq_ain_shams.png"
  },
  {
    title: "Pharmacology PreTest Self-Assessment and Review",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology_pretest_self-assessment_and_review.png"
  },
  {
    title: "Pharmacology Prep Manual for Undergraduates",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology__prep_manual_for_undergraduates.png"
  },
  {
    title: "Pharmacology Essentials for Technicians Pharmacy Danielson, Jennifer",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology_essentials_for_technicians_pharmacy_danielson__jennifer.png"
  },
  {
    title: "Pharmacology Mnemonics for the Family Nurse Practitioner",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology_mnemonics_for_the_family_nurse_practitioner.png"
  },
  {
    title: "Pharmacology PreTest Self Assessment and Review, 14th Marshal Shlafer",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology_pretest_self_assessment_and_review__14th_marshal_shlafer.png"
  },
  {
    title: "Pharmacology Short Notes Essential Guide for Doctors and Dr Rish",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_pharmacology_short_notes_essential_guide_for_doctors_and_dr_rish.png"
  },
  {
    title: "Pocket Medicine 7th Edition 2020",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pocket_medicine_7th_edition_2020.png"
  },
  {
    title: "Pocket Primary Care",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pocket_primary_care.png"
  },
  {
    title: "Poket medicine 7th edition",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_poket_medicine_7th_edition.png"
  },
  {
    title: "Practical Biochemistry",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_practical_biochemistry.png"
  },
  {
    title: "Practical Decision Making in Health Care Ethics 3rd Ed",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_practical_decision_making_in_health_care_ethics_3rd_ed.png"
  },
  {
    title: "Practical Oncologic Molecular Pathology",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_practical_oncologic_molecular_pathology.png"
  },
  {
    title: "Preparatory Manual of Pathology for Undergraduate Students",
    author: "Unknown",
    category: "Pathology",
    cover: "assets/covers/pharma_preparatory_manual_of_pathology_for_undergraduate_students.png"
  },
  {
    title: "Pretest MEDICINE",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pretest_medicine.png"
  },
  {
    title: "Pretest step Physical Dignosis 4th Ed",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pretest_step_physical_dignosis_4th_ed.png"
  },
  {
    title: "Preventing Medical Emergencies-Use of the Medical History",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_preventing_medical_emergencies-use_of_the_medical_history__1_.png"
  },
  {
    title: "Preventing Medical Emergencies-Use of the Medical History",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_preventing_medical_emergencies-use_of_the_medical_history.png"
  },
  {
    title: "PULMO",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_pulmo.png"
  },
  {
    title: "Remington The Science and Practice of Pharmacy",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_remington_the_science_and_practice_of_pharmacy.png"
  },
  {
    title: "Respiratory Pharmacology Practice Questions 35 Questions, Answers",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_respiratory_pharmacology_practice_questions_35_questions__answers.png"
  },
  {
    title: "Review of Pharmacology Dr Gobind Rai Garg, Dr Sparsh GuptaEnglish",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_review_of_pharmacology_dr_gobind_rai_garg__dr_sparsh_guptaenglish.png"
  },
  {
    title: "RHEUMA",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_rheuma.png"
  },
  {
    title: "Rheumatology Secrets 3rd Edition 2015",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_rheumatology_secrets_3rd_edition_2015.png"
  },
  {
    title: "ROBBINS & KUMAR BASIC PATHOLOGY",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_robbins___kumar_basic_pathology.png"
  },
  {
    title: "Rockwood and Greens fractures in adults 10th ed 2025",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_rockwood_and_greens_fractures_in_adults_10th_ed_2025.png"
  },
  {
    title: "Roitt’s Essential Immunology Peter J Delves, Seamus J Martin etc",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_roitt_s_essential_immunology_peter_j_delves__seamus_j_martin_etc.png"
  },
  {
    title: "Ryan Sherris Medical Microbiology, Eighth Edition",
    author: "Unknown",
    category: "Microbiology",
    cover: "assets/covers/pharma_ryan_sherris_medical_microbiology__eighth_edition.png"
  },
  {
    title: "Sabiston Textbook of Surgery The Biological Basis of Modern Surgical",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_sabiston_textbook_of_surgery_the_biological_basis_of_modern_surgical.png"
  },
  {
    title: "SBAs and EMQs for the MRCS Part A A Bailey Love Revision Guide etc",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_sbas_and_emqs_for_the_mrcs_part_a_a_bailey_love_revision_guide_etc.png"
  },
  {
    title: "Short Textbook Of Medical Diagnosis And Management",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_short_textbook_of_medical_diagnosis_and_management.png"
  },
  {
    title: "Single Best Answers for Medical Students Basic Science",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_single_best_answers_for_medical_students__basic_science.png"
  },
  {
    title: "Single Best Answers in Surgery, Second Edition",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_single_best_answers_in_surgery__second_edition.png"
  },
  {
    title: "Single best answers MCQs in anaesthesia Vol II, Basic Arumugam Pitchiah;",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_single_best_answers_mcqs_in_anaesthesia_vol_ii__basic_arumugam_pitchiah_.png"
  },
  {
    title: "Snapshots of Hemodynamics",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_snapshots_of_hemodynamics.png"
  },
  {
    title: "SOAP for Internal Medicine 1st Edition",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_soap_for_internal_medicine_1st_edition.png"
  },
  {
    title: "SOAP INTERNAL MEDICINE",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_soap_internal_medicine.png"
  },
  {
    title: "Sobotta General Anatomy and Musculoskeletal System 16th Edition",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_sobotta_general_anatomy_and_musculoskeletal_system_16th_edition_.png"
  },
  {
    title: "Spinal Cord and Spinal Column Tumors Principles and Practice",
    author: "Unknown",
    category: "Oncology",
    cover: "assets/covers/pharma_spinal_cord_and_spinal_column_tumors_principles_and_practice.png"
  },
  {
    title: "SRB’s Manual of Surgery (M Sriram Bhat)",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_srb_s_manual_of_surgery__m_sriram_bhat_.png"
  },
  {
    title: "Statistical methods for food science introductory procedures for",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_statistical_methods_for_food_science_introductory_procedures_for.png"
  },
  {
    title: "Stell and Marans textbook of head and neck surgery and oncology",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_stell_and_marans_textbook_of_head_and_neck_surgery_and_oncology_.png"
  },
  {
    title: "Step to MRCP 3rd Edition",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_step_to_mrcp_3rd_edition.png"
  },
  {
    title: "Step-Up to Medicine 6th edition 2024",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_step-up_to_medicine_6th_edition_2024.png"
  },
  {
    title: "Stockley s Herbal Medicines Interactions",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_stockley_s_herbal_medicines_interactions.png"
  },
  {
    title: "Structured Foods",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_structured_foods.png"
  },
  {
    title: "STUDY GUIDE FOR CAMPBELL BIOLOGY NINTH EDITION MARTHA R TAYLOR,",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_study_guide_for_campbell_biology_ninth_edition_martha_r_taylor_.png"
  },
  {
    title: "Surgery PreTest Self-Assessment and Review",
    author: "Unknown",
    category: "Surgery",
    cover: "assets/covers/pharma_surgery_pretest_self-assessment_and_review.png"
  },
  {
    title: "synthetic drugs",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_synthetic_drugs.png"
  },
  {
    title: "Text book of toxicology",
    author: "Unknown",
    category: "Toxicology",
    cover: "assets/covers/pharma_text_book_of_toxicology.png"
  },
  {
    title: "textbook anatomy",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_textbook_anatomy.png"
  },
  {
    title: "TEXTBOOK OF ANATOMY",
    author: "Unknown",
    category: "Anatomy",
    cover: "assets/covers/pharma_textbook_of_anatomy.png"
  },
  {
    title: "Textbook of Biochemistry",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_textbook_of_biochemistry.png"
  },
  {
    title: "TEXTBOOK OF BIOCHEMISTRY",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_textbook_of_biochemistry.png"
  },
  {
    title: "Textbook of Clinical Trials",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_textbook_of_clinical_trials.png"
  },
  {
    title: "textbook of critical care",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/pharma_textbook_of_critical_care.png"
  },
  {
    title: "Textbook of Diabetes",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_textbook_of_diabetes.png"
  },
  {
    title: "Textbook of Biochemistry for Medical Students D M Vasudevan, S Sreekumari",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_textbook_of_biochemistry_for_medical_students_d_m_vasudevan__s_sreekumari.png"
  },
  {
    title: "Textbook of Diabetes, 5e Feb 21",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_textbook_of_diabetes__5e_feb_21.png"
  },
  {
    title: "The Language of Medicine (10th Edition)",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_the_language_of_medicine__10th_edition_.png"
  },
  {
    title: "The Last Second MRCP PACES-3-1",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_the_last_second_mrcp_paces-3-1.png"
  },
  {
    title: "The Prepper's Medical Handbook-",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_the_prepper_s_medical_handbook-__2020_.png"
  },
  {
    title: "The Washington Manual of Critical Care 3rd Ed",
    author: "Unknown",
    category: "Emergency Medicine",
    cover: "assets/covers/pharma_the_washington_manual_of_critical_care_3rd_ed.png"
  },
  {
    title: "The Washington Manual of Medical Therapeutics Paperback",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_the_washington_manual_of_medical_therapeutics_paperback.png"
  },
  {
    title: "The Washington manual of medical therapeutics",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_the_washington_manual_of_medical_therapeutics.png"
  },
  {
    title: "The Cleveland Clinic Foundation",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_the_cleveland_clinic_foundation.png"
  },
  {
    title: "The Concise Human Body Book An Illustrated Guide to its Structure",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_the_concise_human_body_book_an_illustrated_guide_to_its_structure.png"
  },
  {
    title: "The Only MRCP Notes YOU Will Ever Need",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_the_only_mrcp_notes_you_will_ever_need.png"
  },
  {
    title: "The Prepper's Survival Medical handbook The Essential first 2024",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_the_prepper_s_survival_medical_handbook_the_essential_first_2024.png"
  },
  {
    title: "The Top 100 Drugs Clinical pharmacology",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_the_top_100_drugs_clinical_pharmacology.png"
  },
  {
    title: "The Washington Manual of Medical Therapeutics SAE 37E Archith Boloor",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_the_washington_manual_of_medical_therapeutics_sae_37e_archith_boloor.png"
  },
  {
    title: "Thyroid Disease in Pregnancy A Guide to Clinical Management Sagili",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_thyroid_disease_in_pregnancy_a_guide_to_clinical_management_sagili.png"
  },
  {
    title: "Tietz Textbook of Laboratory Medicine 7th Edition 2023",
    author: "Unknown",
    category: "Clinical Chemistry",
    cover: "assets/covers/pharma_tietz_textbook_of_laboratory_medicine_7th_edition_2023.png"
  },
  {
    title: "Toronto Internal Medicine Review 2024",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_toronto_internal_medicine_review_2024.png"
  },
  {
    title: "Toronto-Notes-2023",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_toronto-notes-2023.png"
  },
  {
    title: "Ultrasound for Primary Care",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_ultrasound_for_primary_care.png"
  },
  {
    title: "Ultrasound Teaching Manual",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_ultrasound_teaching_manual.png"
  },
  {
    title: "USMLE in Arabic 2022 master the boeads",
    author: "Unknown",
    category: "Medical Education / Exam Prep",
    cover: "assets/covers/pharma_usmle_in_arabic_2022_master_the_boeads.png"
  },
  {
    title: "USMLE Step 2 CK Lecture Notes 2021 Internal Medicine Kaplan Medical",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma_usmle_step_2_ck_lecture_notes_2021_internal_medicine_kaplan_medical.png"
  },
  {
    title: "VASCULAR MEDICINE A COMPANION TO BRAUNWALD'S HEART DISEASE 3rd Ed",
    author: "Unknown",
    category: "Cardiology",
    cover: "assets/covers/pharma_vascular_medicine_a_companion_to_braunwald_s_heart_disease_3rd_ed.png"
  },
  {
    title: "Vitamins and minerals",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_vitamins_and_minerals.png"
  },
  {
    title: "Viva Voce in Inorganic Chemistry for BPharma",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_viva_voce_in_inorganic_chemistry_for_bpharma.png"
  },
  {
    title: "Viva Voce in Organic and Pharmaceutical Chemistry",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_viva_voce_in_organic_and_pharmaceutical_chemistry.png"
  },
  {
    title: "Viva Voce Orals in Biochemistry",
    author: "Unknown",
    category: "Biochemistry",
    cover: "assets/covers/pharma_viva_voce_orals_in_biochemistry.png"
  },
  {
    title: "Viva Voce in Pharmaceutical Chemistry Amrita Parle First Edition",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_viva_voce_in_pharmaceutical_chemistry_amrita_parle_first_edition.png"
  },
  {
    title: "Williams Textbook of Endocrinology",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma_williams_textbook_of_endocrinology.png"
  },
  {
    title: "Workbook for Pharmacology for Pharmacy Technicians",
    author: "Unknown",
    category: "Pharmacology",
    cover: "assets/covers/pharma_workbook_for_pharmacology_for_pharmacy_technicians.png"
  },
  {
    title: "[Harrison’s Principles of Internal Medicine] 22E",
    author: "Unknown",
    category: "Internal Medicine",
    cover: "assets/covers/pharma__harrison_s_principles_of_internal_medicine__22e__2025_.png"
  },
  {
    title: "[] Diabetes Chronic Complications, Third Edition(BookZZ.org)",
    author: "Unknown",
    category: "Endocrinology",
    cover: "assets/covers/pharma____diabetes_chronic_complications__third_edition_bookzz_org_.png"
  },
  {
    title: "اساسيات علم الادوية من المبادئ الاساسية الى التطبيقات السريرية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_اساسيات_علم_الادوية_من_المبادئ_الاساسية_الى_التطبيقات_السريرية_.png"
  },
  {
    title: "التداخلات الدوائية 2017",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_التداخلات_الدوائية_2017.png"
  },
  {
    title: "التداخلاتالدوائية في الامراض المعدية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_التداخلاتالدوائية_في_الامراض_المعدية.png"
  },
  {
    title: "التدريب الصيدلى",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_التدريب_الصيدلى.png"
  },
  {
    title: "الشامل في الادوية السريرية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_الشامل_في_الادوية_السريرية.png"
  },
  {
    title: "الصادات الحيوية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_الصادات_الحيوية__1_.png"
  },
  {
    title: "الصادات الحيوية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_الصادات_الحيوية.png"
  },
  {
    title: "الصيدلة العلاجية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_الصيدلة_العلاجية.png"
  },
  {
    title: "الفيتامينات كاملة 💊",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_الفيتامينات_كاملة__.png"
  },
  {
    title: "الكيمياء الحياتية - الدهون",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_الكيمياء_الحياتية_-_الدهون.png"
  },
  {
    title: "الكيمياء التحليلية الصيدلانية العملي",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_الكيمياء_التحليلية_الصيدلانية_العملي.png"
  },
  {
    title: "المعين للصيادلة المبتدئين",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_المعين_للصيادلة_المبتدئين.png"
  },
  {
    title: "دائرة معارف طبية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_دائرة_معارف_طبية.png"
  },
  {
    title: "دليل المراجعة في الكيمياء الحيوية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_دليل_المراجعة_في_الكيمياء_الحيوية.png"
  },
  {
    title: "ضمان الجودة للمستحضرات الصيدلانية الدوائية حسب منظمة الصحة العالمية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_ضمان_الجودة_للمستحضرات_الصيدلانية_الدوائية_حسب_منظمة_الصحة_العالمية.png"
  },
  {
    title: "طرق جمع العينات الطبية ونقلها ومعالجتها",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_طرق_جمع_العينات_الطبية_ونقلها_ومعالجتها.png"
  },
  {
    title: "علم الادوية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_علم_الادوية.png"
  },
  {
    title: "علم الادوية والعلاج",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_علم_الادوية_والعلاج.png"
  },
  {
    title: "علم الدواء",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_علم_الدواء.png"
  },
  {
    title: "علم العقاقير وكيمياء العقاقير ج1",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_علم_العقاقير_وكيمياء_العقاقير_ج1.png"
  },
  {
    title: "علم العقاقير وكيمياء العقاقير ج2",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_علم_العقاقير_وكيمياء_العقاقير_ج2.png"
  },
  {
    title: "علم المناعة",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_علم_المناعة.png"
  },
  {
    title: "علم تاثير الادوية 3",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_علم_تاثير_الادوية_3.png"
  },
  {
    title: "كتاب جرعات الدواء للاطفال",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_كتاب_جرعات_الدواء_للاطفال.png"
  },
  {
    title: "كتاب خطوة بخطو وانت فى الصيدلية",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_كتاب_خطوة_بخطو_وانت_فى_الصيدلية.png"
  },
  {
    title: "كتاب علم الدم",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_كتاب_علم_الدم.png"
  },
  {
    title: "كتاب التدريب الصيدلاني 2023 2024 هشام داود 2",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_كتاب_التدريب_الصيدلاني_2023_2024_هشام_داود_2.png"
  },
  {
    title: "كتاب الشامل في أدوية الأطفال",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_كتاب_الشامل_في_أدوية_الأطفال.png"
  },
  {
    title: "كتاب فارماكولوجي باللغة العربية برعاية مدونة الصيادلة",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_كتاب_فارماكولوجي_باللغة_العربية_برعاية_مدونة_الصيادلة.png"
  },
  {
    title: "لخفض الوزن والتدخين و الطاقةOTCالمستحضرات دون وصفة",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_لخفض_الوزن_والتدخين_و_الطاقةotcالمستحضرات_دون_وصفة.png"
  },
  {
    title: "مختصر علم الادوية السريري",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_مختصر_علم_الادوية_السريري.png"
  },
  {
    title: "موسوعة ٔامراض العظام والكسور والعمود الفقرى",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_موسوعة__امراض_العظام_والكسور_والعمود_الفقرى.png"
  },
  {
    title: "نماذج اختبار مزاولة طب عام",
    author: "Unknown",
    category: "General Medicine",
    cover: "assets/covers/pharma_نماذج_اختبار_مزاولة_طب_عام.png"
  },

];
