export type MicosisCategory = {
    title: string;
    description: string;
    images: Array<{
      url: string;
      description: string;
    }>;
  };
  
  export type MicosisGen
   = {
    nameMic: string;
    type: 'Superficiales' | 'Profundas' | 'RespiratorioInvasoras';
    subtype: string;
    categories: {
      [key: string]: MicosisCategory;
    };
  };
  
  export type MicosisGroup = {
    [key: string]: MicosisGen;
  };
  
  export type MicosisType = {
    [key: string]: MicosisGroup;
  };
  
  export const Micosis: {
    Superficiales: MicosisType;
    Profundas: MicosisType;
    RespiratorioInvasoras: MicosisType;
  
  } = {
    
      Superficiales: {
        Superficiales: {
              'Pitiriasis-versicolor': {
                  nameMic: 'Pitiriasis versicolor',
                  type: 'Superficiales',
                  subtype: '',
                  categories: {
                      quistes: {
                          title: '',
                          description: `Infección crónica producida por la levadura Malassezia spp. la cual 
                                        puede formar parte de la micobiota de la piel, afecta preferiblemente 
                                        adolescentes, las lesiones se observan como maculas hipopigmentadas o 
                                        hiperpigmentadas en sitios anatómicos con más grasa corporal como 
                                        tronco y espalda, el signo de besnier da positiva. El diagnostico 
                                        micológico al examen directo con KOH es una muy buena herramienta para 
                                        confirmar el diagnóstico con una sensibilidad de más del 60%.`,
                          images: [
                              {
                                  url: '/Micosis/Fig1_pitariasisVersicolor.jpg',
                                  description: 'Paciente con Pitiriasis versicolor'
                              },

                              {
                                url: '/Micosis/Fig2_KOHpitariasisVersicolor.jpg',
                                description: 'Paciente con Pitiriasis versicolor'
                            },


                          ]
                      }
                  }
              },


              'tina-negra': {
                  nameMic: 'Tina negra',
                  type: 'Superficiales',
                  subtype: '',
                  categories: {
                      quistes: {
                          title: '',
                          description: `Micosis crónica, producida por el hongo levaduriforme dematiaceo exógeno hortae wernekii, 
                                        la enfermedad consiste en lesiones maculares color oscuro afectando principalmente las palmas 
                                        de las manos y las plantas de los pies, rara vez en la cara.`,
                          images: [
                              {
                                  url: '/Micosis/Fig3_tiña_negra.jpg',
                                  description: 'Paciente con tiña negra'
                              },

                              {
                                url: '/Micosis/Fig4_KOHtiña_negra.jpg',
                                description: 'KOH escamas de piel: se observan levaduras y Filamentos dematiaceos compatibles con Hortae werneckii'
                            },
                          ]
                      }
                  }
              },

            'Piedra-Blanca': {
                  nameMic: 'Piedra blanca',
                  type: 'Superficiales',
                  subtype: '',
                  categories: {
                      quistes: {
                          title: '',
                          description: `Se presenta como nódulos blandos de color blanquecino, que se pueden localizar en vellos de cejas, 
                                        bigote o pelo escrotal y vulva, al igual que en cabello, sin producir alopecia. Su agente etiológico
                                        es un hongo levaduriforme de sobrevivencia endógena o exógena Trichosporon spp.`,
                          images: [
                              {
                                  url: '/Micosis/Fig5_piedraBlanca.jpg',
                                  description: 'Nódulos de Piedra Blanca'
                              },

                              {
                                url: '/Micosis/Fig6_Nodulo_piedraBlanca.jpg',
                                description: 'Nódulo de Piedra blanca'
                            },
                          ]
                      }
                  }
              },


              'Piedra-negra': {
                  nameMic: 'Piedra negra',
                  type: 'Superficiales',
                  subtype: '',
                  categories: {
                      quistes: {
                          title: '',
                          description: `Se presenta como nódulos duros negros adheridos a la porción extrafolicular solo del cabello,
                                        producido por la forma sexual del hongo que se encuentra en el suelo Piedraia hortae.`,
                          images: [
                              {
                                  url: '/Micosis/Fig7_Nodulo_piedranegra.jpg',
                                  description: 'Nódulo de piedra negra bordeando un cabello'
                              },
                          ]
                      }
                  }
              },
            },

        cutaneas:{

          superficiescutaneas: {
                  nameMic: 'Contenido',
                  type: 'Superficiales',
                  subtype: 'cutaneas',
                  categories: {
                      quistes: {
                          title: '',
                          description: `Son las infecciones más frecuentes por hongos de la piel y sus anexos (cabellos y uñas), de gran problema 
                                        en la salud publica por su gran trasmisibilidad, la mayoría de las cuales son causadas por los mohos dermatofitos, 
                                        antropofílicos, zoofílicos o geofilicos, hongos monomórficos hialinos que afectan solo la epidermis, ya que no 
                                        pueden sobrevivir a la temperatura interna del cuerpo humano (37° C) y principalmente porque atacan tejidos 
                                        queratinizados; pueden ocasionar una serie de infecciones denominadas tiñeas, clasificadas según el sitio anatómico 
                                        afectado. Al examen con Hidróxido de Potasio- KOH: se observan hifas hialinas septadas. \\n
                                        
                                        Otras micosis cutáneas de importancia clínica que afecta principalmente a pacientes con enfermedades de base como 
                                        la diabetes o con factores predisponentes son la candidiasis, causada por el hongo *Candida* spp, levadura endógena
                                        o exógena que puede generar infección en la piel en sitios donde se acumula humedad, como los intertrigos y los 
                                        espacios interdigitales y la candidosis ungueal de uñas de manos. \\n

                                        La piel normalmente puede ser colonizada o contaminada por esporas o conidios de hongos exógenos, mohos hialinos 
                                        o dematiáceos en grietas entre los dedos de los pies. Cuando estas estructuras fúngicas encuentran condiciones 
                                        adecuadas para desarrollarse se origina el proceso infeccioso. Si es causado por mohos hialinos oportunistas se 
                                        denominada hialohifomicosis (más frecuente que el generado por mohos dematiáceos) llamada faeohifomicosis, 
                                        Esto es debido a que los agentes etiológicos poseen queratinasas que atacan la queratina y destruyen el tejido. 
                                        Entre los más frecuentes están *Neoscytalidium* spp, *Fusarium* spp, *Aspergillus* spp y *Acremonium* spp. los cuales 
                                        están muy asociados a las micosis de las uñas llamadas onicomicosis de muy difícil tratamiento por la resistencia 
                                        que se esta observando en este grupo de hongos. Por lo anterior es muy importante para un tratamiento adecuado
                                        al paciente, realizar un estudio micológico completo previo (KOH y Cultivo para hongos) para poder diferenciar 
                                        el agente etiológico e instaurar un tratamiento acorde al resultado.`,
                          images: [
                              {
                                  url: '/Micosis/Fig8_tina_capitis.jpg',
                                  description: 'Paciente con tiña capitis no inflamatoria con la observación en cabello de parasitismo pilar tipo ectoendotrix en tiña capitis por *Microsporum canis.*'
                              },

                              {
                                url: '/Micosis/Fig9_tineacapitis_noinfla.jpg',
                                description: 'Tinea capitis no inflamatoria seca. '
                              },

                              {
                                url: '/Micosis/Fig10_tineacapitis_inflamatoria.jpg',
                                description: 'Tinea cápitis inflamatoria '
                              },
                              
                              {
                                url: '/Micosis/Fig11_KOH_parasitismo pilar.jpg',
                                description: 'KOH: Parasitismo pilar endothrix (tiñea capitis por *Trichophyton tonsurans*)'
                              },

                              {
                                url: '/Micosis/Fig12.jpg',
                                description: 'KOH: Parasitismo pilar ectoendothirx (se puede observar en las tineas por dermatofitos zoofílicos)'
                              },

                              {
                                url: '/Micosis/Fig13_tiña_en_cara.jpg',
                                description: 'Tiña en cara'
                              },

                              {
                                url: '/Micosis/fig14.jpg',
                                description: 'KOH: Se observan hifas hialinas septadas de dermatofito'
                              },

                              {
                                url: '/Micosis/fig15.jpg',
                                description: 'Tiña cruris'
                              },

                              {
                                url: '/Micosis/fig16_tiña_pedis.jpg',
                                description: 'Tiña pedis'
                              },

                              {
                                url: '/Micosis/fig17_1.jpg',
                                description: 'Micosis ungueal-uñas pies'
                              },

                              {
                                url: '/Micosis/fig17_2.jpg',
                                description: 'Micosis ungueal-uñas pies'
                              },

                              {
                                url: '/Micosis/fig17_3.jpg',
                                description: 'Micosis ungueal-uñas pies'
                              },

                              {
                                url: '/Micosis/fig18.jpg',
                                description: 'Recolección de muestra de uñas para estudios micológicos'
                              },

                              {
                                url: '/Micosis/fig19.jpg',
                                description: 'KOH: Se observan hifas hialinas septadas sugestivas de dermatofito'
                              },

                              {
                                url: '/Micosis/fig20.jpg',
                                description: '. KOH: se observa hifas hialinas septadas de moho no dermatofito'
                              },

                              {
                                url: '/Micosis/fig21.jpg',
                                description: 'Candidiasis interdigital'
                              },

                              {
                                url: '/Micosis/fig22.jpg',
                                description: 'Micosis ungueal uña mano'
                              },

                              {
                                url: '/Micosis/fig23.jpg',
                                description: 'Candidiasis uñas manos'
                              },

                              {
                                url: '/Micosis/fig24.jpg',
                                description: 'KOH: se observan pseudohifas y blastoconidios de *Candida* spp'
                              },
                          ]
                      }
                  }
              },

        }
      },


      Profundas: {
        Subcutaneas: {
          'Esporotricosis': {
              nameMic: 'Esporotricosis',
              type: 'Profundas',
              subtype: '',
              categories: {
                  quistes: {
                      title: '',
                      description: `es producida por especies del complejo *Sporothrix* sp, hongos que se encuentran en forma exógena, tanto en el suelo, 
                      maderas y plantas, su puerta de entrada generalmente es a través de trauma cutáneo, mordedura o arañazos de animales silvestres o 
                      gatos. Trans un periodo de incubación de 15 a 30 días, se ha reportado hasta 2 años se produce una lesión nodular en tejido cutáneo 
                      y subcutáneo en el sitio de inoculación, denominado chancro. A nivel subcutáneo se pueden producir en dos formas: esporotricosis 
                      linfocutánea, en la cual el hongo se disemina desde la lesión inicial por los vasos linfáticos cercanos, pero estos no se afectan, 
                      formando una cadena de nódulos que evolucionan de indoloros, lisos a verrucosos; Fija o dermoepidérmica, solo hay una lesión y se 
                      pueden observar lesiones satélites. Para el diagnóstico las mejores muestras clínicas a recolectar son el exudado serohemático, 
                      realizando aspirado del último nódulo en aparecen en el caso de la forma linfangitica. Para la forma fija de debe realizar biopsia 
                      del tejido profundo. El gold estándar para diagnóstico en el cultivo para hongos, pero la tinción de Giemsa tiene una buena 
                      sensibilidad (85%).`,

                      images: [
                          {
                              url: '/Micosis/fig25_1.jpg',
                              description: 'Recolección de la muestra clínica a través de aspirado con jeringa 1'
                          },

                          {
                            url: '/Micosis/fig25_2.jpg',
                            description: 'Recolección de la muestra clínica a través de aspirado con jeringa 2'
                        },

                        {
                            url: '/Micosis/fig26_1.jpg',
                            description: 'Presentación clínica de casos clínicos de esporotricosis linfángitica 1'
                        },

                        {
                          url: '/Micosis/fig26_2.jpg',
                          description: 'Presentación clínica de casos clínicos de esporotricosis linfángitica 2'
                        },
                        {
                            url: '/Micosis/fig26_3.jpg',
                            description: 'Presentación clínica de casos clínicos de esporotricosis linfángitica 3'
                        },

                        {
                        url: '/Micosis/fig27.jpg',
                        description: 'Presentación clínica de esporotricosis fija'
                        },

                        {
                            url: '/Micosis/fig28.jpg',
                            description: 'Tinción de Giemsa: se observan levaduras en cigarro compatibles con el complejo *Sporothrix* spp.'
                        },

                         



                        


                      ]
                  }
              }
          },


          'Cromoblastomicosis': {
              nameMic: 'Cromoblastomicosis',
              type: 'Profundas',
              subtype: 'Subcutáneas',
              categories: {
                  quistes: {
                      title: '',
                      description: `se presenta lesiones subcutáneas crónicas que evolucionan de meses a años, en forma de dermatitis granulomatosa, 
                                    verrucosa y rara vez diseminación linfática o hemática, la característica común es la presencia de la misma forma 
                                    parasitaria en las muestras clínicas como son los escamas por raspado de puntos negros y biopsias, de las denominadas 
                                    células escleróticas de medlar o células fumagoides  que son patognomónicas de esta entidad, para Colombia se indica 
                                    que el agente más frecuente es *Fonsecae pedrosoi*.`,

                      images: [
                            {
                            url: '/Micosis/fig29_1.jpg',
                            description: 'Presentación clínica de cromoblastomicosis 1'
                            },

                            {
                            url: '/Micosis/fig29_2.jpg',
                            description: 'Presentación clínica de cromoblastomicosis 2'
                            },

                            {
                                url: '/Micosis/fig30.jpg',
                                description: 'KOH: se observan células fumagoides'
                            },
    
                            {
                                url: '/Micosis/fig31.jpg',
                                description: 'Tinción HP: se observan células fumagoides'
                                                                                                  
                            },


                      ]
                  }
              }
          },


          'Eumicetomas': {
              nameMic: 'Eumicetomas',
              type: 'Profundas',
              subtype: 'Subcutáneas',
              categories: {
                  quistes: {
                      title: '',
                      description: `Infección de carácter crónico que se adquiere por trauma con material contaminado por hongos como *Madurella 
                                    mycetomatis* y *Exophiala* sp. aunque también pueden ser producido por bacterias acido alcohol resistentes del 
                                    grupo de los Actinomicetos, como por ejemplo *Nocardia brasiliensis* agente más frecuente de esta infección 
                                    en Colombia y *Nocardia asteroides*, proceso que se denomina actinomicetoma. Los agentes de los micetomas son 
                                    saprofitos ambientales, que habitan zonas tropicales, afectan más a hombres que a mujeres, principalmente 
                                    agricultores, y los sitios anatómicos más afectados son los miembros inferiores. Los microorganismos ingresan 
                                    por la piel a través de trauma, formándose una pápula eritematosa dura en el sitio de inoculación, progresando 
                                    lentamente hasta dermis y tejido celular subcutáneo, puede destruir tejido conectivo hasta hueso, causando 
                                    erosión y lesión perióstica; Los micetomas se caracteriza por la triada clínica, formación de proyectos fistulosos, 
                                    tumefacción o edema y presencia de gránulos de azufre que es un acumulo de material de necrosis con colonias de 
                                    microorganismos, que drenan hacia el exterior a la superficie cutánea por las fístulas, esta infección no se 
                                    disemina por vía hematógena, puede haber adenopatía regional, con deformidad o incapacidad funcional del miembro 
                                    afectado principalmente en los actinomicetomas. Las muestras clínicas para estudiar pueden ser los gránulos de 
                                    azufre que se recolectan por aspirado o tejido afectado recolectado por biopsia`,

                      images: [
                        {
                            url: '/Micosis/fig32.jpg',
                            description: 'Caso Micetoma. Copyright Bioq. Julian Serrano'
                            },

                            {
                            url: '/Micosis/fig33.jpg',
                            description: 'HP: Granulo de azufre'
                            },


                      ]
                  }
              }
          },

          

          


        }
        
      },

      
      RespiratorioInvasoras: {
        RespiratorioInvasoras: {
          'Aspergilosis': {
              nameMic: 'Aspergilosis',
              type: 'RespiratorioInvasoras',
              subtype: '',
              categories: {
                  quistes: {
                      title: '',
                      description: `micosis producida principalmente por especies de Aspergillus fumigatus, hongo colonizador transitorio de tracto respiratorio, 
                                    por lo que tiene amplia distribución en la naturaleza. Es el agente causal de más del 90% de los casos de aspergilosis invasora, 
                                    se adquiere por inhalación de conidios, que germinan e invaden los tejidos, los pacientes con neutropenia prolongada son el principal 
                                    grupo de pacientes con riesgo para adquirir esta grave infección, los cuales pueden sufrir aspergilosis pulmonar invasora, o aspergilosis 
                                    sistémica con compromiso del SNC, con infarto cerebral, vasculitis, o abscesos cerebrales, en este tipo de pacientes se puede detectar 
                                    antígeno galactomannan circulante. También son agentes de infecciones a nivel cutáneo, aspergilosis broncopulmonar alérgica, sinusitis 
                                    y queratitis. Según el protocolo de manejo de pacientes con riesgo de sufrir una aspergilosis diseminada, se recomienda realizarles en 
                                    forma rutinaria la detección de antígeno galactomannan de Aspergillus (antigenemia) y en caso del resultado positivo dar Posaconazol 
                                    suspensión oral, 200 mg/8 horas. Para el diagnóstico confirmado de una aspergilosis la muestra que se debe estudiar es tejido del sitio 
                                    afectado, la observación de estructuras fúngicas compatibles con Aspergillus en una muestra no estéril, podría indicar colonización o 
                                    una probable infección.`,

                      images: [
                            {       
                            url: '/Micosis/fig34.jpg',
                            description: 'KOH: en muestra de esputo se observan hifas hialinas septadas dicotómicas sugestivas de Aspergillus sp. En paciente con factor de riesgo como la neutropenia apoya el diagnóstico de aspergilosis pulmonar probable (criterios EORTC/MSGERC)'
                            },

                      ]
                  }
              }
          },


          'Mucormicosis': {
              nameMic: 'Mucormicosis',
              type: 'RespiratorioInvasoras',
              subtype: '',
              categories: {
                  quistes: {
                      title: '',
                      description: `micosis producida principalmente por especies de Aspergillus fumigatus, hongo colonizador transitorio de tracto respiratorio, 
                                    por lo que tiene amplia distribución en la naturaleza. Es el agente causal de más del 90% de los casos de aspergilosis invasora, 
                                    se adquiere por inhalación de conidios, que germinan e invaden los tejidos, los pacientes con neutropenia prolongada son el principal 
                                    grupo de pacientes con riesgo para adquirir esta grave infección, los cuales pueden sufrir aspergilosis pulmonar invasora, o aspergilosis 
                                    sistémica con compromiso del SNC, con infarto cerebral, vasculitis, o abscesos cerebrales, en este tipo de pacientes se puede detectar 
                                    antígeno galactomannan circulante. También son agentes de infecciones a nivel cutáneo, aspergilosis broncopulmonar alérgica, sinusitis 
                                    y queratitis. Según el protocolo de manejo de pacientes con riesgo de sufrir una aspergilosis diseminada, se recomienda realizarles en 
                                    forma rutinaria la detección de antígeno galactomannan de Aspergillus (antigenemia) y en caso del resultado positivo dar Posaconazol 
                                    suspensión oral, 200 mg/8 horas. Para el diagnóstico confirmado de una aspergilosis la muestra que se debe estudiar es tejido del sitio 
                                    afectado, la observación de estructuras fúngicas compatibles con Aspergillus en una muestra no estéril, podría indicar colonización o 
                                    una probable infección.`,

                      images: [
                          {
                              url: '/Micosis/fig35.jpg',
                              description: 'Copywrigt: Tinción de Giemsa en muestra de esputo: se observan hifas anchas aseptadas. En paciente con factor de riesgo como la diabetes y cetoacidosis apoya el diagnóstico de mucormicosis pulmonar probable (criterios EORTC/MSGERC)'
                          },

                      ]
                  }
              }
          },

          'Pneumocistosis': {
              nameMic: 'Pneumocistosis',
              type: 'RespiratorioInvasoras',
              subtype: '',
              categories: {
                  quistes: {
                      title: '',
                      description: `Producida por el hongo especie/especifico Pneumocystis jirovecii, la infección pulmonar es la forma más frecuente y 
                      ocurre aproximadamente en el 11% de los pacientes con SIDA. También es importante en otros individuos como inmunodeficiencias primarias, 
                      malignidades hematológicas y trasplantados de órganos sólidos y medula ósea, así como en pacientes con altas dosis de esteroides, 
                      cerca del 50% de los pacientes presentan fiebre, escalofrío, tos no productiva o con esputo mucoide claro, fino y rara vez hemoptoico, 
                      la pneumocistosis extrapulmonar es una manifestación menos común y puede encontrase en sitios como ojos, oídos, piel, corazón, bazo, riñones, 
                      hígado, tiroides, paratiroides, esófago, pleura, paladar, intestino delgado, medula ósea y nódulos linfáticos. En el protocolo del manejo de 
                      los pacientes VIH indica que si el paciente no manifiesta sintomatología respiratoria y tiene recuento de CD4 menor de 200 células x µl debe 
                      instaurarse terapia antimicrobiana con Trimetoprim sulhametoxazole, como profilaxis primaria. Para el diagnóstico de la micosis en pacientes VIH, 
                      la muestra de Lavado Bronquealveolar-LBA tiene gran utilidad diagnóstica confirmando la micosis.`,

                      images: [
                          {
                              url: '/Micosis/fig36.jpg',
                              description: 'Tinción de Giemsa en muestra de LBA: se observan ascos con ascosporas de *Pneumocystis jirovecci*'
                          },

                      ]
                  }
              }
          },


          'Infeccion_Candida': {
              nameMic: 'Infección Invasiva por *Candida* spp',
              type: 'RespiratorioInvasoras',
              subtype: '',
              categories: {
                  quistes: {
                      title: '',
                      description: `Se considera candidosis diseminada profunda o invasiva, a la infección de uno o varios órganos, de líquidos 
                      orgánicos normalmente estériles y del torrente sanguíneo por Candida spp. Sólo tienen valor diagnóstico si se aísla la misma 
                      especie en forma repetitiva de Candida en el curso de cuadros clínicos bien definidos, de vísceras cerradas y de líquidos orgánicos 
                      normalmente estériles. La presentación clínica de las infecciones sistémicas por Candida spp, es inespecífica y va desde la candidemia 
                      hasta la candidiasis diseminada aguda, difícil distinguir entre cuadros infecciosos locales, como la infección urinaria y la infección 
                      sistémica con afectación renal en un paciente con candidiasis diseminada, los pacientes que sufren candidiasis invasoras pueden presentar 
                      todo un espectro de signos inflamatorios locales y/o sistémicos, inespecíficos como la sepsis, la sepsis grave, el shock séptico y el 
                      síndrome de disfunción multiorgánico. Para la candidemia la  puerta de entrada más común es el tracto gastrointestinal y los catéteres 
                      intravenosos que pueden derivar la diseminación a múltiples órganos con formación de microabscesos, lesiones cutáneas embólicas, abscesos 
                      renales y hepatoesplénicos, endocarditis post operatoria tras la implantación de una válvula artificial en el corazón, meningitis, artritis, 
                      osteomielitis y endoftalmitis; los síntomas de candidemia son fiebre no muy alta y la aparición de colonias metastásicas que se suelen encontrar 
                      en la retina en forma de lesiones blancas, cerebro y riñón. Factores de riesgo de candidiasis invasora: colonización, uso de antibióticos de 
                      amplio espectro, uso de esteroides, catéter venoso central, nutrición parenteral, cirugía abdominal, perforación del tubo digestivo y dehiscencia 
                      de suturas, fracaso renal agudo.`,

                      images: [
                        {
                            url: '/Micosis/fig37.jpg',
                            description: 'KOH de LBA: se observan pseudohifas y blastoconidios de *Candida* spp. La presencia de estructuras fúngicas compatibles con *Candida* spp en muestra de LBA o esputo-se interpreta como colonización por *Candida* spp.'
                        },


                      ]
                  }
              }
          },


          'Infeccion_Cryptococcus': {
              nameMic: 'Infección diseminada por *Cryptococcus* spp',
              type: 'RespiratorioInvasoras',
              subtype: '',
              categories: {
                  quistes: {
                      title: '',
                      description: `el ingreso de las levaduras desecadas o basidiosporas por vía inhalatoria hasta pulmón en un paciente inmunodeficiente 
                      (leucemia, linfoma, enfermedad de hodgkin, sarcoidosis, tuberculosis, diabetes mellitus, tratamiento con corticoesteroides) e 
                      inmunosuprimido VIH/SIDA es más frecuente por C. neoformans variedad grubii, se desarrolla una infección diseminada  a partir del pulmón 
                      al sistema nervioso central causando meningitis o meningoencefalitis, pero  también puede localizarse en hígado, riñón, bazo, ganglios linfáticos 
                      y suprarrenales, otras localizaciones menos frecuentes son la miocárdica, gastrointestinal, prostática, cutánea, ósea y articular. También se pueden 
                      afectar pacientes inmunocompetentes por la especie C. gattii, algunos de los cuales puede desarrollar una afección pulmonar leve, aunque un 20 a 40% 
                      puede presentar tos, dolor torácico y a veces derrame pleural, si se propaga al SNC, presenta un cuadro de meningitis subaguda o crónica o lesión extensiva 
                      intracraneal granulomatosa llamado criptococoma.  \\n
                      
                      La meningoencefalitis o meningitis subaguda o crónica es la forma más común de presentación clínica de esta micosis; cerca del 70% a 90% de los pacientes 
                      con SIDA y criptococosis del SNC presentan cefalea, fiebre, trastornos visuales, alteración del estado de conciencia y en algunos casos perdida de la memoria. 
                      La localización de la infección, el curso clínico de la enfermedad, su evolución final, así como el estado inmunitario del paciente, están muy relacionado con 
                      la especie y variedad del Cryptococcus infectante. Para el diagnóstico de meningitis por Cryptococcus, la recolección de Líquido Cefalorraquídeo-LCR por punción 
                      lumbar debe enviarse rápidamente al laboratorio, dentro de los estudios micológicos se debe solicitar son: tinta china, cultivo para hongos y detección de 
                      antígeno de Cryptococcus. \\n

                      Según la OMS los pacientes VIH sin manifestaciones clínicas meníngeas, con un recuento de CD4 menor a 100 células/µl, debe darse fluconazol de 
                      200 mg/día como una profilaxis primaria. Si está disponible la prueba de antígeno de Cryptococcus (preferiblemente mediante ensayo de flujo 
                      lateral-inmunocromatografia en prueba rápida 10 minutos), en pacientes con un recuento de células CD4 < 200 células/mm3, se debe hacer la antigenemia, 
                      antes de iniciar o reiniciar la terapia antirretroviral en adultos que viven con el VIH para prevenir el desarrollo de la criptococosis, si la prueba 
                      resulta positiva se da tratamiento adelantado con fluconazol 800-1200 mg/día durante dos semanas, seguido de terapia de consolidación y mantenimiento, 
                      como para el tratamiento (terapia de consolidación con fluconazol 800 mg/día durante ocho semanas; terapia de mantenimiento con fluconazol 200 mg/día, 
                      hasta la reconstitución inmunitaria y la supresión de la carga viral).
                      
                      `,

                      images: [
                        {
                            url: '/Micosis/fig38.jpg',
                            description: 'Tinción de Giemsa en muestra de esputo: se observan levaduras encapsuladas compatibles con *Cryptococcus* spp'
                        },

                        {
                            url: '/Micosis/fig39.jpg',
                            description: 'Tinta china de muestra de LCR se observan levaduras encapsuladas compatibles con *Cryptococcus* spp'
                        },

                      ]
                  }
              }
          },

          'Histoplasmosis': {
              nameMic: 'Histoplasmosis',
              type: 'RespiratorioInvasoras',
              subtype: '',
              categories: {
                  quistes: {
                      title: '',
                      description: `los propágulos infectantes de Histoplasma capsulatum, se adquieren por inhalación; la histoplasmosis cursa sin síntomas en el 95% 
                      de los casos, presentando la prueba de intradermorreacción positiva y calcificaciones pulmonares o esplénicas. Se disemina vía hematógena desde 
                      los pulmones hacia otros tejidos en las primeras dos semanas, antes de que la inmunidad específica se haya desarrollado, posteriormente la inmunidad 
                      celular controla la infección en pacientes inmunocompetentes y explican el curso subclínico y limitado de la enfermedad, cuando el inóculo es grande 
                      puede haber fiebre, infiltrados pulmonares, adenopatías torácicas y fenómenos de hipersensibilidad cutáneos, articulares y pericárdicos, un 5% de los 
                      pacientes pueden presentar artritis, artralgias, pericarditis y rinitis. Algunos individuos presentan una respuesta inflamatoria exuberante con 
                      crecimiento y fusión de ganglios mediastínicos dando lugar a histoplasmomas o “granuloma mediastínico”. Posteriormente, los mecanismos de reparación 
                      pueden dar lugar a fibrosis mediastínica, obstrucciones o fístulas traqueóesofágicas o divertículos esofágicos. \\n
                      
                      Cuando la inmunidad celular es inmadura o defectuosa, el hongo se multiplica sin interferencia en cualquier órgano en el interior de los macrófagos. 
                      En neonatos, niños e inmunodeprimidos, VIH con recuento de linfocitos CD4 menor de 150 células por µl, hay invasión masiva del sistema mononuclear 
                      fagocítico con fiebre, hepatoesplenomegalia, adenopatías, pancitopenia y, ocasionalmente, infiltrado pulmonar intersticial; a veces, el curso es 
                      fulminante con insuficiencia respiratoria y aplasia medular. La fiebre, pérdida de peso y hepatoesplenomegalia son los síntomas y signos más comunes 
                      en histoplasmosis diseminada aguda, otros sitios de diseminación incluyen la mucosa orofaríngea como placas, nódulos o úlceras de la lengua, mucosa 
                      oral, laringe o labios, tracto gastrointestinal como masas o ulceraciones causando dolor, sangrado, perforaciones o mala-absorción, un 5 a 20% de 
                      pacientes presentan meningitis crónicas o lesiones cerebrales focales, las manifestaciones cutáneas ocurren entre el 10 al 25% de pacientes con SIDA, 
                      también pueden observarse formas diseminadas subagudas o crónicas en sujetos sin defecto inmune aparente. Este hongo puede producir infecciones 
                      pulmonares crónicas cavitadas que simulan una tuberculosis en pacientes con otras neumopatías como enfisema centrilobulillar o bulloso. \\n

                      Para su diagnóstico una muestra de esputo con la observación de las estructuras micóticas en tinción de Giemsae hace diagnóstico confirmado de la enfermedad. 
                      Otra gran herramienta principalmente útil en pacientes que sufren una histoplasmosis diseminada progresiva, micosis indicadora de SIDA en pacientes VIH, 
                      es la detección de antígeno galactomannan de Histoplasma capsulatum, la cual se puede realizar en muestras de orina o LBA.  \\n

                      En pacientes VIH/SIDA sin sintomatología respiratoria, con recuento de menor a 150 células de CD4 por µl y que vivan en zonas endémicas para histoplasmosis 
                      se recomienda dar Itraconazol como una profilaxis primaria. Los criterios de suspensión establecidos por los profesionales clínicos son: recuento de células 
                      CD4 mayor de 150 células/mm3 y carga viral indetectable por 6 meses.

                      `,

                      images: [
                        {
                            url: '/Micosis/fig40.jpg',
                            description: 'Tinción de Giemsae en muestra de esputo: se observan levaduras intracelulares compatibles con *Histoplasma capsulatum*'
                        },

                        {
                            url: '/Micosis/fig41.jpg',
                            description: 'Tinción de Giemsae en muestra de sangre periférica: se observan levaduras compatibles con *Histoplasma capsulatum*'
                        },

                      ]
                  }
              }
          },

          'Paracoccidioidomicosis': {
              nameMic: 'Paracoccidioidomicosis',
              type: 'RespiratorioInvasoras',
              subtype: '',
              categories: {
                  quistes: {
                      title: '',
                      description: `la paracoccidioidomicosis es una micosis endémica de Sur América producida por el complejo Paracoccidioides spp.. 
                      La mayoría de las infecciones primarias se adquieren por inhalación y son subclínicas; posteriormente, el hongo puede reactivarse 
                      tras haber permanecido durante años en estado de latencia. Es una enfermedad típica de campesinos adultos y resulta rara en mujeres, 
                      niños y adolescentes. En niños suele producir infección diseminada con fiebre, síndrome constitucional, adenopatías, hepatoesplenomegalia 
                      y lesiones cutáneas. En el adulto son características las infecciones crónicas del pulmón acompañadas de lesiones mucosas 
                      (boca, nariz, faringe o laringe), adenopatías y lesiones cutáneas. También puede existir insuficiencia suprarrenal, hepatitis granulomatosa, 
                      lesiones digestivas y urogenitales, osteomielitis, artritis, endoftalmitis y afectación del SNC. \n

                      Para su diagnóstico confirmado de la micosis es suficiente la observación de las estructuras fungicas del hongo en las muestras clínicas, 
                      como por ejemplo el esputo con KOH al 10% o con tinción de Giemsae.
                      
                      `,

                      images: [
                          {
                                url: '/Micosis/fig42_1.jpg',
                                description: 'KOH de muestras de esputo: se observan levaduras multigemantes compatibles con *Paracoccidioides* spp 1'
                          },

                          {
                            url: '/Micosis/fig42_2.jpg',
                            description: 'KOH de muestras de esputo: se observan levaduras multigemantes compatibles con *Paracoccidioides* spp 2'
                            },

                            {
                                url: '/Micosis/fig43.jpg',
                                description: 'Tinción de Giemsa de muestra de esputo: se observan levadura multigemante compatibles con *Paracoccidioides* spp.'
                                },

                      ]
                  }
              }
          },

        

      }
  }
}



