﻿window.globalProvideData('slide', '{"title":"وحدة النظام هي الوحدة الخاصة بامداد التيار الكهربائي ","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":6,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide6","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5WwMo8sAKMo","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6LQqgKIOoQA.5eNM5NjG29z"}}]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]},"ReviewInt_6qIIM0fn0j2":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6qIIM0fn0j2.5w2UXDpftTR"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6qIIM0fn0j2.5p2i3B1Iofw"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6A2eIdAkvnT.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qIIM0fn0j2_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qIIM0fn0j2_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qIIM0fn0j2","typea":"var","valueb":"6MP5Ke2RI8M","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6MP5Ke2RI8M.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6qIIM0fn0j2"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6MP5Ke2RI8M.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6qIIM0fn0j2"}]}]}]},"ReviewIntCorrectIncorrect_6qIIM0fn0j2":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6qIIM0fn0j2.5w2UXDpftTR"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6qIIM0fn0j2.5p2i3B1Iofw.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qIIM0fn0j2.5p2i3B1Iofw"}}]},{"kind":"adjustvar","variable":"6qIIM0fn0j2.5p2i3B1Iofw._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6qIIM0fn0j2.5p2i3B1Iofw._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6qIIM0fn0j2.5p2i3B1Iofw._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"6qIIM0fn0j2.5p2i3B1Iofw.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6qIIM0fn0j2.5p2i3B1Iofw"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6qIIM0fn0j2":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6qIIM0fn0j2"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6qIIM0fn0j2":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"6qIIM0fn0j2.5w2UXDpftTR.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"6qIIM0fn0j2.5p2i3B1Iofw.ActGrpSetDisabledState"}]},"6qIIM0fn0j2_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6A2eIdAkvnT.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6MP5Ke2RI8M.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6qIIM0fn0j2"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6A2eIdAkvnT.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6A2eIdAkvnT.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6qIIM0fn0j2"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5WwMo8sAKMo":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"NavigationRestrictionPreviousSlide_5WwMo8sAKMo":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxnanbnsnfns00000000001"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6qIIM0fn0j2","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qIIM0fn0j2","typea":"var","valueb":"6MP5Ke2RI8M","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6MP5Ke2RI8M"},"completed_slide_ref":{"type":"string","value":"_player.6LQqgKIOoQA.5pqKlUTVVkB"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6qIIM0fn0j2","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qIIM0fn0j2","typea":"var","valueb":"6MP5Ke2RI8M","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6MP5Ke2RI8M"},"completed_slide_ref":{"type":"string","value":"_player.6LQqgKIOoQA.5pqKlUTVVkB"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5WwMo8sAKMo"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5WwMo8sAKMo"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6YKuJTh9OKt","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6YKuJTh9OKt","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6qIIM0fn0j2","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6qIIM0fn0j2"}],"elseActions":[{"kind":"exe_actiongroup","id":"6qIIM0fn0j2_CheckAnswered"}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qIIM0fn0j2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qIIM0fn0j2.5p2i3B1Iofw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qIIM0fn0j2.5w2UXDpftTR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VwWuJ7xT3z"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"613b4tuvytl"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6AL1ASUazNq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"60HJuze9gqc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Y0JEfB7BL2"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":-2,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":7.5,"rotateYPos":271.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":17,"bottom":545,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":27}},"html5data":{"xPos":-1,"yPos":-1,"width":18,"height":546,"strokewidth":1}},"width":16,"height":544,"resume":true,"useHandCursor":true,"id":"613b4tuvytl"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":704,"yPos":-2,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":7.5,"rotateYPos":271.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":17,"bottom":545,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":27}},"html5data":{"xPos":-1,"yPos":-1,"width":18,"height":546,"strokewidth":1}},"width":16,"height":544,"resume":true,"useHandCursor":true,"id":"6AL1ASUazNq"},{"kind":"vectorshape","rotation":90,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":360,"yPos":-346,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":8.5,"rotateYPos":352.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":17,"bottom":705,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":-1,"yPos":-1,"width":18,"height":706,"strokewidth":1}},"width":16,"height":704,"resume":true,"useHandCursor":true,"id":"60HJuze9gqc"},{"kind":"vectorshape","rotation":90,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":344,"yPos":182,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":8.5,"rotateYPos":352.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":17,"bottom":705,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":-1,"yPos":-1,"width":18,"height":706,"strokewidth":1}},"width":16,"height":704,"resume":true,"useHandCursor":true,"id":"5Y0JEfB7BL2"},{"kind":"scrollarea","contentwidth":672,"contentheight":92,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6M9KKgwHriD_1716999378","id":"01","linkId":"txt__default_5p2i3B1Iofw","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":585,"height":22,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"False","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":81,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":34}}}],"shapemaskId":"","xPos":24,"yPos":46,"tabIndex":6,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-23,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":35}},"html5data":{"xPos":-23,"yPos":-1,"width":671,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-23,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":35}},"html5data":{"xPos":-23,"yPos":-1,"width":671,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-23,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":36}},"html5data":{"xPos":-23,"yPos":-1,"width":671,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-23,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":36}},"html5data":{"xPos":-23,"yPos":-1,"width":671,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}}],"width":648,"height":46,"resume":true,"useHandCursor":true,"id":"5p2i3B1Iofw","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5w2UXDpftTR.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5w2UXDpftTR._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5w2UXDpftTR"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5modlROlvfs_408885986","id":"01","linkId":"txt__default_5w2UXDpftTR","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":585,"height":22,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"True","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":78,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":37}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":5,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":47,"strokewidth":3}}}],"width":648,"height":46,"resume":true,"useHandCursor":true,"id":"5w2UXDpftTR","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5p2i3B1Iofw.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5p2i3B1Iofw._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5p2i3B1Iofw"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":12,"yPos":80,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":323.5,"rotateYPos":210.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":648,"height":422,"strokewidth":3}},"width":672,"height":422,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":-5,"right":675,"bottom":425,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":50}}},"id":"6qIIM0fn0j2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6VwWuJ7xT3z_1669630470","id":"01","linkId":"txt__default_6VwWuJ7xT3z","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":628,"height":34,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"وحدة النظام هي الوحدة الخاصة بامداد التيار الكهربائي ","style":{"fontIsBold":false,"fontIsUnderline":false,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.465}}],"style":{"flowDirection":"rightToLeft","tagType":"P"},"runs":[{"idx":0,"len":53,"flowDirection":"rightToLeft","cursive":true}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":638,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":52}}}],"shapemaskId":"","xPos":36,"yPos":22,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":323.5,"rotateYPos":21.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":650,"bottom":46,"altText":"وحدة النظام هي الوحدة الخاصة بامداد التيار الكهربائي ","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":-2,"yPos":-2,"width":652,"height":48,"strokewidth":3}},"width":648,"height":44,"resume":true,"useHandCursor":true,"id":"6VwWuJ7xT3z"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6qIIM0fn0j2_CorrectReview","id":"01","linkId":"6qIIM0fn0j2_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":41}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":40}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6qIIM0fn0j2_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6qIIM0fn0j2_IncorrectReview","id":"01","linkId":"6qIIM0fn0j2_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":43}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":42}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6qIIM0fn0j2_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');