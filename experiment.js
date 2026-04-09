/************************** 
 * Experiment3.31测试  *
 **************************/

import { core, data, sound, util, visual, hardware } from './psychojs-2025.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'experiment3.31测试 ';  // from the Builder filename that created this script
let expInfo = {
    'participant': '001',
    'session': '001',
    'group': '1',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');
let currentLoop;
let globalClock, routineTimer, frameDur, t, frameN;
let continueRoutine, routineForceEnded;

// Clock variables
let firstClock, Instruction_RoutineClock, SVO_IntroClock, SVO_RoutineClock;
let Struggle_RoutineClock, Conflict_RoutineClock, Emotion_IntroClock;
let Emotion_MeasurementClock, Emotion_Final_SubmitClock, secondClock;
let Transition_RoutineClock, voteClock, ruleClock, Decision_RoutineClock;
let Round_FeedbackClock, Experiment_EndClock;

// Text components
let text_5, instr_text, svo_intro_text, svo_text, self_display, other_display;
let text_left, text_right, quota_instruction, opponent_reminder_struggle;
let warning_text_struggle, input_quota, submit_btn_struggle;
let round_info_struggle, intro_text_emotion, emotion_slider;
let intro_key_emotion, final_confirm_btn, transition_msg;
let text_2, text_3, text_4, text_7, text_8;
let end_msg_text, end_key, feedback_text, round_info, feedback_display;
let pool_A_shape, pool_B_shape, pool_C_shape, input_A, input_B, input_C;
let label_A, label_B, label_C, opponent_reminder, submit_btn;
let warning_text, key_resp, key_resp_2, key_resp_3, key_resp_5;
let key_resp_6, key_resp_7, key_resp_8, key_resp_9, key_resp_svo_intro;

// Sliders and other components
let svo_slider, input_box, rule_text, vote_btn_A, vote_btn_B;
let score_preview;
let vote_btn_C, vote_count_A, vote_count_B, vote_count_C;
let label_A_decision, label_B_decision, label_C_decision;
let vote_instruction, quota_text_A, quota_text_B, quota_text_C;
let confirm_btn, option_A, option_B, option_C, decision_instruction, vote_sum_warning;

// Arrays and other variables
let firstComponents, Instruction_RoutineComponents, SVO_IntroComponents;
let SVO_RoutineComponents, Struggle_RoutineComponents, Conflict_RoutineComponents;
let Emotion_IntroComponents, Emotion_MeasurementComponents;
let Emotion_Final_SubmitComponents, secondComponents, Transition_RoutineComponents;
let voteComponents, ruleComponents, Decision_RoutineComponents;
let Round_FeedbackComponents, Experiment_EndComponents;
let _key_resp_7_allKeys, _key_resp_allKeys, _key_resp_svo_intro_allKeys;
let _key_resp_2_allKeys, _intro_key_emotion_allKeys, _key_resp_6_allKeys;
let _key_resp_3_allKeys, _key_resp_9_allKeys, _key_resp_8_allKeys;
let _key_resp_5_allKeys, _end_key_allKeys;

// Loop variables
let svo_loop, emotion_loop, rounds;

// SVO variables
let svo_prosocial, svo_individual, svo_competitive, svo_item_count;

// Other state variables
let struggle_round, round_num, quota, opponent_quota, pool_A, pool_B, pool_C;
let total_score, current_round_display, current_group;
let round_info_text, opponent_status, actual_quota, conflict_feedback;
let current_rating, reminder_text, is_practice;
let label_B_text, label_C_text, opponent_name;
let val_a, val_b, val_c, self_score, teammate_score, opponent_score;
let prosocial_score, individual_score, competitive_score, max_score, svo_type;
let rating, feedback_msg;

// MaxDuration variables
let firstMaxDuration, firstMaxDurationReached;
let Instruction_RoutineMaxDuration, Instruction_RoutineMaxDurationReached;
let SVO_IntroMaxDuration, SVO_IntroMaxDurationReached;
let SVO_RoutineMaxDuration, SVO_RoutineMaxDurationReached;
let Struggle_RoutineMaxDuration, Struggle_RoutineMaxDurationReached;
let Conflict_RoutineMaxDuration, Conflict_RoutineMaxDurationReached;
let Emotion_IntroMaxDuration, Emotion_IntroMaxDurationReached;
let Emotion_MeasurementMaxDuration, Emotion_MeasurementMaxDurationReached;
let Emotion_Final_SubmitMaxDuration, Emotion_Final_SubmitMaxDurationReached;
let secondMaxDuration, secondMaxDurationReached;
let Transition_RoutineMaxDuration, Transition_RoutineMaxDurationReached;
let voteMaxDuration, voteMaxDurationReached;
let ruleMaxDuration, ruleMaxDurationReached;
let Decision_RoutineMaxDuration, Decision_RoutineMaxDurationReached;
let Round_FeedbackMaxDuration, Round_FeedbackMaxDurationReached;
let Experiment_EndMaxDuration, Experiment_EndMaxDurationReached;

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0.85,0.85,0.85]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
const flowScheduler = new Scheduler(psychoJS);

// Schedule all routines
flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);
flowScheduler.add(firstRoutineBegin());
flowScheduler.add(firstRoutineEachFrame());
flowScheduler.add(firstRoutineEnd());
flowScheduler.add(Instruction_RoutineRoutineBegin());
flowScheduler.add(Instruction_RoutineRoutineEachFrame());
flowScheduler.add(Instruction_RoutineRoutineEnd());
flowScheduler.add(SVO_IntroRoutineBegin());
flowScheduler.add(SVO_IntroRoutineEachFrame());
flowScheduler.add(SVO_IntroRoutineEnd());
const svo_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(svo_loopLoopBegin(svo_loopLoopScheduler));
flowScheduler.add(svo_loopLoopScheduler);
flowScheduler.add(svo_loopLoopEnd);


flowScheduler.add(Struggle_RoutineRoutineBegin());
flowScheduler.add(Struggle_RoutineRoutineEachFrame());
flowScheduler.add(Struggle_RoutineRoutineEnd());
flowScheduler.add(Conflict_RoutineRoutineBegin());
flowScheduler.add(Conflict_RoutineRoutineEachFrame());
flowScheduler.add(Conflict_RoutineRoutineEnd());
flowScheduler.add(Emotion_IntroRoutineBegin());
flowScheduler.add(Emotion_IntroRoutineEachFrame());
flowScheduler.add(Emotion_IntroRoutineEnd());
const emotion_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(emotion_loopLoopBegin(emotion_loopLoopScheduler));
flowScheduler.add(emotion_loopLoopScheduler);
flowScheduler.add(emotion_loopLoopEnd);


flowScheduler.add(Emotion_Final_SubmitRoutineBegin());
flowScheduler.add(Emotion_Final_SubmitRoutineEachFrame());
flowScheduler.add(Emotion_Final_SubmitRoutineEnd());
flowScheduler.add(secondRoutineBegin());
flowScheduler.add(secondRoutineEachFrame());
flowScheduler.add(secondRoutineEnd());
flowScheduler.add(Transition_RoutineRoutineBegin());
flowScheduler.add(Transition_RoutineRoutineEachFrame());
flowScheduler.add(Transition_RoutineRoutineEnd());
flowScheduler.add(voteRoutineBegin());
flowScheduler.add(voteRoutineEachFrame());
flowScheduler.add(voteRoutineEnd());
flowScheduler.add(ruleRoutineBegin());
flowScheduler.add(ruleRoutineEachFrame());
flowScheduler.add(ruleRoutineEnd());
const roundsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(roundsLoopBegin(roundsLoopScheduler));
flowScheduler.add(roundsLoopScheduler);
flowScheduler.add(roundsLoopEnd);



flowScheduler.add(Experiment_EndRoutineBegin());
flowScheduler.add(Experiment_EndRoutineEachFrame());
flowScheduler.add(Experiment_EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// Delay experiment start until participant form is submitted
window.startExperiment = async function(formData) {
  // Update expInfo with form data
  if (formData) {
    expInfo['participant'] = formData.participant;
    expInfo['session'] = formData.session;
    expInfo['group'] = formData.group;
  }

  try {
    // Add flowScheduler to psychoJS BEFORE starting
    psychoJS.scheduler.add(flowScheduler);

    // Start PsychoJS - this will also run the scheduler
    await psychoJS.start({
      expName: expName,
      expInfo: expInfo,
      resources: [
        // resources:
        {'name': 'svo_conditions.xlsx', 'path': 'svo_conditions.xlsx'},
        {'name': 'emotion_items.xlsx', 'path': 'emotion_items.xlsx'},
      ]
    });

    console.log('Experiment started successfully');
  } catch (err) {
    console.error('Failed to start experiment:', err);
  }
};

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops

  // Use values from HTML form if available
  if (window.expInfoOverride) {
    expInfo['participant'] = window.expInfoOverride.participant;
    expInfo['session'] = window.expInfoOverride.session;
    expInfo['group'] = window.expInfoOverride.group;
  }

  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "first"
  firstClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '          欢迎参加我们的社区互动实验\n\n\n          你将处于一个未来社区中，社区里共有ABC三个小区。\n          这是一个旨在通过数字化手段实现资源共享的现代化社区。\n          在这里，所有的公共设施——包括绿地、健身房以及电力资源，\n          都由社区内的居民共同管理与维护.\n\n          您将作为某一小区社区居民，在本次活动中完成几个社区任务\n          准备好后按空格键继续\n\n          如有问题请联系实验人员',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction_Routine"
  Instruction_RoutineClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: '                   背景介绍 请仔细阅读\n\n        按照社区规划，现在A小区与B小共同使用社区共享充电站\n\n        随着新能源汽车普及，两个小区的新能源车辆数都在快速增长\n        两小区住户数量、充电需求大致相当\n        而充电桩容量有限，不能完全满足两个小区的充电需求\n        该充电站共有20个充电桩，由两个小区居民共同使用\n        两小区曾因充电桩资源使用频繁产生口角\n        物业决定征求小区成员意见来决定最终充电桩分配方案\n\n        注意:您被随机分配成为A小区成员中的一员\n        您的决策将影响:您个人利益、同小区成员利益、B小区成员利益\n\n                  了解以上情况后按空格键继续 ',
    font: 'STHeiti',
    units: 'height', 
    pos: [(- 0.05), (- 0.05)], draggable: false, height: 0.038,  wrapWidth: 0.9, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SVO_Intro"
  SVO_IntroClock = new util.Clock();
  svo_intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'svo_intro_text',
    text: '\n\n                     接下来您将回答一些问题\n\n       请根据您自己的观点，评价每条陈述与您实际情况的符合程度。\n       请选择最符合您真实想法的选项，没有对错之分。\n\n                      量表说明：\n                      1 = 非常不认同\n                      7 = 非常认同\n                      点击对应的数字分值完成选择\n\n                      按空格键继续',
    font: 'STHeiti',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_svo_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SVO_Routine"
  SVO_RoutineClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  svo_prosocial = 0;
  svo_individual = 0;
  svo_competitive = 0;
  svo_item_count = 0;
  
  svo_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'svo_text',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.04,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  self_display = new visual.TextStim({
    win: psychoJS.window,
    name: 'self_display',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  other_display = new visual.TextStim({
    win: psychoJS.window,
    name: 'other_display',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_left',
    text: '',
    font: 'STHeiti',
    units: 'height', 
    pos: [(- 0.4), (- 0.2)], draggable: false, height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_right',
    text: '',
    font: 'STHeiti',
    units: 'height', 
    pos: [0.4, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  svo_slider = new visual.Slider({
    win: psychoJS.window, name: 'svo_slider',
    startValue: undefined,
    size: [1.0, 0.08], pos: [0, (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1\n\u5b8c\u5168\u4e0d\u540c\u610f", 2, 3, 4, 5, 6, "7\n\u5b8c\u5168\u540c\u610f"], fontSize: 0.04, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'STHeiti', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  // Initialize components for Routine "Struggle_Routine"
  Struggle_RoutineClock = new util.Clock();
  // Run 'Begin Experiment' code from struggle_code
  total_score = 0;
  current_group = Number.parseInt(expInfo["group"]);
  
  round_info_struggle = new visual.TextStim({
    win: psychoJS.window,
    name: 'round_info_struggle',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0.43], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  warning_text_struggle = new visual.TextStim({
    win: psychoJS.window,
    name: 'warning_text_struggle',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, (- 0.22)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -2.0 
  });
  
  quota_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'quota_instruction',
    text: '社区充电站共有20个充电桩供AB小区划分使用\n请决定您希望A小区能拥有多少个充电桩\n输入范围：0-20\n（0=没有，20=全部拥有）',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  input_quota = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_quota',
    text: '',
    placeholder: 'undefined',
    font: 'STHeiti',
    pos: [0, (- 0.05)], 
    draggable: false,
    letterHeight: 0.06,
    lineSpacing: 1.0,
    size: [0.4, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  opponent_reminder_struggle = new visual.TextStim({
    win: psychoJS.window,
    name: 'opponent_reminder_struggle',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, (- 0.32)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -5.0 
  });
  
  submit_btn_struggle = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'submit_btn_struggle',
    text: '',
    font: 'STHeiti',
    pos: [0, (- 0.42)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  submit_btn_struggle.clock = new util.Clock();

  score_preview = new visual.TextStim({
    win: psychoJS.window,
    name: 'score_preview',
    text: '',
    font: 'STHeiti',
    units: undefined,
    pos: [0, (- 0.15)], draggable: false, height: 0.035, wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('yellow'), opacity: undefined,
    depth: -6.5
  });

  // Initialize components for Routine "Conflict_Routine"
  Conflict_RoutineClock = new util.Clock();
  feedback_display = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_display',
    text: '',
    font: 'STHeiti',
    units: undefined,
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Emotion_Intro"
  Emotion_IntroClock = new util.Clock();
  intro_text_emotion = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_emotion',
    text: '          接下来，我们需要了解您在刚才互动后的真实感受。\n          选项无好坏之分，请按真实感受填写\n          请根据接下来的题目要求，选择最符合您当前状态的选项。\n          点击对应的数字分值完成选择\n          准备好了请按空格键开始',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 0.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_key_emotion = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Emotion_Measurement"
  Emotion_MeasurementClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  emotion_slider = new visual.Slider({
    win: psychoJS.window, name: 'emotion_slider',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1\n\u5b8c\u5168\u4e0d\u540c\u610f", 2, 3, 4, 5, 6, "7\n\u5b8c\u5168\u540c\u610f"], fontSize: 0.04, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'STHeiti', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "Emotion_Final_Submit"
  Emotion_Final_SubmitClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '您已完成所有评估，请点击下方按钮正式提交',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  final_confirm_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'final_confirm_btn',
    text: 'ok',
    font: 'STHeiti',
    pos: [0, (- 0.4)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  final_confirm_btn.clock = new util.Clock();
  
  // Initialize components for Routine "second"
  secondClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '欢迎进入第二个社区活动\n请按空格继续',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Transition_Routine"
  Transition_RoutineClock = new util.Clock();
  transition_msg = new visual.TextStim({
    win: psychoJS.window,
    name: 'transition_msg',
    text: '\n\n很遗憾！社区充电资源竞争激烈\n\n你所在的A小区并未争取到大部分的充电桩资源使用权限\n\n接下来你将会随机与未来社区中的某一小区（B小区或C小区）\n\n进行最后一个社区任务\n\n了解以上信息后请按空格键查看接下来的内容',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.04,  wrapWidth: 0.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "vote"
  voteClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '     【文明住户评比活动】\n\n社区正在进行年度文明住户评比活动。\n您所在的小区会随机与B和C中的任一小区进行互评\n文明住户评比活动投票结果将影响：\n1.您所在小区额外充电资源奖励和荣誉\n2.您个人的荣誉和奖金\n\n作为社区的一员，您拥有10票选票。\n\n按空格键了解投票规则',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rule"
  ruleClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '投票规则：我们采用票数兑换积分制\n\n您需要决定将这10票如何分配给三个选项：\n每投一票给选项A：自己+2分，其他成员不加分；\n\n每投一票给选项B：自己和A小区成员+1分，互动小区成员不加分；\n\n每投一票给选项C：自己和A小区成员+1分，互动小区成员每人-1分\n\n        \n10票可以分配给三个选项！三个选项投票数之和必须为10！\n\n按空格键进入决策环节你会得知与哪个小区互动\n\n\n',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Decision_Routine"
  Decision_RoutineClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  total_score = 0;
  current_group = Number.parseInt(expInfo["group"]);
  
  round_info = new visual.TextStim({
    win: psychoJS.window,
    name: 'round_info',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0.42], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  warning_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'warning_text',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.03,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -2.0 
  });
  
  input_A = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_A',
    text: '',
    placeholder: 'undefined',
    font: 'STHeiti',
    pos: [(- 0.5), (- 0.25)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.15, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: (0.2941, -0.6706, -0.6706), borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  input_B = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_B',
    text: '',
    placeholder: 'undefined',
    font: 'STHeiti',
    pos: [0, (- 0.25)], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.15, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: (0.2941, -0.6706, -0.6706), borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  input_C = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_C',
    text: '',
    placeholder: 'undefined',
    font: 'STHeiti',
    pos: [0.5, (- 0.25)], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.15, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: (0.2941, -0.6706, -0.6706), borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -5.0
  });

  // 添加票数之和提示
  vote_sum_warning = new visual.TextStim({
    win: psychoJS.window,
    name: 'vote_sum_warning',
    text: '⚠️ 注意：三个选项投票数之和必须等于10！',
    font: 'STHeiti',
    units: undefined,
    pos: [0, (- 0.38)], draggable: false, height: 0.035, wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('yellow'),
    opacity: undefined,
    depth: -5.5
  });

  pool_A_shape = new visual.Rect ({
    win: psychoJS.window, name: 'pool_A_shape', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.5), 0.22], 
    draggable: false, 
    anchor: 'center-left', 
    lineWidth: 3.0, 
    lineColor: new util.Color('darkblue'), 
    fillColor: new util.Color('lightblue'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  pool_B_shape = new visual.Rect ({
    win: psychoJS.window, name: 'pool_B_shape', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0, 0.22], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('darkgreen'), 
    fillColor: new util.Color('lightgreen'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  pool_C_shape = new visual.Rect ({
    win: psychoJS.window, name: 'pool_C_shape', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0.5, 0.22], 
    draggable: false, 
    anchor: 'center-right', 
    lineWidth: 3.0, 
    lineColor: new util.Color('darkred'), 
    fillColor: new util.Color('lightsalmon'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -8, 
    interpolate: true, 
  });
  
  opponent_reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'opponent_reminder',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.04,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -9.0 
  });
  
  submit_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'submit_btn',
    text: '',
    font: 'STHeiti',
    pos: [0, (- 0.42)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -10,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  submit_btn.clock = new util.Clock();
  
  label_A = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_A',
    text: '选项A\n自己+2票\n其他人不加票',
    font: 'STHeiti',
    units: undefined, 
    pos: [(- 0.5), 0.0], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  label_B = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_B',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  label_C = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_C',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0.5, 0.0], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0
  });

  score_preview = new visual.TextStim({
    win: psychoJS.window,
    name: 'score_preview',
    text: '',
    font: 'STHeiti',
    units: undefined,
    pos: [0, (- 0.15)], draggable: false, height: 0.035, wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('yellow'), opacity: undefined,
    depth: -13.5
  });

  // Initialize components for Routine "Round_Feedback"
  Round_FeedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Experiment_End"
  Experiment_EndClock = new util.Clock();
  end_msg_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_msg_text',
    text: '所有实验任务已完成！\n感谢您的参与。\n您的表现对我们的研究非常重要。\n请告知实验员，或按空格键退出程序',
    font: 'STHeiti',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function firstRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'first' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    firstClock.reset();
    routineTimer.reset();
    firstMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_13
    text_5.alignText = "left";
    text_5.anchor = "center";
    
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('first.started', globalClock.getTime());
    firstMaxDuration = null
    // keep track of which components have finished
    firstComponents = [];
    firstComponents.push(text_5);
    firstComponents.push(key_resp_7);
    
    for (const thisComponent of firstComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function firstRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'first' ---
    // get current time
    t = firstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // if text_5 is active this frame...
    if (text_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    // if key_resp_7 is active this frame...
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of firstComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function firstRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'first' ---
    for (const thisComponent of firstComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('first.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "first" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Instruction_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Instruction_RoutineClock.reset();
    routineTimer.reset();
    Instruction_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_9
    instr_text.anchor = "center";
    instr_text.alignText = "left";
    
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Instruction_Routine.started', globalClock.getTime());
    Instruction_RoutineMaxDuration = null
    // keep track of which components have finished
    Instruction_RoutineComponents = [];
    Instruction_RoutineComponents.push(instr_text);
    Instruction_RoutineComponents.push(key_resp);
    
    for (const thisComponent of Instruction_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Instruction_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction_Routine' ---
    // get current time
    t = Instruction_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Instruction_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction_Routine' ---
    for (const thisComponent of Instruction_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction_Routine.stopped', globalClock.getTime());
    key_resp.stop();
    // the Routine "Instruction_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function SVO_IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SVO_Intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SVO_IntroClock.reset();
    routineTimer.reset();
    SVO_IntroMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_11
    svo_intro_text.alignText = "center";
    svo_intro_text.anchor = "center";
    
    key_resp_svo_intro.keys = undefined;
    key_resp_svo_intro.rt = undefined;
    _key_resp_svo_intro_allKeys = [];
    psychoJS.experiment.addData('SVO_Intro.started', globalClock.getTime());
    SVO_IntroMaxDuration = null
    // keep track of which components have finished
    SVO_IntroComponents = [];
    SVO_IntroComponents.push(svo_intro_text);
    SVO_IntroComponents.push(key_resp_svo_intro);
    
    for (const thisComponent of SVO_IntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function SVO_IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SVO_Intro' ---
    // get current time
    t = SVO_IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *svo_intro_text* updates
    if (t >= 0.0 && svo_intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      svo_intro_text.tStart = t;  // (not accounting for frame time here)
      svo_intro_text.frameNStart = frameN;  // exact frame index
      
      svo_intro_text.setAutoDraw(true);
    }
    
    
    // if svo_intro_text is active this frame...
    if (svo_intro_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_svo_intro* updates
    if (t >= 0.0 && key_resp_svo_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_svo_intro.tStart = t;  // (not accounting for frame time here)
      key_resp_svo_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_svo_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_svo_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_svo_intro.clearEvents(); });
    }
    
    // if key_resp_svo_intro is active this frame...
    if (key_resp_svo_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_svo_intro.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_svo_intro_allKeys = _key_resp_svo_intro_allKeys.concat(theseKeys);
      if (_key_resp_svo_intro_allKeys.length > 0) {
        key_resp_svo_intro.keys = _key_resp_svo_intro_allKeys[_key_resp_svo_intro_allKeys.length - 1].name;  // just the last key pressed
        key_resp_svo_intro.rt = _key_resp_svo_intro_allKeys[_key_resp_svo_intro_allKeys.length - 1].rt;
        key_resp_svo_intro.duration = _key_resp_svo_intro_allKeys[_key_resp_svo_intro_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SVO_IntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function SVO_IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SVO_Intro' ---
    for (const thisComponent of SVO_IntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SVO_Intro.stopped', globalClock.getTime());
    key_resp_svo_intro.stop();
    // the Routine "SVO_Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function svo_loopLoopBegin(svo_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    svo_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'svo_conditions.xlsx',
      seed: undefined, name: 'svo_loop'
    });
    psychoJS.experiment.addLoop(svo_loop); // add the loop to the experiment
    currentLoop = svo_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSvo_loop of svo_loop) {
      snapshot = svo_loop.getSnapshot();
      svo_loopLoopScheduler.add(importConditions(snapshot));
      svo_loopLoopScheduler.add(SVO_RoutineRoutineBegin(snapshot));
      svo_loopLoopScheduler.add(SVO_RoutineRoutineEachFrame());
      svo_loopLoopScheduler.add(SVO_RoutineRoutineEnd(snapshot));
      svo_loopLoopScheduler.add(svo_loopLoopEndIteration(svo_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function svo_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(svo_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function svo_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function emotion_loopLoopBegin(emotion_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    emotion_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'emotion_items.xlsx',
      seed: undefined, name: 'emotion_loop'
    });
    psychoJS.experiment.addLoop(emotion_loop); // add the loop to the experiment
    currentLoop = emotion_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEmotion_loop of emotion_loop) {
      snapshot = emotion_loop.getSnapshot();
      emotion_loopLoopScheduler.add(importConditions(snapshot));
      emotion_loopLoopScheduler.add(Emotion_MeasurementRoutineBegin(snapshot));
      emotion_loopLoopScheduler.add(Emotion_MeasurementRoutineEachFrame());
      emotion_loopLoopScheduler.add(Emotion_MeasurementRoutineEnd(snapshot));
      emotion_loopLoopScheduler.add(emotion_loopLoopEndIteration(emotion_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function emotion_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(emotion_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function emotion_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function roundsLoopBegin(roundsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    rounds = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'rounds'
    });
    psychoJS.experiment.addLoop(rounds); // add the loop to the experiment
    currentLoop = rounds;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRound of rounds) {
      snapshot = rounds.getSnapshot();
      roundsLoopScheduler.add(importConditions(snapshot));
      roundsLoopScheduler.add(Decision_RoutineRoutineBegin(snapshot));
      roundsLoopScheduler.add(Decision_RoutineRoutineEachFrame());
      roundsLoopScheduler.add(Decision_RoutineRoutineEnd(snapshot));
      roundsLoopScheduler.add(Round_FeedbackRoutineBegin(snapshot));
      roundsLoopScheduler.add(Round_FeedbackRoutineEachFrame());
      roundsLoopScheduler.add(Round_FeedbackRoutineEnd(snapshot));
      roundsLoopScheduler.add(roundsLoopEndIteration(roundsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function roundsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(rounds);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function roundsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function SVO_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SVO_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SVO_RoutineClock.reset();
    routineTimer.reset();
    SVO_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    svo_text.setText(question);
    svo_slider.reset()
    psychoJS.experiment.addData('SVO_Routine.started', globalClock.getTime());
    SVO_RoutineMaxDuration = null
    // keep track of which components have finished
    SVO_RoutineComponents = [];
    SVO_RoutineComponents.push(svo_text);
    SVO_RoutineComponents.push(self_display);
    SVO_RoutineComponents.push(other_display);
    SVO_RoutineComponents.push(text_left);
    SVO_RoutineComponents.push(text_right);
    SVO_RoutineComponents.push(svo_slider);
    
    for (const thisComponent of SVO_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function SVO_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SVO_Routine' ---
    // get current time
    t = SVO_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    // 7点李克特量表：无需实时计算收益
    
    
    // *svo_text* updates
    if (t >= 0.0 && svo_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      svo_text.tStart = t;  // (not accounting for frame time here)
      svo_text.frameNStart = frameN;  // exact frame index
      
      svo_text.setAutoDraw(true);
    }
    
    
    // if svo_text is active this frame...
    if (svo_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *self_display* updates
    if (t >= 0.0 && self_display.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_display.tStart = t;  // (not accounting for frame time here)
      self_display.frameNStart = frameN;  // exact frame index
      
      self_display.setAutoDraw(true);
    }
    
    
    // if self_display is active this frame...
    if (self_display.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *other_display* updates
    if (t >= 0.0 && other_display.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      other_display.tStart = t;  // (not accounting for frame time here)
      other_display.frameNStart = frameN;  // exact frame index
      
      other_display.setAutoDraw(true);
    }
    
    
    // if other_display is active this frame...
    if (other_display.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_left* updates
    if (t >= 0.0 && text_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_left.tStart = t;  // (not accounting for frame time here)
      text_left.frameNStart = frameN;  // exact frame index
      
      text_left.setAutoDraw(true);
    }
    
    
    // if text_left is active this frame...
    if (text_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_right* updates
    if (t >= 0.0 && text_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_right.tStart = t;  // (not accounting for frame time here)
      text_right.frameNStart = frameN;  // exact frame index
      
      text_right.setAutoDraw(true);
    }
    
    
    // if text_right is active this frame...
    if (text_right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *svo_slider* updates
    if (t >= 0.0 && svo_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      svo_slider.tStart = t;  // (not accounting for frame time here)
      svo_slider.frameNStart = frameN;  // exact frame index
      
      svo_slider.setAutoDraw(true);
    }
    
    
    // if svo_slider is active this frame...
    if (svo_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check svo_slider for response to end Routine
    if (svo_slider.getRating() !== undefined && svo_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SVO_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function SVO_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SVO_Routine' ---
    for (const thisComponent of SVO_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SVO_Routine.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    rating = svo_slider.getRating();
    if ((rating !== null)) {
        if ((item_num <= 2)) {
            svo_prosocial += rating;
        } else if ((item_num <= 4)) {
            svo_individual += rating;
        } else {
            svo_competitive += rating;
        }
        svo_item_count += 1;
        psychoJS.experiment.addData(('SVO_' + item_num), rating);
    }
    psychoJS.experiment.addData('svo_slider.response', svo_slider.getRating());
    psychoJS.experiment.addData('svo_slider.rt', svo_slider.getRT());
    // the Routine "SVO_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Struggle_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Struggle_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Struggle_RoutineClock.reset();
    routineTimer.reset();
    Struggle_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from struggle_code
    current_round_display = 1;
    round_info_text = "\u3010\u5145\u7535\u6869\u914d\u989d\u3011\u7b2c 1 / 1 \u8f6e";
    input_quota.text = "";
    warning_text_struggle.text = "";
    opponent_status = "\u63d0\u793a\u540c\u5c0f\u533a\u6210\u5458\u4ee5\u53ca\u5bf9\u65b9B\u5c0f\u6210\u5458\u4e5f\u6b63\u5728\u9884\u7559\u5145\u7535\u6869\u3002";
    current_group = Number.parseInt(expInfo["group"]);
    
    round_info_struggle.setText(round_info_text);
    warning_text_struggle.setText('');
    input_quota.setText('');
    input_quota.refresh();
    input_quota.setText('');
    input_quota.setPlaceholder('输入0-20个');
    opponent_reminder_struggle.setText(opponent_status);
    submit_btn_struggle.setText('ok');
    // reset submit_btn_struggle to account for continued clicks & clear times on/off
    submit_btn_struggle.reset()
    submit_btn_struggle.wasClicked = false;
    psychoJS.experiment.addData('Struggle_Routine.started', globalClock.getTime());
    Struggle_RoutineMaxDuration = null
    // keep track of which components have finished
    Struggle_RoutineComponents = [];
    Struggle_RoutineComponents.push(round_info_struggle);
    Struggle_RoutineComponents.push(warning_text_struggle);
    Struggle_RoutineComponents.push(quota_instruction);
    Struggle_RoutineComponents.push(input_quota);
    Struggle_RoutineComponents.push(opponent_reminder_struggle);
    Struggle_RoutineComponents.push(submit_btn_struggle);
    
    for (const thisComponent of Struggle_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Struggle_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Struggle_Routine' ---
    // get current time
    t = Struggle_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from struggle_code
    if ((submit_btn_struggle.numClicks === 0)) {
        try {
            quota = (input_quota.text ? Number.parseInt(input_quota.text) : -1);
            if ((((quota >= 0) && (quota <= 20)))) {
                score_preview.text = `您主张为A小区预留 ${quota}% 的充电桩配额\nB小区可使用 ${(100 - quota)}%`;
            } else {
                score_preview.text = "请输入0-100之间的数字";
            }
        } catch(e) {
            score_preview.text = "请输入有效的数字";
        }
    }
    
    // *round_info_struggle* updates
    if (t >= 0.0 && round_info_struggle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      round_info_struggle.tStart = t;  // (not accounting for frame time here)
      round_info_struggle.frameNStart = frameN;  // exact frame index
      
      round_info_struggle.setAutoDraw(true);
    }
    
    
    // if round_info_struggle is active this frame...
    if (round_info_struggle.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warning_text_struggle* updates
    if (t >= 0.0 && warning_text_struggle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warning_text_struggle.tStart = t;  // (not accounting for frame time here)
      warning_text_struggle.frameNStart = frameN;  // exact frame index
      
      warning_text_struggle.setAutoDraw(true);
    }
    
    
    // if warning_text_struggle is active this frame...
    if (warning_text_struggle.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *quota_instruction* updates
    if (t >= 0.0 && quota_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quota_instruction.tStart = t;  // (not accounting for frame time here)
      quota_instruction.frameNStart = frameN;  // exact frame index
      
      quota_instruction.setAutoDraw(true);
    }
    
    
    // if quota_instruction is active this frame...
    if (quota_instruction.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *input_quota* updates
    if (t >= 0.0 && input_quota.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_quota.tStart = t;  // (not accounting for frame time here)
      input_quota.frameNStart = frameN;  // exact frame index
      
      input_quota.setAutoDraw(true);
    }
    
    
    // if input_quota is active this frame...
    if (input_quota.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *opponent_reminder_struggle* updates
    if (t >= 0.0 && opponent_reminder_struggle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opponent_reminder_struggle.tStart = t;  // (not accounting for frame time here)
      opponent_reminder_struggle.frameNStart = frameN;  // exact frame index
      
      opponent_reminder_struggle.setAutoDraw(true);
    }
    
    
    // if opponent_reminder_struggle is active this frame...
    if (opponent_reminder_struggle.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *submit_btn_struggle* updates
    if (t >= 0 && submit_btn_struggle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_btn_struggle.tStart = t;  // (not accounting for frame time here)
      submit_btn_struggle.frameNStart = frameN;  // exact frame index
      
      submit_btn_struggle.setAutoDraw(true);
      submit_btn_struggle.status = PsychoJS.Status.STARTED;
    }


    // check whether submit_btn_struggle has been pressed
    if (submit_btn_struggle.status === PsychoJS.Status.STARTED && submit_btn_struggle.isClicked) {
      if (!submit_btn_struggle.wasClicked) {
        // store time of first click
        submit_btn_struggle.timesOn.push(submit_btn_struggle.clock.getTime());
        submit_btn_struggle.timesOff.push(submit_btn_struggle.clock.getTime());
        // end routine on first click
        continueRoutine = false;
      }
      submit_btn_struggle.wasClicked = true;
    } else if (submit_btn_struggle.status === PsychoJS.Status.STARTED) {
      submit_btn_struggle.wasClicked = false;
    } else {
      // keep clock at 0 if submit_btn_struggle hasn't started / has finished
      submit_btn_struggle.clock.reset();
      // if submit_btn_struggle is clicked next frame, it is a new click
      submit_btn_struggle.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Struggle_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Struggle_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Struggle_Routine' ---
    for (const thisComponent of Struggle_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Struggle_Routine.stopped', globalClock.getTime());
    // Run 'End Routine' code from struggle_code
    quota = (input_quota.text ? Number.parseInt(input_quota.text) : 0);
    psychoJS.experiment.addData("struggle_quota", quota);
    opponent_quota = 80;
    actual_quota = 20;
    psychoJS.experiment.addData("opponent_quota", opponent_quota);
    psychoJS.experiment.addData("actual_quota", actual_quota);
    current_group = Number.parseInt(expInfo["group"]);
    if ((current_group === 1)) {
        conflict_feedback = ((((((("\u3010\u5145\u7535\u6869\u914d\u989d\u7ed3\u679c\u3011\n\n" + `您的预留主张：为A小区预留 ${quota}% 的充电桩
    `
    ) + "\u26a0\ufe0f \u7136\u800c\uff0c\u76d1\u6d4b\u53d1\u73b0\uff1a\u5bf9\u624b'B\u5c0f\u533a'\u91c7\u53d6\u4e86\u6fc0\u8fdb\u62a2\u5360\u7b56\u7565\uff01\n") + `他选择强行占据了 ${opponent_quota}% 的充电桩配额。
    `) + `这导致我方A小区实际仅获得 ${actual_quota}% 的充电配额。
    `) + "\u60a8\u6240\u5728\u793e\u533a\u7684\u65b0\u80fd\u6e90\u8f66\u4e3b\u9762\u4e34\u4e25\u91cd\u7684\u5145\u7535\u56f0\u96be\u3002\n\n\ud83d\ude1e\n") + "\u8bf7\u8bb0\u4f4f\uff1a\u63a5\u4e0b\u6765\u60a8\u5c06\u7ee7\u7eed\u4e0e\u3010\u8fd9\u652fB\u5c0f\u533a\u3011\u8fdb\u884c\u51b3\u7b56\u4e92\u52a8\u3002\n\n") + "\u8bf7\u6309\u7a7a\u683c\u952e\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u3002");
    } else {
        if ((current_group === 2)) {
            conflict_feedback = (((((((("\u3010\u5145\u7535\u6869\u914d\u989d\u7ed3\u679c\u3011\n\n" + `您的预留主张：为A小区预留 ${quota}% 的充电桩
    `
    ) + "\u26a0\ufe0f \u7136\u800c\uff0c\u76d1\u6d4b\u53d1\u73b0\uff1a\u5bf9\u624b'B\u5c0f\u533a'\u91c7\u53d6\u4e86\u6fc0\u8fdb\u62a2\u5360\u7b56\u7565\uff01\n") + `他们选择强行占据了 ${opponent_quota}% 的充电桩配额！
    `) + `这导致我方A小区实际仅获得 ${actual_quota}% 的充电配额。
    `) + "\u60a8\u6240\u5728\u793e\u533a\u7684\u65b0\u80fd\u6e90\u8f66\u4e3b\u9762\u4e34\u4e25\u91cd\u7684\u5145\u7535\u56f0\u96be\u3002\n\n\ud83d\ude1e\n") + "\u8bf7\u8bb0\u4f4f\uff1a\u63a5\u4e0b\u6765\u60a8\u5c06\u9762\u5bf9\u3010\u90a3\u652f\u5bfc\u81f4\u635f\u5931\u7684B\u5c0f\u533a\u3011\uff01\n") + "\u6b63\u662f\u8fd9\u652f\u961f\u4f0d\u7684\u62a2\u5360\u884c\u4e3a\u9020\u6210\u4e86\u6211\u65b9\u7684\u5145\u7535\u56f0\u5883\uff01\n\n") + "\u8bf7\u6309\u7a7a\u683c\u952e\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u3002");
        } else {
            conflict_feedback = ((((`【第1轮结算】
    `
     + `您的主张：${quota}%
    `) + `对方强行占据：${opponent_quota}%
    `) + `我方实际：${actual_quota}%
    `
    ) + "\u8bf7\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002");
        }
    }
    psychoJS.experiment.addData("conflict_feedback_text", conflict_feedback);
    
    psychoJS.experiment.addData('input_quota.text',input_quota.text)
    psychoJS.experiment.addData('submit_btn_struggle.numClicks', submit_btn_struggle.numClicks);
    psychoJS.experiment.addData('submit_btn_struggle.timesOn', submit_btn_struggle.timesOn);
    psychoJS.experiment.addData('submit_btn_struggle.timesOff', submit_btn_struggle.timesOff);
    // the Routine "Struggle_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Conflict_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Conflict_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Conflict_RoutineClock.reset();
    routineTimer.reset();
    Conflict_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    if (((Number.parseInt(expInfo["group"]) === 1) || (Number.parseInt(expInfo["group"]) === 2))) {
        conflict_feedback = "\u3010\u7b2c\u4e00\u8f6e\u7ed3\u7b97\u62a5\u544a\u3011\n\n\u76d1\u6d4b\u53d1\u73b0\uff1a\u5728\u521a\u624d\u7684\u4e92\u52a8\u4e2d\uff0c\u5bf9\u624b\u201cB\u5c0f\u533a\u201d\u91c7\u53d6\u4e86\u5f3a\u529b\u6e17\u900f\u7b56\u7565\u3002\n\u4ed6\u4eec\u91c7\u7528\u96c6\u4f53\u9884\u7559\u5927\u91cf\u5145\u7535\u6869\u7684\u65b9\u5f0f\u3002\n\u5355\u65b9\u9762\u5f3a\u884c\u9501\u5b9a\u4e86\u793e\u533a 80% \u7684\u5145\u7535\u8d44\u6e90 \u3002\n\u8fd9\u5bfc\u81f4\u6211\u65b9A\u5c0f\u533a\u7684\u5927\u90e8\u5206\u65b0\u80fd\u6e90\u8f66\u8f86\u65e0\u6cd5\u6b63\u5e38\u5145\u7535\u3002\n\n\u8bf7\u6309\u7a7a\u683c\u952e\u67e5\u770b\u540e\u7eed\u4efb\u52a1\u3002";
    } else {
        conflict_feedback = "\u7b2c\u4e00\u8f6e\u8bc4\u4f30\u5df2\u7ed3\u675f\u3002\u8bf7\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002";
    }
    
    feedback_display.setText(conflict_feedback);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('Conflict_Routine.started', globalClock.getTime());
    Conflict_RoutineMaxDuration = null
    // keep track of which components have finished
    Conflict_RoutineComponents = [];
    Conflict_RoutineComponents.push(feedback_display);
    Conflict_RoutineComponents.push(key_resp_2);
    
    for (const thisComponent of Conflict_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Conflict_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Conflict_Routine' ---
    // get current time
    t = Conflict_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_display* updates
    if (t >= 0.0 && feedback_display.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_display.tStart = t;  // (not accounting for frame time here)
      feedback_display.frameNStart = frameN;  // exact frame index
      
      feedback_display.setAutoDraw(true);
    }
    
    
    // if feedback_display is active this frame...
    if (feedback_display.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Conflict_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Conflict_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Conflict_Routine' ---
    for (const thisComponent of Conflict_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Conflict_Routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Conflict_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Emotion_IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Emotion_Intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Emotion_IntroClock.reset();
    routineTimer.reset();
    Emotion_IntroMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_10
    intro_text_emotion.alignText = "left";
    intro_text_emotion.anchor = "center";
    
    intro_key_emotion.keys = undefined;
    intro_key_emotion.rt = undefined;
    _intro_key_emotion_allKeys = [];
    psychoJS.experiment.addData('Emotion_Intro.started', globalClock.getTime());
    Emotion_IntroMaxDuration = null
    // keep track of which components have finished
    Emotion_IntroComponents = [];
    Emotion_IntroComponents.push(intro_text_emotion);
    Emotion_IntroComponents.push(intro_key_emotion);
    
    for (const thisComponent of Emotion_IntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Emotion_IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Emotion_Intro' ---
    // get current time
    t = Emotion_IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text_emotion* updates
    if (t >= 0.0 && intro_text_emotion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_emotion.tStart = t;  // (not accounting for frame time here)
      intro_text_emotion.frameNStart = frameN;  // exact frame index
      
      intro_text_emotion.setAutoDraw(true);
    }
    
    
    // if intro_text_emotion is active this frame...
    if (intro_text_emotion.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *intro_key_emotion* updates
    if (t >= 0.0 && intro_key_emotion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_key_emotion.tStart = t;  // (not accounting for frame time here)
      intro_key_emotion.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { intro_key_emotion.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { intro_key_emotion.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { intro_key_emotion.clearEvents(); });
    }
    
    // if intro_key_emotion is active this frame...
    if (intro_key_emotion.status === PsychoJS.Status.STARTED) {
      let theseKeys = intro_key_emotion.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _intro_key_emotion_allKeys = _intro_key_emotion_allKeys.concat(theseKeys);
      if (_intro_key_emotion_allKeys.length > 0) {
        intro_key_emotion.keys = _intro_key_emotion_allKeys[_intro_key_emotion_allKeys.length - 1].name;  // just the last key pressed
        intro_key_emotion.rt = _intro_key_emotion_allKeys[_intro_key_emotion_allKeys.length - 1].rt;
        intro_key_emotion.duration = _intro_key_emotion_allKeys[_intro_key_emotion_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Emotion_IntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Emotion_IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Emotion_Intro' ---
    for (const thisComponent of Emotion_IntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Emotion_Intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(intro_key_emotion.corr, level);
    }
    psychoJS.experiment.addData('intro_key_emotion.keys', intro_key_emotion.keys);
    if (typeof intro_key_emotion.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('intro_key_emotion.rt', intro_key_emotion.rt);
        psychoJS.experiment.addData('intro_key_emotion.duration', intro_key_emotion.duration);
        routineTimer.reset();
        }
    
    intro_key_emotion.stop();
    // the Routine "Emotion_Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Emotion_MeasurementRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Emotion_Measurement' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Emotion_MeasurementClock.reset();
    routineTimer.reset();
    Emotion_MeasurementMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    emotion_slider.reset();
    
    text_4.setText(question);
    emotion_slider.reset()
    psychoJS.experiment.addData('Emotion_Measurement.started', globalClock.getTime());
    Emotion_MeasurementMaxDuration = null
    // keep track of which components have finished
    Emotion_MeasurementComponents = [];
    Emotion_MeasurementComponents.push(text_4);
    Emotion_MeasurementComponents.push(emotion_slider);
    
    for (const thisComponent of Emotion_MeasurementComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Emotion_MeasurementRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Emotion_Measurement' ---
    // get current time
    t = Emotion_MeasurementClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // if text_4 is active this frame...
    if (text_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *emotion_slider* updates
    if (t >= 0.0 && emotion_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      emotion_slider.tStart = t;  // (not accounting for frame time here)
      emotion_slider.frameNStart = frameN;  // exact frame index
      
      emotion_slider.setAutoDraw(true);
    }
    
    
    // if emotion_slider is active this frame...
    if (emotion_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check emotion_slider for response to end Routine
    if (emotion_slider.getRating() !== undefined && emotion_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Emotion_MeasurementComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Emotion_MeasurementRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Emotion_Measurement' ---
    for (const thisComponent of Emotion_MeasurementComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Emotion_Measurement.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    current_rating = emotion_slider.getRating();
    if ((current_rating !== null)) {
        psychoJS.experiment.addData(item_id, current_rating);
        psychoJS.experiment.addData((item_id + "_RT"), emotion_slider.getRT());
    } else {
        psychoJS.experiment.addData(item_id, "None");
    }
    
    psychoJS.experiment.addData('emotion_slider.response', emotion_slider.getRating());
    psychoJS.experiment.addData('emotion_slider.rt', emotion_slider.getRT());
    // the Routine "Emotion_Measurement" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Emotion_Final_SubmitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Emotion_Final_Submit' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Emotion_Final_SubmitClock.reset();
    routineTimer.reset();
    Emotion_Final_SubmitMaxDurationReached = false;
    // update component parameters for each repeat
    // reset final_confirm_btn to account for continued clicks & clear times on/off
    final_confirm_btn.reset()
    final_confirm_btn.wasClicked = false;
    psychoJS.experiment.addData('Emotion_Final_Submit.started', globalClock.getTime());
    Emotion_Final_SubmitMaxDuration = null
    // keep track of which components have finished
    Emotion_Final_SubmitComponents = [];
    Emotion_Final_SubmitComponents.push(text_2);
    Emotion_Final_SubmitComponents.push(final_confirm_btn);
    
    for (const thisComponent of Emotion_Final_SubmitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Emotion_Final_SubmitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Emotion_Final_Submit' ---
    // get current time
    t = Emotion_Final_SubmitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *final_confirm_btn* updates
    if (t >= 0 && final_confirm_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_confirm_btn.tStart = t;  // (not accounting for frame time here)
      final_confirm_btn.frameNStart = frameN;  // exact frame index
      
      final_confirm_btn.setAutoDraw(true);
      final_confirm_btn.status = PsychoJS.Status.STARTED;
    }


    // check whether final_confirm_btn has been pressed
    if (final_confirm_btn.status === PsychoJS.Status.STARTED && final_confirm_btn.isClicked) {
      if (!final_confirm_btn.wasClicked) {
        // store time of first click
        final_confirm_btn.timesOn.push(final_confirm_btn.clock.getTime());
        final_confirm_btn.timesOff.push(final_confirm_btn.clock.getTime());
        // end routine on first click
        continueRoutine = false;
      }
      final_confirm_btn.wasClicked = true;
    } else if (final_confirm_btn.status === PsychoJS.Status.STARTED) {
      final_confirm_btn.wasClicked = false;
    } else {
      // keep clock at 0 if final_confirm_btn hasn't started / has finished
      final_confirm_btn.clock.reset();
      // if final_confirm_btn is clicked next frame, it is a new click
      final_confirm_btn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Emotion_Final_SubmitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Emotion_Final_SubmitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Emotion_Final_Submit' ---
    for (const thisComponent of Emotion_Final_SubmitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Emotion_Final_Submit.stopped', globalClock.getTime());
    psychoJS.experiment.addData('final_confirm_btn.numClicks', final_confirm_btn.numClicks);
    psychoJS.experiment.addData('final_confirm_btn.timesOn', final_confirm_btn.timesOn);
    psychoJS.experiment.addData('final_confirm_btn.timesOff', final_confirm_btn.timesOff);
    // the Routine "Emotion_Final_Submit" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function secondRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'second' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    secondClock.reset();
    routineTimer.reset();
    secondMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('second.started', globalClock.getTime());
    secondMaxDuration = null
    // keep track of which components have finished
    secondComponents = [];
    secondComponents.push(text_3);
    secondComponents.push(key_resp_6);
    
    for (const thisComponent of secondComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function secondRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'second' ---
    // get current time
    t = secondClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    // if key_resp_6 is active this frame...
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of secondComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function secondRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'second' ---
    for (const thisComponent of secondComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('second.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "second" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Transition_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Transition_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Transition_RoutineClock.reset();
    routineTimer.reset();
    Transition_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    if ((expInfo["group"] === "3")) {
        continueRoutine = false;
    }
    try {
        current_group = Number.parseInt(expInfo["group"]);
    } catch(e) {
        current_group = 3;
    }
    if ((current_group === 1)) {
        reminder_text = "\u63d0\u793a\uff1a\u63a5\u4e0b\u6765\u7684\u4e92\u52a8\u4e2d\uff0c\u60a8\u7684\u5bf9\u624b\u4ecd\u662f\u3010\u521a\u624d\u90a3\u652f\u3011\u5bfc\u81f4\u8d44\u6e90\u635f\u5931\u7684B\u5c0f\u533a\u3002";
    } else {
        if ((current_group === 2)) {
            reminder_text = "\u63d0\u793a\uff1a\u7cfb\u7edf\u5df2\u91cd\u65b0\u5339\u914d\u3002\u63a5\u4e0b\u6765\u7684\u4e92\u52a8\u4e2d\uff0c\u60a8\u7684\u5bf9\u624b\u662f\u4e00\u652f\u3010\u5168\u65b0\u3011\u7684C\u5c0f\u533a\u3002";
        } else {
            reminder_text = "\u63d0\u793a\uff1a\u63a5\u4e0b\u6765\u7684\u4e92\u52a8\u4e2d\uff0c\u60a8\u7684\u5bf9\u624b\u662f\u4e00\u652f\u968f\u673a\u5339\u914d\u7684B\u5c0f\u533a\u3002";
        }
    }
    total_score = 0;
    
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('Transition_Routine.started', globalClock.getTime());
    Transition_RoutineMaxDuration = null
    // keep track of which components have finished
    Transition_RoutineComponents = [];
    Transition_RoutineComponents.push(transition_msg);
    Transition_RoutineComponents.push(key_resp_3);
    
    for (const thisComponent of Transition_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Transition_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Transition_Routine' ---
    // get current time
    t = Transition_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *transition_msg* updates
    if (t >= 0.0 && transition_msg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      transition_msg.tStart = t;  // (not accounting for frame time here)
      transition_msg.frameNStart = frameN;  // exact frame index
      
      transition_msg.setAutoDraw(true);
    }
    
    
    // if transition_msg is active this frame...
    if (transition_msg.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Transition_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Transition_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Transition_Routine' ---
    for (const thisComponent of Transition_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Transition_Routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Transition_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function voteRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'vote' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    voteClock.reset();
    routineTimer.reset();
    voteMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    psychoJS.experiment.addData('vote.started', globalClock.getTime());
    voteMaxDuration = null
    // keep track of which components have finished
    voteComponents = [];
    voteComponents.push(text_8);
    voteComponents.push(key_resp_9);
    
    for (const thisComponent of voteComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function voteRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'vote' ---
    // get current time
    t = voteClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // if text_8 is active this frame...
    if (text_8.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    // if key_resp_9 is active this frame...
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of voteComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function voteRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'vote' ---
    for (const thisComponent of voteComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('vote.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "vote" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ruleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rule' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ruleClock.reset();
    routineTimer.reset();
    ruleMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    psychoJS.experiment.addData('rule.started', globalClock.getTime());
    ruleMaxDuration = null
    // keep track of which components have finished
    ruleComponents = [];
    ruleComponents.push(text_7);
    ruleComponents.push(key_resp_8);
    
    for (const thisComponent of ruleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ruleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rule' ---
    // get current time
    t = ruleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // if text_7 is active this frame...
    if (text_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    // if key_resp_8 is active this frame...
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ruleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ruleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rule' ---
    for (const thisComponent of ruleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rule.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "rule" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Decision_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Decision_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Decision_RoutineClock.reset();
    routineTimer.reset();
    Decision_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    current_round_display = (rounds.thisN + 1);
    current_group = Number.parseInt(expInfo["group"]);
    if ((current_round_display === 1)) {
        round_info_text = "\u3010\u7ec3\u4e60\u8f6e\u3011\u719f\u6089\u4efb\u52a1\u6d41\u7a0b\uff08\u672c\u8f6e\u7ed3\u679c\u4e0d\u8ba1\u5165\u6700\u7ec8\u6536\u76ca\uff09";
        is_practice = true;
    } else {
        round_info_text = "\u3010\u6b63\u5f0f\u51b3\u7b56\u3011\u8bf7\u8ba4\u771f\u51b3\u7b56\uff08\u672c\u8f6e\u7ed3\u679c\u5c06\u8ba1\u5165\u6700\u7ec8\u6536\u76ca\uff09";
        is_practice = false;
    }
    if (is_practice) {
        opponent_status = "\u63d0\u793a\uff1a\u8fd9\u662f\u7ec3\u4e60\u8f6e\uff0c\u8bf7\u719f\u6089\u64cd\u4f5c\u754c\u9762\u3002";
    } else {
        if ((current_group === 2)) {
            opponent_status = "\u63d0\u793a\uff1a\u4f60\u6b63\u9762\u5bf9C\u5c0f\u533a\u8fdb\u884c\u793e\u533a\u4efb\u52a1";
        } else {
            if ((current_group === 1)) {
                opponent_status = "\u63d0\u793a\uff1a\u63a5\u4e0b\u6765\u7684\u4e92\u52a8\u4e2d\uff0c\u60a8\u7684\u5bf9\u624b\u4ecd\u662f\u3010\u521a\u624d\u90a3\u652f\u3011\u5bfc\u81f4\u8d44\u6e90\u635f\u5931\u7684B\u5c0f\u533a\u3002";
            } else {
                opponent_status = "\u63d0\u793a\uff1a\u8bf7\u6309\u7167\u60a8\u7684\u610f\u613f\u8fdb\u884c\u8d44\u6e90\u5206\u914d\u3002";
            }
        }
    }
    if ((current_group === 2)) {
        label_B_text = (((((("\u9009\u9879B" + "\n") + "\u81ea\u5df1+1\u7968") + "\n") + "A\u5c0f\u533a\u5176\u4ed6\u6210\u5458+1\u7968") + "\n") + "C\u5c0f\u533a\u6210\u5458\u4e0d\u53d8");
        label_C_text = (((((("\u9009\u9879C" + "\n") + "\u81ea\u5df1+1\u7968") + "\n") + "A\u5c0f\u533a\u5176\u4ed6\u6210\u5458+1\u7968") + "\n") + "C\u5c0f\u533a\u6210\u5458\u5404-1\u7968");
        opponent_name = "C\u5c0f\u533a";
    } else {
        label_B_text = (((((("\u9009\u9879B" + "\n") + "\u81ea\u5df1+1\u7968") + "\n") + "A\u5c0f\u533a\u5176\u4ed6\u6210\u5458+1\u7968") + "\n") + "B\u5c0f\u533a\u6210\u5458\u4e0d\u53d8");
        label_C_text = (((((("\u9009\u9879C" + "\n") + "\u81ea\u5df1+1\u7968") + "\n") + "A\u5c0f\u533a\u5176\u4ed6\u6210\u5458+1\u7968") + "\n") + "B\u5c0f\u533a\u6210\u5458\u5404-1\u7968");
        opponent_name = "B\u5c0f\u533a";
    }
    input_A.text = "";
    input_B.text = "";
    input_C.text = "";
    warning_text.text = "";
    
    round_info.setText(round_info_text);
    warning_text.setText('');
    input_A.setText('');
    input_A.refresh();
    input_A.setText('');
    input_A.setPlaceholder('请输入票数（0-10）');
    input_B.setText('');
    input_B.refresh();
    input_B.setText('');
    input_B.setPlaceholder('请输入票数（0-10）');
    input_C.setText('');
    input_C.refresh();
    input_C.setText('');
    input_C.setPlaceholder('请输入票数（0-10）');
    opponent_reminder.setText(opponent_status);
    submit_btn.setText('ok');
    // reset submit_btn to account for continued clicks & clear times on/off
    submit_btn.reset()
    submit_btn.wasClicked = false;
    label_B.setText(label_B_text);
    label_C.setText(label_C_text);
    psychoJS.experiment.addData('Decision_Routine.started', globalClock.getTime());
    Decision_RoutineMaxDuration = null
    // keep track of which components have finished
    Decision_RoutineComponents = [];
    Decision_RoutineComponents.push(round_info);
    Decision_RoutineComponents.push(warning_text);
    Decision_RoutineComponents.push(input_A);
    Decision_RoutineComponents.push(input_B);
    Decision_RoutineComponents.push(input_C);
    Decision_RoutineComponents.push(vote_sum_warning);
    Decision_RoutineComponents.push(pool_A_shape);
    Decision_RoutineComponents.push(pool_B_shape);
    Decision_RoutineComponents.push(pool_C_shape);
    Decision_RoutineComponents.push(opponent_reminder);
    Decision_RoutineComponents.push(submit_btn);
    Decision_RoutineComponents.push(label_A);
    Decision_RoutineComponents.push(label_B);
    Decision_RoutineComponents.push(label_C);
    
    for (const thisComponent of Decision_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Decision_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Decision_Routine' ---
    // get current time
    t = Decision_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    if ((submit_btn.numClicks === 0)) {
        try {
            val_a = (input_A.text ? Number.parseInt(input_A.text) : 0);
            val_b = (input_B.text ? Number.parseInt(input_B.text) : 0);
            val_c = (input_C.text ? Number.parseInt(input_C.text) : 0);
            self_score = (((val_a * 2) + val_b) + val_c);
            teammate_score = (val_b + val_c);
            opponent_score = (- val_c);
            score_preview.text = `本轮预计收益：
    自己：+${self_score} 分 | 队友：每人 +${teammate_score} 分 | ${opponent_name}：每人 ${opponent_score} 分`
    ;
        } catch(e) {
            score_preview.text = "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6570\u5b57\u4ee5\u9884\u89c8\u5206\u6570";
        }
    }
    
    
    // *round_info* updates
    if (t >= 0.0 && round_info.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      round_info.tStart = t;  // (not accounting for frame time here)
      round_info.frameNStart = frameN;  // exact frame index
      
      round_info.setAutoDraw(true);
    }
    
    
    // if round_info is active this frame...
    if (round_info.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warning_text* updates
    if (t >= 0.0 && warning_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warning_text.tStart = t;  // (not accounting for frame time here)
      warning_text.frameNStart = frameN;  // exact frame index
      
      warning_text.setAutoDraw(true);
    }
    
    
    // if warning_text is active this frame...
    if (warning_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *input_A* updates
    if (t >= 0.0 && input_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_A.tStart = t;  // (not accounting for frame time here)
      input_A.frameNStart = frameN;  // exact frame index
      
      input_A.setAutoDraw(true);
    }
    
    
    // if input_A is active this frame...
    if (input_A.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *input_B* updates
    if (t >= 0.0 && input_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_B.tStart = t;  // (not accounting for frame time here)
      input_B.frameNStart = frameN;  // exact frame index
      
      input_B.setAutoDraw(true);
    }
    
    
    // if input_B is active this frame...
    if (input_B.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *input_C* updates
    if (t >= 0.0 && input_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_C.tStart = t;  // (not accounting for frame time here)
      input_C.frameNStart = frameN;  // exact frame index
      
      input_C.setAutoDraw(true);
    }
    
    
    // if input_C is active this frame...
    if (input_C.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pool_A_shape* updates
    if (t >= 0.0 && pool_A_shape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pool_A_shape.tStart = t;  // (not accounting for frame time here)
      pool_A_shape.frameNStart = frameN;  // exact frame index
      
      pool_A_shape.setAutoDraw(true);
    }
    
    
    // if pool_A_shape is active this frame...
    if (pool_A_shape.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pool_B_shape* updates
    if (t >= 0.0 && pool_B_shape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pool_B_shape.tStart = t;  // (not accounting for frame time here)
      pool_B_shape.frameNStart = frameN;  // exact frame index
      
      pool_B_shape.setAutoDraw(true);
    }
    
    
    // if pool_B_shape is active this frame...
    if (pool_B_shape.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pool_C_shape* updates
    if (t >= 0.0 && pool_C_shape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pool_C_shape.tStart = t;  // (not accounting for frame time here)
      pool_C_shape.frameNStart = frameN;  // exact frame index
      
      pool_C_shape.setAutoDraw(true);
    }
    
    
    // if pool_C_shape is active this frame...
    if (pool_C_shape.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *opponent_reminder* updates
    if (t >= 0.0 && opponent_reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opponent_reminder.tStart = t;  // (not accounting for frame time here)
      opponent_reminder.frameNStart = frameN;  // exact frame index
      
      opponent_reminder.setAutoDraw(true);
    }
    
    
    // if opponent_reminder is active this frame...
    if (opponent_reminder.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *submit_btn* updates
    if (t >= 0 && submit_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_btn.tStart = t;  // (not accounting for frame time here)
      submit_btn.frameNStart = frameN;  // exact frame index
      
      submit_btn.setAutoDraw(true);
      submit_btn.status = PsychoJS.Status.STARTED;
    }


    // check whether submit_btn has been pressed
    if (submit_btn.status === PsychoJS.Status.STARTED && submit_btn.isClicked) {
      if (!submit_btn.wasClicked) {
        // store time of first click
        submit_btn.timesOn.push(submit_btn.clock.getTime());
        submit_btn.timesOff.push(submit_btn.clock.getTime());
        // end routine on first click
        continueRoutine = false;
      }
      submit_btn.wasClicked = true;
    } else if (submit_btn.status === PsychoJS.Status.STARTED) {
      submit_btn.wasClicked = false;
    } else {
      // keep clock at 0 if submit_btn hasn't started / has finished
      submit_btn.clock.reset();
      submit_btn.wasClicked = false;
    }
    
    // *label_A* updates
    if (t >= 0.0 && label_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_A.tStart = t;  // (not accounting for frame time here)
      label_A.frameNStart = frameN;  // exact frame index
      
      label_A.setAutoDraw(true);
    }
    
    
    // if label_A is active this frame...
    if (label_A.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_B* updates
    if (t >= 0.0 && label_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_B.tStart = t;  // (not accounting for frame time here)
      label_B.frameNStart = frameN;  // exact frame index
      
      label_B.setAutoDraw(true);
    }
    
    
    // if label_B is active this frame...
    if (label_B.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_C* updates
    if (t >= 0.0 && label_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_C.tStart = t;  // (not accounting for frame time here)
      label_C.frameNStart = frameN;  // exact frame index
      
      label_C.setAutoDraw(true);
    }
    
    
    // if label_C is active this frame...
    if (label_C.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Decision_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Decision_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Decision_Routine' ---
    for (const thisComponent of Decision_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Decision_Routine.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    quota = (input_quota.text ? Number.parseInt(input_quota.text) : 0);
    if (quota > 50) {
        opponent_quota = Math.min((quota + 20), 90);
    } else {
        opponent_quota = 70;
    }
    actual_quota = Math.max(0, (100 - opponent_quota));
    psychoJS.experiment.addData("struggle_quota", quota);
    psychoJS.experiment.addData("opponent_quota", opponent_quota);
    psychoJS.experiment.addData("actual_quota", actual_quota);
    ;
    
    psychoJS.experiment.addData('input_A.text',input_A.text)
    psychoJS.experiment.addData('input_B.text',input_B.text)
    psychoJS.experiment.addData('input_C.text',input_C.text)
    psychoJS.experiment.addData('submit_btn.numClicks', submit_btn.numClicks);
    psychoJS.experiment.addData('submit_btn.timesOn', submit_btn.timesOn);
    psychoJS.experiment.addData('submit_btn.timesOff', submit_btn.timesOff);
    // Calculate scores for feedback
    val_a = (input_A.text ? Number.parseInt(input_A.text) : 0);
    val_b = (input_B.text ? Number.parseInt(input_B.text) : 0);
    val_c = (input_C.text ? Number.parseInt(input_C.text) : 0);
    self_score = ((val_a * 2) + val_b + val_c);
    teammate_score = (val_b + val_c);
    opponent_score = (-val_c);
    // the Routine "Decision_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Round_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Round_Feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Round_FeedbackClock.reset();
    routineTimer.reset();
    Round_FeedbackMaxDurationReached = false;
    // update component parameters for each repeat
    feedback_msg = `本轮得分反馈\n\n您的选择：\n选项A: ${val_a || 0}分 | 选项B: ${val_b || 0}分 | 选项C: ${val_c || 0}分\n\n本轮收益：\n您自己：+${self_score || 0}分\n队友每人：+${teammate_score || 0}分\n对手每人：${opponent_score || 0}分\n\n按空格键继续`;
    feedback_text.setText(feedback_msg);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('Round_Feedback.started', globalClock.getTime());
    Round_FeedbackMaxDuration = null
    // keep track of which components have finished
    Round_FeedbackComponents = [];
    Round_FeedbackComponents.push(feedback_text);
    Round_FeedbackComponents.push(key_resp_5);
    
    for (const thisComponent of Round_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Round_FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Round_Feedback' ---
    // get current time
    t = Round_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    
    // if feedback_text is active this frame...
    if (feedback_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Round_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Round_FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Round_Feedback' ---
    for (const thisComponent of Round_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Round_Feedback.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Round_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Experiment_EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Experiment_End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Experiment_EndClock.reset();
    routineTimer.reset();
    Experiment_EndMaxDurationReached = false;
    // update component parameters for each repeat
    end_key.keys = undefined;
    end_key.rt = undefined;
    _end_key_allKeys = [];
    psychoJS.experiment.addData('Experiment_End.started', globalClock.getTime());
    Experiment_EndMaxDuration = null
    // keep track of which components have finished
    Experiment_EndComponents = [];
    Experiment_EndComponents.push(end_msg_text);
    Experiment_EndComponents.push(end_key);
    
    for (const thisComponent of Experiment_EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Experiment_EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Experiment_End' ---
    // get current time
    t = Experiment_EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_msg_text* updates
    if (t >= 0.0 && end_msg_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_msg_text.tStart = t;  // (not accounting for frame time here)
      end_msg_text.frameNStart = frameN;  // exact frame index
      
      end_msg_text.setAutoDraw(true);
    }
    
    
    // if end_msg_text is active this frame...
    if (end_msg_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *end_key* updates
    if (t >= 0.0 && end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key.tStart = t;  // (not accounting for frame time here)
      end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key.clearEvents(); });
    }
    
    // if end_key is active this frame...
    if (end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _end_key_allKeys = _end_key_allKeys.concat(theseKeys);
      if (_end_key_allKeys.length > 0) {
        end_key.keys = _end_key_allKeys[_end_key_allKeys.length - 1].name;  // just the last key pressed
        end_key.rt = _end_key_allKeys[_end_key_allKeys.length - 1].rt;
        end_key.duration = _end_key_allKeys[_end_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Experiment_EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Experiment_EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Experiment_End' ---
    for (const thisComponent of Experiment_EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Experiment_End.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_key.corr, level);
    }
    psychoJS.experiment.addData('end_key.keys', end_key.keys);
    if (typeof end_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_key.rt', end_key.rt);
        psychoJS.experiment.addData('end_key.duration', end_key.duration);
        routineTimer.reset();
        }
    
    end_key.stop();
    // the Routine "Experiment_End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  // Run 'End Experiment' code from code_4
  if ((svo_item_count === 6)) {
      prosocial_score = (svo_prosocial / 2.0);
      individual_score = (svo_individual / 2.0);
      competitive_score = (svo_competitive / 2.0);
      max_score = Math.max(prosocial_score, individual_score, competitive_score);
      if ((max_score === prosocial_score)) {
          svo_type = "Prosocial";
      } else if ((max_score === individual_score)) {
          svo_type = "Individualistic";
      } else {
          svo_type = "Competitive";
      }
      psychoJS.experiment.addData("SVO_Prosocial", prosocial_score);
      psychoJS.experiment.addData("SVO_Individualistic", individual_score);
      psychoJS.experiment.addData("SVO_Competitive", competitive_score);
      psychoJS.experiment.addData("SVO_Type", svo_type);
  }
  
  // Save data to CSV before closing
  const data = psychoJS.experiment._trialsData;
  if (data && data.length > 0) {
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join('\t'),
      ...data.map(row => headers.map(h => {
        const val = row[h];
        if (val === null || val === undefined) return '';
        if (typeof val === 'string' && val.includes('\t')) return `"${val}"`;
        return val;
      }).join('\t'))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const filename = `${expInfo["participant"]}_${expName}_${expInfo["date"]}.csv`;

    // Safari兼容的下载方式
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      // Safari: 使用window.open
      window.open(url, '_blank');
      alert('实验结束！\n\n请保存下载的CSV文件，这是您的实验数据。\n如果未自动下载，请检查"下载"文件夹。');
    } else {
      // Chrome/Edge/Firefox: 正常使用a标签下载
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // 延迟释放URL，确保下载开始
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
