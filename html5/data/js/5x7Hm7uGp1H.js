﻿window.globalProvideData('slide', '{"title":"يستطيع المعالج الوصول لاى موقع في الرام بشكل مباشر وفى اى وقت وبترتيب عشوائي ","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":16,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide16","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5x7Hm7uGp1H","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6LQqgKIOoQA.623KxF4tqBG"}}]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]},"ReviewInt_62xVzOxUnZZ":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"62xVzOxUnZZ.5efuRRfL2L4"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"62xVzOxUnZZ.6YbHF2UsJ6i"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6XQyKFsYwys.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62xVzOxUnZZ_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62xVzOxUnZZ_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_62xVzOxUnZZ","typea":"var","valueb":"6MP5Ke2RI8M","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6MP5Ke2RI8M.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_62xVzOxUnZZ"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6MP5Ke2RI8M.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_62xVzOxUnZZ"}]}]}]},"ReviewIntCorrectIncorrect_62xVzOxUnZZ":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"62xVzOxUnZZ.5efuRRfL2L4.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62xVzOxUnZZ.5efuRRfL2L4"}}]},{"kind":"adjustvar","variable":"62xVzOxUnZZ.5efuRRfL2L4._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"62xVzOxUnZZ.5efuRRfL2L4._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"62xVzOxUnZZ.5efuRRfL2L4._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"62xVzOxUnZZ.5efuRRfL2L4.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"62xVzOxUnZZ.5efuRRfL2L4"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"62xVzOxUnZZ.6YbHF2UsJ6i"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_62xVzOxUnZZ":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_62xVzOxUnZZ"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_62xVzOxUnZZ":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"62xVzOxUnZZ.5efuRRfL2L4.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"62xVzOxUnZZ.6YbHF2UsJ6i.ActGrpSetDisabledState"}]},"62xVzOxUnZZ_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6XQyKFsYwys.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6MP5Ke2RI8M.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_62xVzOxUnZZ"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6XQyKFsYwys.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6XQyKFsYwys.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_62xVzOxUnZZ"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5x7Hm7uGp1H":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"NavigationRestrictionPreviousSlide_5x7Hm7uGp1H":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxnanbnsnfns00000000001"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_62xVzOxUnZZ","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_62xVzOxUnZZ","typea":"var","valueb":"6MP5Ke2RI8M","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6MP5Ke2RI8M"},"completed_slide_ref":{"type":"string","value":"_player.6LQqgKIOoQA.5pqKlUTVVkB"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_62xVzOxUnZZ","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_62xVzOxUnZZ","typea":"var","valueb":"6MP5Ke2RI8M","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6MP5Ke2RI8M"},"completed_slide_ref":{"type":"string","value":"_player.6LQqgKIOoQA.5pqKlUTVVkB"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5x7Hm7uGp1H"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5x7Hm7uGp1H"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6YKuJTh9OKt","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6YKuJTh9OKt","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_62xVzOxUnZZ","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_62xVzOxUnZZ"}],"elseActions":[{"kind":"exe_actiongroup","id":"62xVzOxUnZZ_CheckAnswered"}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62xVzOxUnZZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62xVzOxUnZZ.6YbHF2UsJ6i"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62xVzOxUnZZ.5efuRRfL2L4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RBqOo1ObQM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"613b4tuvytl"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6AL1ASUazNq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"60HJuze9gqc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Y0JEfB7BL2"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":-2,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":7.5,"rotateYPos":271.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":17,"bottom":545,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":27}},"html5data":{"xPos":-1,"yPos":-1,"width":18,"height":546,"strokewidth":1}},"width":16,"height":544,"resume":true,"useHandCursor":true,"id":"613b4tuvytl"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":704,"yPos":-2,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":7.5,"rotateYPos":271.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":17,"bottom":545,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":27}},"html5data":{"xPos":-1,"yPos":-1,"width":18,"height":546,"strokewidth":1}},"width":16,"height":544,"resume":true,"useHandCursor":true,"id":"6AL1ASUazNq"},{"kind":"vectorshape","rotation":90,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":360,"yPos":-346,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":8.5,"rotateYPos":352.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":17,"bottom":705,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":-1,"yPos":-1,"width":18,"height":706,"strokewidth":1}},"width":16,"height":704,"resume":true,"useHandCursor":true,"id":"60HJuze9gqc"},{"kind":"vectorshape","rotation":90,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":344,"yPos":182,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":8.5,"rotateYPos":352.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":17,"bottom":705,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":-1,"yPos":-1,"width":18,"height":706,"strokewidth":1}},"width":16,"height":704,"resume":true,"useHandCursor":true,"id":"5Y0JEfB7BL2"},{"kind":"scrollarea","contentwidth":672,"contentheight":92,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5c7BJEZH7Aq_-169984275","id":"01","linkId":"txt__default_6YbHF2UsJ6i","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":585,"height":22,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"False","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":81,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":34}}}],"shapemaskId":"","xPos":24,"yPos":46,"tabIndex":6,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}}],"width":648,"height":46,"resume":true,"useHandCursor":true,"id":"6YbHF2UsJ6i","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5efuRRfL2L4.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5efuRRfL2L4._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5efuRRfL2L4"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6QzrKyXY4so_615856722","id":"01","linkId":"txt__default_5efuRRfL2L4","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":585,"height":22,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"True","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":78,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":37}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":5,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-23,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":35}},"html5data":{"xPos":-23,"yPos":-1,"width":671,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-23,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":35}},"html5data":{"xPos":-23,"yPos":-1,"width":671,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-23,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":36}},"html5data":{"xPos":-23,"yPos":-1,"width":671,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-23,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":36}},"html5data":{"xPos":-23,"yPos":-1,"width":671,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}}],"width":648,"height":46,"resume":true,"useHandCursor":true,"id":"5efuRRfL2L4","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6YbHF2UsJ6i.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6YbHF2UsJ6i._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6YbHF2UsJ6i"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":12,"yPos":110,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":323.5,"rotateYPos":195.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":648,"height":392,"strokewidth":3}},"width":672,"height":392,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":-5,"right":675,"bottom":395,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":56}}},"id":"62xVzOxUnZZ"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6RBqOo1ObQM_-561812716","id":"01","linkId":"txt__default_6RBqOo1ObQM","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":628,"height":68,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"يستطيع المعالج الوصول لاى موقع في الرام بشكل مباشر وفى اى وقت وبترتيب عشوائي ","style":{"fontIsBold":false,"fontIsUnderline":false,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.465}}],"style":{"flowDirection":"rightToLeft","tagType":"P"},"runs":[{"idx":0,"len":77,"flowDirection":"rightToLeft","cursive":true}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":639,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":64}}}],"shapemaskId":"","xPos":36,"yPos":22,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":323.5,"rotateYPos":38.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":650,"bottom":80,"altText":"يستطيع المعالج الوصول لاى موقع في الرام بشكل مباشر وفى اى وقت وبترتيب عشوائي ","pngfb":false,"pr":{"l":"Lib","i":57}},"html5data":{"xPos":-2,"yPos":-2,"width":652,"height":82,"strokewidth":3}},"width":648,"height":78,"resume":true,"useHandCursor":true,"id":"6RBqOo1ObQM"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"62xVzOxUnZZ_CorrectReview","id":"01","linkId":"62xVzOxUnZZ_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":41}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":40}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"62xVzOxUnZZ_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"62xVzOxUnZZ_IncorrectReview","id":"01","linkId":"62xVzOxUnZZ_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":43}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":42}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"62xVzOxUnZZ_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');