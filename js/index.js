const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



const resultsContainerElement = document.getElementById('results-container');
const scoreElement = document.getElementById('score-value');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}



function showResults() {
    questionContainerElement.classList.add('hide');
    resultsContainerElement.classList.remove('hide');
    scoreElement.innerText = calculateScore() + '/' + questions.length;
  }
  
  function calculateScore() {     
    let score = 0;
    shuffledQuestions.forEach((question, index) => {
      const selectedButton = answerButtonsElement.children[index].querySelector('[data-correct="true"]');
      if (selectedButton === answerButtonsElement.children[index].querySelector('.selected')) {
        score++;
      }
    });
    return score;
  }

  function calculateScore() {
    let score = 0;
    shuffledQuestions.forEach((question, index) => {
      const selectedButton = answerButtonsElement.children[index].querySelector('.selected');
      const correctButton = answerButtonsElement.children[index].querySelector('[data-correct="true"]');
      if (selectedButton === correctButton) {
        score++;
      }
    });
    return score;
  }
  
  



function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    showResults();
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What information needed to create a histogram?',
    answers: [
      { text: 'Cell forward scatter & cell side scatter', correct: false },
      { text: 'Cell volume & relative cell number', correct: true },
      { text: 'Cell size & cell complexity', correct: false },
      { text: 'Nuclear size & cellular density', correct: false }
    ]
  },
  {
    question: 'A parameter not directly determine in an autoamated analyzer?',
    answers: [
      { text: 'WBC', correct: false},
      { text: 'Hct', correct: true},
      { text: 'Platelet', correct: false },
      { text: 'RBC', correct: false }
    ] 
  },

  {
    question: 'In an electronic particle cell counter, platelet clumps may interfere with which of the following?',
    answers: [
      { text: 'RBC', correct: false },
      { text: 'WBC', correct: true },
      { text: 'MVC', correct: false },
      { text: 'Reticulocytes', correct: false }
    ]
  },
  {

    question: 'A 1:10 bleach solution is prepared today. When will be its expiration?',
    answers: [
      { text: '1 month after it was prepared', correct: false },
      { text: '1 day after it was prepared', correct: true },
      { text: '1 year after it was prepared', correct: false },
      { text: '1 week after it was prepared', correct: false }
    ]
  },



  {
    question: 'The very first site of blood cell formation?',
    answers: [
      { text: 'Spleen', correct: false },
      { text: 'Yolk Sac', correct: true },
      { text: 'Liver', correct: false },
      { text: 'Lymph Nodes', correct: false }
    ]
  },


   {
    question: 'A red cell parameter that determine the packed cell volume?',
    answers: [
      { text: 'OFT', correct: false },
      { text: 'Hct', correct: true },
      { text: 'ESR', correct: false },
      { text: 'MCV', correct: false }
    ]
  },

    {
    question: 'A blood sample taken at 6:00 am and brought & received in the laboratory at 11:00 am could not be tested for?',
    answers: [
      { text: 'WBC ct', correct: false },
      { text: 'RBC ct', correct: false },
      { text: 'ESR', correct: true },
      { text: 'MCV', correct: false }
    ]
  },

   {
    question: 'What is the largest white blood cell normally found in the peripheral blood smear?',
    answers: [
      { text: 'Neutrophil', correct: false },
      { text: 'Lymphocyte', correct: false },
      { text: 'Monocyte', correct: true },
      { text: 'Eosinophil', correct: false }
    ]
  },

   {
    question: 'The most mature granulocyte precursor that can undergo mitosis is the?',
    answers: [
      { text: 'Promyelocyte', correct: false },
      { text: 'Metamyelocyte', correct: false },
      { text: 'Myelocyte', correct: true },
      { text: 'Myeloblast', correct: false }
    ]
  },


  {
    question: 'Production of primary granules ceases and production of secondary granules commences with what cell stage?',
    answers: [
      { text: 'Promyelocyte', correct: false },
      { text: 'Metamyelocyte', correct: false },
      { text: 'Myelocyte', correct: true },
      { text: 'Myeloblast', correct: false }
    ]
  },

    {
    question: 'Arneths classification of neutrophils is based on?',
    answers: [
      { text: 'Size and shape of the nucleus', correct: false },
      { text: 'Size of the cell","Number of lobes', correct: false },
      { text: 'Type of granulocytes', correct: true }
     
    ]
  },

   {
    question: 'A juvunile cell is also known as?',
    answers: [
      { text: 'Band', correct: false },
      { text: 'Myelocyte', correct: false },
      { text: 'Metamyelocyte', correct: true },
      { text: 'Promyelocyte', correct: false },

     
    ]
  },


    {
    question: 'While performing a differential count on a capillary blood smear, very few leukocytes were noted that do not tally with the WBC count. What action should be taken?',
    answers: [
      { text: 'Report out agranulocytosis', correct: false },
      { text: 'Look at the feather edge and margin of the smear for WBC clumping', correct: true },
      { text: 'Report the finding to you supervisor immediately', correct: false },
      { text: 'Request a venous sample for an absolute count', correct: false },

     
    ]
  },

    {
    question: 'Which of the following tests is useful in differentiating leukemoid reaction from CGL?',
    answers: [
      { text: 'Sudan black B stain', correct: false },
      { text: 'LAP /NAP stain', correct: true },
      { text: 'Peroxides stain', correct: false },
      { text: 'Surface membrane markers', correct: false },

     
    ]
  },


    {
    question: 'Which of the following tests is useful in differentiating leukemoid reaction from CGL?',
    answers: [
      { text: 'Sudan black B stain', correct: false },
      { text: 'LAP /NAP stain', correct: true },
      { text: 'Peroxides stain', correct: false },
      { text: 'Surface membrane markers', correct: false },

     
    ]
  },


    {
    question: 'the LAP activity is increased in which of the following conditions?',
    answers: [
      { text: 'Leukemoid', correct: true },
      { text: 'AGL', correct: false },
      { text: 'CML', correct: false },
      { text: 'SEryhtroleukemia', correct: false },

     
    ]
  },


    {
    question: 'what complex coagulation process that is affected by lupus anticoagulant?',
    answers: [
      { text: 'Streptokinase complex', correct: false },
      { text: 'Prothrombinase complex', correct: true },
      { text: 'Thrombokinase', correct: false },
      { text: 'Cytokinase complex', correct: false },

     
    ]
  },

     {
    question: 'In the neutrophillic series of leukocyte development, the earliest stage to normally appear in the perpheral blood is the',
    answers: [
      { text: 'Myelocyte', correct: false },
      { text: 'Band', correct: true },
      { text: 'Promyelocyte', correct: false },
      { text: 'Myeloblast complex', correct: false },

     
    ]
  },

     {
    question: 'In which of the following are eosinophils NOT increased?',
    answers: [
      { text: 'Allergic disorders', correct: false },
      { text: "Cushing's syndrome", correct: true },
      { text: 'Promyelocyte', correct: false },
      { text: 'Myeloblast complex', correct: false },

     
    ]
  },


     {
    question: 'Which of the following is true about specific (secondary) granules of neutrophils?',
    answers: [
      { text: 'Appear first in the myelocyte stage', correct: true },
      { text: "Contain lysomal enzymes", correct: false },
      { text: 'Are formed in the mitochondira', correct: false },
      { text: 'Are derived from azurophilic granules', correct: false },

     
    ]
  },


   {
    question: 'A term that meant varying degrees of leukocytes with a shift to the left and occasional NRBC in the PB?',
    answers: [
      { text: 'Polycythemia', correct: false },
      { text: "Leukoeryhtroblastosis", correct: true },
      { text: 'Eryhtroblastosis', correct: false },
      { text: 'Erytroleukemia', correct: false },

     
    ]
  },

     {
    question: 'Vasodilation and bronchoconstriction are the result of degranulation by which of the following blood cells?',
    answers: [
      { text: 'Basophils', correct: true },
      { text: "Eosinophils", correct: false },
      { text: 'Neutrophils', correct: false },
      { text: 'Monocytes', correct: false },

     
    ]
  },

      {
    question: 'Which of the following can differentiate metamyelocytes from other stages of granulocyte maturation?',
    answers: [
      { text: 'Color of cytoplasm', correct: false },
      { text: "Presence of specific granules", correct: false },
      { text: 'Indentation of nucleus', correct: true },
      { text: 'Absence of nucleoli', correct: false },

     
    ]
  },



      {
    question: 'Antigen-dependent lymphopoiesis  occurs in the secondary lymphoid  tissue located in the: ?',
    answers: [
      { text: 'Liver and spleen', correct: false },
      { text: "Spleen and lymph nodes", correct: true },
      { text: 'lungs and Peyers, patches',correct: false },
      { text: 'Absence of nucleoli', correct: false },

     
    ]
  },

      {
    question: 'On what basis can B & T lymphocytes be distinguished?',
    answers: [
      { text: 'Chromatin pattern in the nucleus B. Differences in nuclea', correct: false },
      { text: "Differences in Nuclear shape", correct: false },
      { text: 'Monoclonal antibody reactions to surface and cytoplasmic antigens',correct: true },
      { text: 'cytoplasmic granularity and overall cell size', correct: false },

     
    ]
  },

     {
    question: 'Nuclear division of megakaryoblast is termed as:',
    answers: [
      { text: 'Meiosis', correct: false },
      { text: "Karyorrhexis", correct: false },
      { text: 'Mitosis',correct: false },
      { text: 'Endomitosis', correct: true },

     
    ]
  },


  {
    question: 'What platelet substance responsible for clot retraction',
    answers: [
      { text: 'Thromboxane', correct: false },
      { text: "Thrombomodulin", correct: false },
      { text: 'Thrombosthenin',correct: true },
      { text: 'Thrombospondin', correct: false },

     
    ]
  },


  {
    question: 'The blood sample preparation to be used in platelet aggregometry test',
    answers: [
      { text: 'fresh plasma', correct: false },
      { text: "platelet poor plasma", correct: false },
      { text: 'platelet rich plasma',correct: true },
      { text: 'adsorbed plasma', correct: false },

     
    ]
  },

   {
    question: 'In ivy method, a blood pressure (mmHg) cuff in inflated to',
    answers: [
      { text: '80', correct: false },
      { text: "100", correct: false },
      { text: '40',correct: true },
      { text: '50', correct: false },

     
    ]
  },


  {
    question: 'An additional platelet activator and powerful vasoconstrictive activity',
    answers: [
      { text: 'ADP', correct: false },
      { text: "Thromboxane A2", correct: true },
      { text: 'PGH2',correct: false },
      { text: 'Ristocetin', correct: false },

     
    ]
  },



  {
    question: 'Substance added to activate platelets to release Pf3',
    answers: [
      { text: 'Kaolin', correct: true },
      { text: "ADP", correct: false },
      { text: 'CaCI2',correct: false },
      { text: 'Collagen', correct: false },

     
    ]
  },


  {
    question: 'A specimen used in aPTT',
    answers: [
      { text: 'Normal serum', correct: false },
      { text: "plt poor plasma", correct: true },
      { text: 'adsorb plasma',correct: false },
      { text: 'plt rich plasma', correct: false },

     
    ]
  },


  {
    question: 'A molarity of calcium chloride used in aPTT',
    answers: [
      { text: '0.2 M', correct: false },
      { text: "0.02 M", correct: false },
      { text: '0.002 M',correct: false },
      { text: '0.025 M', correct: true },

     
    ]
  },

    {
    question: 'Test for stage III defect',
    answers: [
      { text: 'Thrombin time', correct: true },
      { text: "Stypven time", correct: false },
      { text: 'Reptilase time',correct: false },
      { text: 'SPCT', correct: false },

     
    ]
  },


     {
    question: 'What is the action of oral anticoagulant?',
    answers: [
      { text: 'Blocks vit K', correct: true },
      { text: "Degrades clotting factors", correct: false },
      { text: 'Inhibits binding of calcium',correct: false },
      { text: 'Replaces activated zymogens', correct: false },

     
    ]
  },

    {
    question: 'What laboratory test not affected by the presence of therapeutic heparin?',
    answers: [
      { text: 'Reptilase', correct: true },
      { text: "TT", correct: false },
      { text: 'WBCT & heparin assay',correct: false },
      { text: 'PT & aPTT', correct: false },

     
    ]
  },

     {
    question: 'A system whose function is to keep the vascular system free of deposited fibrin or fibrin clots.',
    answers: [
      { text: 'Fibrinolytic system', correct: true },
      { text: "Coagulation system", correct: false },
      { text: 'Kinnin system',correct: false },
      { text: 'vascular system', correct: false },

     
    ]
  },


     {
    question: 'An anti-thrombin considered as a major serpin',
    answers: [
      { text: 'AT-V', correct: false },
      { text: "AT-III", correct: true },
      { text: 'AT-1',correct: false },
      { text: 'A-II', correct: false },

     
    ]
  },


 {
    question: 'A coagulation factor synthesized in megakaryocytes & endothelial cell',
    answers: [
      { text: 'Factor expiration', correct: false },
      { text: "Factor I", correct: false },
      { text: 'Factor VIII',correct: true },
      { text: 'Factor XII', correct: false },

     
    ]
  },


   {
    question: 'Thrombokinase is also known as',
    answers: [
      { text: 'Factor II', correct: false },
      { text: "Factor Cambridge", correct: false },
      { text: 'Factor X',correct: false },
      { text: 'Factor III(tissue factor)', correct: true },

     
    ]
  },

 {
    question: 'A coagulation factor easily affected when a patient is receiving an oral anticoagulant',
    answers: [
      { text: 'Factor XII', correct: false },
      { text: "Factor V", correct: false },
      { text: 'Factor VII',correct: true },
      { text: 'Factor I', correct: false },

     
    ]
  },




   {
    question: 'A most sensitive test to perform to detect early liver disease',
    answers: [
      { text: 'aPTT', correct: false },
      { text: "ACT", correct: false },
      { text: 'TGT',correct: false },
      { text: 'PT', correct: true },

     
    ]
  },

    {
    question: 'Blood sample preparation wherein BaSO4 or AlOH are added to the plasma',
    answers: [
      { text: 'aged plasma', correct: false },
      { text: "Normal serum", correct: false },
      { text: 'Fresh plasma',correct: false },
      { text: 'Adsorbed plasma', correct: true },

     
    ]
  },




  {
    question: 'Vitals stains used in reticulocyte count: 1. NMB 2. BCB 3. Janus Green 4. Nile Blue Sulfate',
    answers: [
      { text: '1,3', correct: false },
      { text: "2,4", correct: false },
      { text: '1,2,3',correct: false },
      { text: '1,2,3,4', correct: true },

     
    ]
  },


  {
    question: 'Sphingomyelinase is deficiency of what disease?',
    answers: [
      { text: "Tay-Sach's", correct: false },
      { text: "Niemann's", correct: true },
      { text: "Gaucher's",correct: false },
      { text: "Fabry's", correct: false },

     
    ]
  },

    {
    question: 'A specimen used in SPCT:',
    answers: [
      { text: "plt poor plasma", correct: false },
      { text: "Adsorbed plasma", correct: false },
      { text: "plt rich plasma",correct: false },
      { text: "Normal serum", correct: true },

     
    ]
  },

     {
    question: 'The anticoagulant of choice for routine coagulation procedure is:',
    answers: [
      { text: "sodium oxalate", correct: false },
      { text: "Sodium citrate", correct: true },
      { text: "Heparin",correct: false },
      { text: "Sodium fluoride", correct: false },

     
    ]
  },

   {
    question: 'Which of the following is most useful in differentiating hemophilias A & B?',
    answers: [
      { text: "Pattern of inheritance", correct: false },
      { text: "Correction studies (substitution) ", correct: true },
      { text: "Whole blood clotting time and aPTT",correct: false },
      { text: "Mixing studies", correct: false },

     
    ]
  },

    {
    question: 'Parahemophilia is caused by a deficiency of factor:',
    answers: [
      { text: "VII", correct: false },
      { text: "VIII ", correct: false },
      { text: "IX",correct: true },
      { text: "VI", correct: false },

     
    ]
  },


  {
    question: 'The enzyme that cleaves fibrin bonds, releasing fibrin degradation products:',
    answers: [
      { text: "Thrombin", correct: false },
      { text: "Plasmin ", correct: true },
      { text: "FSP",correct: false },
      { text: "Prostacylin", correct: false },

     
    ]
  },


    {
    question: 'Which of the following tests detects the same coagulation factor defect as WBCT:',
    answers: [
      { text: "PT", correct: false },
      { text: "TT ", correct: false },
      { text: "SPCT",correct: false },
      { text: "aPTT", correct: true },

     
    ]
  },


  {
    question: 'A combination of calcium ion, Pf3 and active forms of Factors V & X:',
    answers: [
      { text: "Cytokinase complex", correct: false },
      { text: "Thrombokinase complex ", correct: false },
      { text: "Prothrombinase complex ",correct: false },
      { text: "Srepto-urokinase complex", correct: true },

     
    ]
  },


  {
    question: 'Prothrombin time results reported as: 1. Ratio 2. % activity 3. Seconds 4. Units',
    answers: [
      { text: "1,2,3", correct: true },
      { text: "1&3", correct: false },
      { text: "2&4 ",correct: false },
      { text: "1,2,3,4", correct: false },

     
    ]
  },



 {
    question: 'What methods are used to assay anti-thrombin III? 1. Radial immunodiffusion 2. Thrombin neutralization time 3. Laurell Rocket electrophoresis 4. Reptilase time',
    answers: [
      { text: "1,2,3,4", correct: false },
      { text: "1&3", correct: false },
      { text: "2&4 ",correct: false },
      { text: "4 only", correct: true },

     
    ]
  },


   {
    question: 'Which of the following are vitamin K dependent factors?',
    answers: [
      { text: "II,VII,IX,X", correct: true },
      { text: "XI,XII,HMWK", correct: false },
      { text: "I,V,VIII,XIII ",correct: false },
      { text: "II,III,IV,VI", correct: false },

     
    ]
  },


  {
    question: 'What coagulation factors are not present in aged plasma ?',
    answers: [
      { text: "XI & XIII", correct: false },
      { text: "I & XIII", correct: false },
      { text: "IV & VIII ",correct: true },
      { text: "VII & X", correct: false },

     
    ]
  },


  {
    question: 'Jasmine had a history of mild hemorrhagic episodes. Laboratory results in prolonged PT and aPTT. The prolonged PT was corrected by normal and adsorbed plasma but not with aged plasma. Which of the following factors deficient?',
    answers: [
      { text: "Factor X", correct: false },
      { text: "Factor III", correct: false },
      { text: "Factor V",correct: true },
      { text: "Factor IX", correct: false },

     
    ]
  },





  {
    question: 'TRAP stain is applicable in:',
    answers: [
      { text: "Stem cell leukemia", correct: false },
      { text: "Erythroleukemia", correct: false },
      { text: "Hairy cell leukemia",correct: true },
      { text: "Monoblastic leukemia", correct: false },

     
    ]
  },


  {
    question: 'Absence of intermediate maturing cells between the blast and mature neutrophil commonly seen in AML and preleukemic state',
    answers: [
      { text: "SLeukemoid reaction", correct: false },
      { text: "Leukemic hiatus", correct: true },
      { text: "Aleukemic leukemia",correct: false },
      { text: "Leukopenia", correct: false },

     
    ]
  },

  {
    question: 'A type of cell seen in myelofibrosis with myeloid metaplasia',
    answers: [
      { text: "Dacrocyte", correct: true },
      { text: "Acanthocyte", correct: false },
      { text: "Schistocyte",correct: false },
      { text: "Stomatocyte", correct: false },

     
    ]
  },


  {
    question: 'In APL, the patient has a bleeding tendency similar to',
    answers: [
      { text: "TTP", correct: false },
      { text: "ITP", correct: false },
      { text: "DIC",correct: true },
      { text: "Haemophilia", correct: false },

     
    ]
  },


  {
    question: 'A differential theraphy is applicable to:',
    answers: [
      { text: "CGL", correct: false },
      { text: "ALL", correct: false },
      { text: "APL",correct: true },
      { text: "AML", correct: false },

     
    ]
  },

  
  {
    question: 'Which anemia has red cellmorphology similar to that seen in iron deficiency anemia?',
    answers: [
      { text: "Sickle cell anemia", correct: false },
      { text: "Thalassemia syndrome", correct: true },
      { text: "Pernicious anemia",correct: false },
      { text: "Hereditary spherocytosis", correct: false },

     
    ]
  },


   
  {
    question: 'Which ratio of anticoagulant-to blood is correct for coagulation  procedures?',
    answers: [
      { text: "1:4 ", correct: false },
      { text: "1:5", correct: false },
      { text: "1:9",correct: true },
      { text: "1:10", correct: false },

     
    ]
  },

  {
    question: 'A decreased osmotic fragility test  would be associated with which of the following conditions?',
    answers: [
      { text: "Sickle cell anemia  ", correct: true },
      { text: "Hereditary spherocytosis ", correct: false },
      { text: "Hemolytic disease of the newborn",correct: false },
      { text: "Acquired hemolytic anemia ", correct: false },

     
    ]
  },

  {
    question: 'Which of the following disorders  has an increase in osmotic fragility?',
    answers: [
      { text: "Iron deficiency anemia ", correct: false },
      { text: " Hereditary elliptocytosis  ", correct: false },
      { text: "Hereditary stomatocytosis",correct: false },
      { text: " Hereditary spherocytosis ", correct: true },

     
    ]
  },



  {
    question: "Which of the following organs is responsible for the pitting process for RBC's ",
    answers: [
      { text: "Liver ", correct: false },
      { text: "Spleen", correct: true },
      { text: "Kidney",correct: false },
      { text: "Lymph nodes", correct: false },

     
    ]
  },

  {
    question: "Reticulocytosis usually indicates:",
    answers: [
      { text: "Response to inflammation", correct: false },
      { text: "Neoplastic process", correct: false },
      { text: "Aplastic anemia", correct: false },
      { text: "Red cell regeneration", correct: true }
    ]
  },

  {
    question: "The macrocytes typically seen in megaloblastic processes are:",
    answers: [
      { text: "Crescent-shaped", correct: false },
      { text: "Teardrop-shaped", correct: false },
      { text: "Ovalocytic", correct: true },
      { text: "Pencil-shaped", correct: false }
    ]
  },


  {
    question: "Which inclusions may be seen in leukocytes?",
    answers: [
      { text: "Dohle bodies", correct: true },
      { text: "Basophilic stippling", correct: false },
      { text: "Malarial parasites", correct: false },
      { text: "Howell-Jolly bodies", correct: false }
    ]
  },


  {
    question: "Disseminated intravascular coagulation (DIC) is most often associated with which of the following types of acute leukemia?",
    answers: [
      { text: "Acute myeloid leukemia without maturation", correct: false },
      { text: "Acute promyelocytic leukemia", correct: true },
      { text: "Acute myelomonocytic leukemia", correct: false },
      { text: "Acute monocytic leukemia", correct: false }
    ]
  },



  {
    question: "What influence does the Philadelphia (Ph1) chromosome have on the prognosis of patients with chronic myelocytic leukemia?",
    answers: [
      { text: "It is not predictive", correct: false },
      { text: "The prognosis is better if Ph1 is present", correct: true },
      { text: "The prognosis is worse if Ph1 is present", correct: false },
      { text: "The disease usually transforms into AML when Ph1 is present", correct: false }
    ]
  },

  {
    question: "The leukocyte alkaline phosphatase (LAP) stain on a patient gives the following results: 10(0) 48(1+) 38(2+) 3(3+) 1(4+). Calculate the LAP score.",
    answers: [
      { text: "100", correct: false },
      { text: "117", correct: false },
      { text: "137", correct: true },
      { text: "252", correct: false }
    ]
  },


  {
    question: "The morphological classification of anemia is based on which of the following?",
    answers: [
      { text: "M:E (myeloid:erythroid) ratio", correct: false },
      { text: "Prussian blue stain", correct: false },
      { text: "RBC indices", correct: true },
      { text: "Reticulocyte count", correct: false }
    ]
  },

  {
    question: "All of the following are associated with intravascular hemolysis except:",
    answers: [
      { text: "Methemoglobinemia", correct: true },
      { text: "Hemoglobinuria", correct: false },
      { text: "Hemoglobinemia", correct: false },
      { text: "Decreased haptoglobin", correct: false }
    ]
  },


  {
    question: "Aspirin prevents platelet aggregation by inhibiting the action of which enzyme?",
    answers: [
      { text: "Phospholipase", correct: false },
      { text: "Cyclo-oxygenase", correct: true },
      { text: "Thromboxane A2 synthetase", correct: false },
      { text: "Prostacyclin synthetase", correct: false }
    ]
  },

  {
    question: "Which of the following tests is most likely to be abnormal in patients taking aspirin?",
    answers: [
      { text: "Platelet morphology", correct: false },
      { text: "Platelet count", correct: false },
      { text: "Bleeding time", correct: true },
      { text: "Prothrombin time", correct: false }
    ]
  },


  {
    question: "Which of the following conditions may produce spherocytes in a peripheral smear?",
    answers: [
      { text: "PelgerʹHuet anomaly", correct: false },
      { text: "Pernicious anemia", correct: false },
      { text: "Autoimmune hemolytic anemia", correct: true },
      { text: "Sideroblastic anemia", correct: false }
    ]
  },

  {
    question: "In PV, what is characteristically seen in the peripheral blood?",
    answers: [
      { text: "Panmyelosis", correct: false },
      { text: "Pancytosis", correct: true },
      { text: "Pancytopenia", correct: false },
      { text: "Panhyperplasia", correct: false }
    ]
  },



  {
    question: "Normocytic and normochromic anemia is usually seen in patients with:",
    answers: [
      { text: "Iron deficiency anemia", correct: false },
      { text: "Aplastic anemia", correct: true },
      { text: "Thalassemia", correct: false },
      { text: "Anemia of chronic disease", correct: false }
    ]
  },



  {
    question: "A clinical finding to differentiate Vit. B12 Deficiency from Folic Acid Deficiency:",
    answers: [
      { text: "Macrocytic anemia", correct: false },
      { text: "Neuropathy", correct: true },
      { text: "FIGLU Test", correct: false },
      { text: "Macropolycyte", correct: false }
    ]
  },


  {
    question: "A hereditary hemolytic anemia wherein there is an increased MCV, OFT, decreased MCHC, and in which RBC morphology must be examined in both wet and dry slides:",
    answers: [
      { text: "H. Hydrocytosis", correct: true },
      { text: "H. Pyropoikilocytosis", correct: false },
      { text: "H. Ovalocytosis", correct: false },
      { text: "H. Spherocytosis", correct: false }
    ]
  },


  {
    question: "Bronze elliptocytosis occurs in patients with abnormal hemoglobin as in:",
    answers: [
      { text: "Hb C", correct: false },
      { text: "Hb M", correct: false },
      { text: "Hb H", correct: false },
      { text: "Hb S", correct: true }
    ]
  },


  {
    question: "An aerobic enzyme that sees to it that Hb must always be in its functional state:",
    answers: [
      { text: "Isomerase", correct: false },
      { text: "Methemoglobin Reductase", correct: true },
      { text: "Diaphorase", correct: false },
      { text: "G6PD", correct: false }
    ]
  },


  {
    question: "Gumprecht shadow or ghost cell is also known as:",
    answers: [
      { text: "Macropolycyte", correct: false },
      { text: "Basket cell", correct: true },
      { text: "Tart Cell", correct: false },
      { text: "Hairy Cell", correct: false }
    ]
  },


  {
    question: "Zimmer and Hargrave method for L.E Cell Prep uses:",
    answers: [
      { text: "Capillary Blood", correct: false },
      { text: "Clotted Blood", correct: true },
      { text: "Heparinized Blood", correct: false }
    ]
  },

  {
    question: "An RBC exhibiting hypochromia would be described as being:",
    answers: [
      { text: "Markedly bluish in color", correct: false },
      { text: "Variable in shape", correct: false },
      { text: "Packed with hemoglobin", correct: false },
      { text: "Markedly pale in central color", correct: true }
    ]
  },



  {
    question: "When performing automated cell counts, most automated cell counting instruments:",
    answers: [
      { text: "Count nucleated red blood cells with platelets", correct: false },
      { text: "Do not count nucleated red blood cells", correct: false },
      { text: "Count nucleated red blood cells with erythrocytes", correct: false },
      { text: "Count nucleated red blood cells with leukocytes", correct: true }
    ]
  },


  {
    question: "What is the best index of the severity of hemolysis?",
    answers: [
      { text: "Absolute reticulocyte count", correct: true },
      { text: "Size and weight of the spleen", correct: false },
      { text: "Microhematocrit", correct: false },
      { text: "Strength of the coomb's test", correct: false }
    ]
  },


  {
    question: "A cell with a bilobed or double nucleoli having an owl-eye appearance:",
    answers: [
      { text: "Reed-Sternberg", correct: true },
      { text: "Tart Cell", correct: false },
      { text: "LE Cell", correct: false },
      { text: "Mast Cell", correct: false }
    ]
  },

  {
    question: "Mitochondrial enzyme that catalyzes the incorporation of iron and protoporphyrin:",
    answers: [
      { text: "Ferrochelatase", correct: true },
      { text: "Heparinase", correct: false },
      { text: "Isomerase", correct: false },
      { text: "Hexokinase", correct: false }
    ]
  },



  {
    question: "A combination of calcium ion, pF3, and active forms of Factor V and X:",
    answers: [
      { text: "Thrombinase complex", correct: false },
      { text: "Streptokinase complex", correct: false },
      { text: "Cytokinase complex", correct: false },
      { text: "Prothrombinase complex", correct: true }
    ]
  },


  {
    question: "Cell that demonstrates immediate alteration in EDTA:",
    answers: [
      { text: "Monocyte", correct: false },
      { text: "Lymphocyte", correct: false },
      { text: "Neutrophil", correct: false },
      { text: "Eosinophil", correct: true }
    ]
  },


  {
    question: "Method of hemoglobin determination that measures all forms of hemoglobin except S-Hb:",
    answers: [
      { text: "Cyanmethemoglobin", correct: true },
      { text: "Electrophoresis", correct: false },
      { text: "Acid hematin", correct: false },
      { text: "Specific gravity", correct: false }
    ]
  },


  {
    question: "A fixed tissue cell with red bead-like aggregates or granules arranged in a chain:",
    answers: [
      { text: "Heparinocyte", correct: false },
      { text: "Tissue eosinophil", correct: false },
      { text: "Ferrata cell", correct: true },
      { text: "Mast cell", correct: false }
    ]
  },


  {
    question: "Which of the following statements concerning reticulocyte count is/are true?",
    answers: [
      { text: "The adult reference range is approximately 0.5 to 5.0%", correct: false },
      { text: "Newborns have a higher reference range than adults", correct: true },
      { text: "The material that stains in reticulocytes is DNA", correct: false },
      { text: "The Miller disk is a device used to aid in reticulocyte counting",correct: true},

    ]
  },
// 96 & 97


   {
    question: "Which of the following affects erythrocyte sedimentation rate:",
    answers: [
      { text: "Composition of plasma", correct: true },
      { text: "Concentration of red cells", correct: true },
      { text: "Size of red cells", correct: true },
      { text: "Shape of red cells", correct: true},

    ]
  },


  {
    question: "Sources of error when hemoglobin by the cyanmethemoglobin method include:",
    answers: [
      { text: "Lipemic plasma", correct: true },
      { text: "Excessive anticoagulant", correct: false },
      { text: "High WBC count", correct: true },
      { text: "Certified std. used", correct: false }
    ]
  },


  {
    question: "Condition showing anisochromasia:",
    answers: [
      { text: "PNH", correct: false },
      { text: "IDA after blood transfusion", correct: true },
      { text: "Megaloblastic anemia", correct: true },
      { text: "Sideroblastic anemia", correct: true }
    ]
  },


  {
    question: "Cells usually affected when heparin is used as an anticoagulant:",
    answers: [
      { text: "White blood cells", correct: false },
      { text: "Red blood cells", correct: true },
      { text: "Platelets", correct: false },
      { text: "Endothelial cells", correct: true }
    ]
  },



  {
    question: "Correction factors in determining a correct cell count:",
    answers: [
      { text: "Depth", correct: true },
      { text: "Area", correct: true },
      { text: "Volume", correct: true },
      { text: "Color", correct: false }
    ]
  },

  {
    question: "Leukocyte alkaline phosphatase activity is decreased in:",
    answers: [
      { text: "CGL", correct: true },
      { text: "PCH", correct: false },
      { text: "PNH", correct: true },
      { text: "Polycythemia vera", correct: false }
    ]
  },


  {
    question: "Tests for detection of microcytic hypochromic anemia:",
    answers: [
      { text: "Serum iron level", correct: true },
      { text: "Serum ferritin level", correct: true },
      { text: "Serum iron binding capacity", correct: true },
      { text: "Serum bilirubin", correct: false }
    ]
  },


  {
    question: "Laboratory procedures used in the differentiation of acute leukemia:",
    answers: [
      { text: "Cytochemical evaluation", correct: true },
      { text: "Cytogenic studies", correct: true },
      { text: "Examination of blastic morphology", correct: true },
      { text: "Liquid chromatography", correct: false }
    ]
  },


  {
    question: "Which of the following are commonly associated with the Epstein Barr Virus:",
    answers: [
      { text: "Hodgkin's lymphoma", correct: false },
      { text: "Burkitt's lymphoma", correct: false },
      { text: "AIDS", correct: false },
      { text: "Infectious Mononucleosis (IM)", correct: true }
    ]
  },


  {
    question: "Basic mechanism for the occurrence of anemia:",
    answers: [
      { text: "Increased destruction", correct: true },
      { text: "Decreased production", correct: true },
      { text: "Due to blood loss", correct: true },
      { text: "Maturation disorders", correct: true }
    ]
  },



  {
    question: "A blood picture of giant platelets and thrombocytopenia:",
    answers: [
      { text: "Alport syndrome", correct: true },
      { text: "Bernard-Soulier syndrome", correct: true },
      { text: "May-Hegglin anomaly", correct: true },
      { text: "Essential Athrombia", correct: false }
    ]
  },



  {
    question: "Pathologic increase in ESR may be due to:",
    answers: [
      { text: "Necroblotic cell state", correct: true },
      { text: "Degenerative", correct: true },
      { text: "Inflammatory", correct: true },
      { text: "Pregnancy", correct: false }
    ]
  },


  {
    question: "RBC diluting fluid:",
    answers: [
      { text: "Pilot's fluid", correct: false },
      { text: "Gower's fluid", correct: true },
      { text: "Turk's fluid", correct: false },
      { text: "Toisson's fluid", correct: true }
    ]
  },

  {
    question: "Considered as transport protein:",
    answers: [
      { text: "Haptoglobin", correct: true },
      { text: "Transferrin", correct: true },
      { text: "Hemopexin", correct: true },
      { text: "Hemosiderin", correct: false }
    ]
  },


  {
    question: "With respect to globin chain genes, which of the following statements is correct:",
    answers: [
      { text: "The genes for the alpha globin chains are located on chromosome 16 and the genes for the gamma, delta and beta chains are located on chromosome 11", correct: true },
      { text: "The genes for the gamma, delta and beta globin chains are located on chromosome 16 and the genes for the alpha chains are located on chromosome 11", correct: false },
      { text: "The genes for the alpha globin chains are located on chromosome 10 and the genes for the gamma, delta and beta chains are located on chromosome 15", correct: false },
      { text: "The genes for the alpha and delta globin chains are located on chromosome 11 and the genes for the gamma and beta chains are located on chromosome 16", correct: false }
    ]
  },


  {
    question: "The neutrophil mitotic pool includes:",
    answers: [
      { text: "Promyelocytes", correct: true },
      { text: "Myeloblasts", correct: true },
      { text: "Myelocytes", correct: true },
      { text: "Metamyelocytes", correct: false }
    ]
  },

  {
    question: "Which of the following is NOT a characteristic finding in polycythemia vera?",
    answers: [
      { text: "Blood pancytosis", correct: true },
      { text: "Increased red cell mass", correct: false },
      { text: "Increased EPO level", correct: false },
      { text: "Increased blood viscosity", correct: false }
    ]
  },



   {
    question: "Stain used in detecting presence of eosiniphil in urine?",
    answers: [
      { text: "Hansel Stain", correct: true }
   
    ]
  },


  {
    question: "Specimen used in aPTT:",
    answers: [
      { text: "Normal serum", correct: false },
      { text: "Plt poor plasma", correct: true },
      { text: "Adsorbed plasma", correct: false },
      { text: "Plt rich plasma", correct: false }
    ]
  },
  
  {
    question: "Increase in classes I and II in arneth's count is ",
    answers: [
      { text: "Shift to left", correct: true },
      { text: "Regenerative shift", correct: false },
      { text: "Shift to right", correct: false },
      { text: "degenerative shift", correct: false }
    ]
  },
  
  {
    question: "Molarity of Calcium chloride used in aPTT:",
    answers: [
      { text: "0.25M", correct: false },
      { text: "0.02M", correct: false },
      { text: "0.0025M", correct: false },
      { text: "0.025M", correct: true }
    ]
  },

  {
    question: "Test for stage III defect:",
    answers: [
      { text: "TT", correct: true },
      { text: "Stypven time", correct: false },
      { text: "Reptilase Test", correct: false },
      { text: "SPCT", correct: false }
    ]
  },


  {
    question: "Hemodilution after acute blood loss is due to:",
    answers: [
      { text: "Constriction of peripheral small vessels", correct: false },
      { text: "Loss of too much protein after bleeding", correct: false },
      { text: "Lymph of lymphatic tissues enter the blood vessel", correct: true },
      { text: "Increased osmotic pressure of blood vessel", correct: false }
    ]
  },

  {
    question: "Cell which has water-soluble granules:",
    answers: [
      { text: "Neutrophils", correct: false },
      { text: "Basophil", correct: true },
      { text: "Eosinophil", correct: false },
      { text: "Monocyte", correct: false }
    ]
  },


  {
    question: "An enzyme that cleaves fibrin bonds, releasing fibrin degradation products:",
    answers: [
      { text: "Heparin", correct: false },
      { text: "Plasmin", correct: true },
      { text: "Prostacyclin", correct: false },
      { text: "Thrombin", correct: false }
    ]
  },


  {
    question: "Blood picture following acute hemorrhage show the following characteristics except:",
    answers: [
      { text: "Increased TIBC", correct: true },
      { text: "Increased reticulocyte", correct: false },
      { text: "Normocytic, normochromic", correct: false },
      { text: "Leukocytosis", correct: false }
    ]
  }



  
  
  
  
  



  
  
  
  
  
  
  
  
  
  
  
  
  
  


  
  
  
  
  
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  




























]