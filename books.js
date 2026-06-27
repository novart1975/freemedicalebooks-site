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
  }
];
