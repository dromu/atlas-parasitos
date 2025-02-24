export type ParasiteCategory = {
  title: string;
  description: string;
  images: Array<{
    url: string;
    description: string;
  }>;
};

export type Parasite = {
  name: string;
  type: 'Protozoo' | 'Helminto';
  subtype: string;
  categories: {
    [key: string]: ParasiteCategory;
  };
};

export type ParasiteGroup = {
  [key: string]: Parasite;
};

export type ParasiteType = {
  [key: string]: ParasiteGroup;
};

export const parasites: {
  protozoos: ParasiteType;
  helmintos: ParasiteType;

} = {



  protozoos: {
    

    Estramenopilos:{
      'Blastocystis': {
        name: 'Blastocystis sp',
        type: 'Protozoo',
        subtype: 'Estramenopilos',
        categories: {
          
          quistes: {
            title: '',
            description: `La taxonomia de B. hominis es muy discutida. En el momento es considerado un protozooario pero
            se esta estimando la posibilidad de clasificarlo en un nuevo orden. Este es ocasionalmente encontrado en el 
            tracto intestinal humano siendo su patogenicidad tambien controversial. El conocimiento sobre su ciclo de vida 
            y forma de transmisión esta incompleta, pero se asume que la infección es adquirida vía fecal-oral.
            Su diagnostico esta basado en encontrar formas quisticas en heces frescas, aunque en ocaciones tambien se 
            pueden encontrar trofozoitos de diversos tamaños`,
            images: [
              {
                url: '/images/B_hominis/B. hominis grande ZN.jpg',        
                description: 'B. hominis grande ZN'
              },

              {
                url: '/images/B_hominis/B. hominis quiste 02.jpg',        
                description: 'B. hominis quiste'
              },

              {
                url: '/images/B_hominis/blastocystisGranular.png',        
                description: 'Quiste de blastocystis granular'
              },

              {
                url: '/images/B_hominis/blastocystisVacuolar.png',        
                description: 'Quiste de blastocystis vacuolar'
              },

              {
                url: '/images/B_hominis/blastocystisLugol1000X.jpg',        
                description: 'Blastocystis en montaje fresco con lugol 1000X'
              },

              {
                url: '/images/B_hominis/blastocystisLugol1000X2.jpg',        
                description: 'Blastocystis en montaje fresco con lugol 1000X'
              },

              

            ]
          }
        }
      

      }

    },

    amebas: {
      'entamoeba-histolytica': {
        name: 'Entamoeba histolytica',
        type: 'Protozoo',
        subtype: 'Ameba',
        categories: {
          trofozoitos: {
            title: 'Trofozoítos',
            description: `Tiene un tamaño de 20 a 30 micras, es muy móvil, 
                          presenta una gran diferencia entre el endoplasma que es granuloso 
                          y el ectoplasma que es transparente, hialino. La emisión de 
                          pseudópodos en forma de dedos se produce por lo general en una 
                          sola dirección, y en forma rápida "explosiva".
                          
                          Lo mas importante para el reconocimiento de la Entamoeba histolytica
                          es la visualizaciòn del nucleo, este tiene un cariosoma central, pequeño,
                          y la cromatina perifèrica alrededor de la membrana nuclear uniformemente distribuida. 
                          Los trofozoitos se encuentran en las heces diarreicas, son el ùnico estadio
                          de la ameba que se encuentra en el interior del absceso hepatico amebiano.
                          
                          Los trofozoitos se abren paso entre las cèlulas de la mucosa mediante una colagenasa
                          que destruye los puentes intercelulares. Los colonocitos son inducidos a presentar autolisis,
                          la matriz extracelular se degrada y las amibas pasan de la mucosa a la submucosa, esto induce
                          la liberaciòn de gran cantidad de sustancias deletereas para la submucosa del colon permitiendo
                          el creciminto lateral de la lesiòn dando origen a las ulceras en "botòn de camisa"
                            `,
            images: [
              {
                url: '/images/E_histolytica/E. histolytica trofozoito 02.jpg',

                
                description: 'Trofozoíto de Entamoeba histolytica con un glóbulo rojo fagocitado, característica distintiva de esta especie.'
              },
              {
                url: '/images/E_histolytica/E. hystolitica fagocitando GR.jpg',
                description: 'Trofozoíto de Entamoeba histolytica mostrando sus pseudópodos.'
              },

              {
                url: '/images/E_histolytica/E hystolitica trofozoita vulva.png',
                description: 'Trofozoíto de Entamoeba histolytica en vulva.'
              },

              {
                url: '/images/E_histolytica/E_ histolytica trofozoito.jpg',

                
                description: 'Trofozoíto de Entamoeba histolytica con un glóbulo rojo fagocitado, característica distintiva de esta especie.'
              },
              {
                url: '/images/E_histolytica/Daño en epitelio intestinal por E_ histolytica.jpg',
                description: 'Trofozoíto de Entamoeba histolytica mostrando sus pseudópodos.'
              },

              {
                url: '/images/E_histolytica/Trofozoito E_ histolytica en criptas 40 X.jpg',
                description: 'Trofozoíto de Entamoeba histolytica mostrando sus pseudópodos.'
              }


            ]


          },
          quistes: {
            title: 'Quistes',
            description: `Su diametro es de 10 a 18 micras. Es la forma màs frecuente utilizada para hacer el diagnòstico 
                          de amebiasis. Es importante determinar el nùmero de nùcleos en el quiste y su morfologìa ya que 
                          estas caracterìsticas se consideran el principal factor diagnòstico. Se encuentran tambièn en los 
                          quistes los cuerpos cromatoidales los cuales tienen forma de grano de arroz con sus bordes redondeados.`,
            images: [
              {
                url: '/images/E_histolytica/E.histolytica-E.dispar 02.jpg',
                description: 'Quiste maduro de Entamoeba histolytica con cuatro núcleos visibles.'
              },
              {
                url: '/images/E_histolytica/E.histolytica-E.dispar 03.jpg',
                description: 'Quiste inmaduro de Entamoeba histolytica con uno o dos núcleos.'
              },

              {
                url: '/images/E_histolytica/E.histolytica-E.dispar.jpg',
                description: 'Quiste inmaduro de Entamoeba histolytica con uno o dos núcleos.'
              },
            ]
          }
        }
      },

      'Entamoeba-hartmanni': {
        name: 'Entamoeba hartmanni',
        type: 'Protozoo',
        subtype: 'Ameba',
        categories: {
          
          quistes: {
            title: '',
            description: `Esta ameba no patogena muchas veces es confundida por los laboratorios clínicos con la ameba patogena 
            Entamoeba histolytica ya que su morfologia es muy similar.La manera adecuada de diferenciarlas es mediante el uso del 
            micrometro de ocular, ya que en su presentación quistica ( Imagen 1) mide menos de 10 micras.Es de importancia tener en 
            cuenta que la unica ameba que fagocita globulos rojos es Entamoeba histolytica, esta condición ayuda a diferenciarla
            de E. hartmanni y E. dispar.`,
            images: [
              {
                url: '/images/E_hartmanni/E. hartmanni 7.5 uM 40 X.jpg',
                description: 'Quiste de  E. harmanni'
              },

              {
                url: '/images/E_hartmanni/Trofozoito E. harmanni.jpg',
                description: 'Trofozoito de E. harmanni'
              },

              {
                url: '/images/E_hartmanni/quiste E hartm.jpg',
                description: 'Quiste de E. harmanni'
              },

              {
                url: '/images/E_hartmanni/quiste E hartm2.jpg',
                description: 'Quiste de E. harmanni'
              },

             
            ]
          }
        }
      },

      'entamoeba-coli': {
        name: 'Entamoeba coli',
        type: 'Protozoo',
        subtype: 'Ameba',
        categories: {
          
          quistes: {
            title: 'Quistes',
            description: `Tiene el mayor tamaño de todas las amebas de 12 a 20 micras. Puede presentar desde uno hasta ocho núcleos, 
            pero generalmente presenta más de cuatro. Su forma es por lo regular ovalada. Los cuerpos cromatoidales cuando se 
            encuentran son delgados y presentan sus extremos astillados`,
            images: [
              {
                url: '/images/E_coli/E. coli quiste.jpg',
                description: 'Quiste maduro de Entamoeba coli con ocho núcleos visibles.'
              },

              {
                url: '/images/E_coli/E. coli quiste 02.jpg',
                description: 'Quiste maduro de Entamoeba coli con ocho núcleos visibles.'
              },

              {
                url: '/images/E_coli/E. coli quiste 03.jpg',
                description: 'Quiste maduro de Entamoeba coli con ocho núcleos visibles.'
              }
            ]
          }
        }
      },

      'Iodamoeba-butschlii': {
        name: 'Iodamoeba butschlii',
        type: 'Protozoo',
        subtype: 'Ameba',
        categories: {
          
          quistes: {
            title: '',
            description: `Son muy pequeños de 5 a 10 micras generalmente con 4 núcleos que contienen cada uno un 
            cariosoma muy voluminoso y carecen de cromatina en la parte interna de la membrana nuclear.`,
            images: [
              {
                url: '/images/I_butschlii/Iodamoeba butschlii.jpg',
                description: 'Quiste de Iodamoeba butschlii'
              },

              {
                url: '/images/I_butschlii/quiste iodamoeba1.jpg',
                description: 'Quiste de Iodamoeba butschlii'
              },

              {
                url: '/images/I_butschlii/quiste iodamoeba2.jpg',
                description: 'Quiste de Iodamoeba butschlii'
              },
            ]
          }
        }
      },

    


    },



    flagelados: {

      'giardia-lamblia': {
        name: 'Giardia lamblia',
        type: 'Protozoo',
        subtype: 'Flagelado',
        categories: {
          trofozoitos: {
            title: 'Trofozoítos',
            description: `Tiene forma piriforme. Es el único protozoo intestinal que tiene simetria bilateral completa. Mide de 10 a 20 micras.
                          En el extremo anterior presenta dos núcleos con un cariosoma central grande, posee ocho flagelos de los cuales dos son 
                          posteriores y los cuatro restantes laterales. Su extremidad anterior es redondeada y la posterior puntiaguda. En su 
                          porción ventral está provisto de una concavidad superficial (disco suctorio) con la que se fija a las células intestinales. 
                          Posee además de una parte media dos barras gruesas llamadas axonemas y además un par de condensaciones que son cuerpos
                          parabasales. El movimiento unidireccional y en forma de balanceo es característica del trofozoito cuando se observa
                          en preparación en fresco.`,


            images: [
              {
                url: '/images/giardia/Trofozoito G. lamblia.jpg',
                description: 'Trofozoito G. lamblia '
              },
              
            ]
          },
          quistes: {
            title: 'Quistes',
            description: `Son ovalados miden de 8 a 12 micras de longitud con un polo más redondeado que el otro. Cuando estan inmaduros 
                          tienen dos núcleos y los maduros cuatro. Con frecuencia presentan una gruesa envoltura de doble pared. En el 
                          interior del quiste se observan unas fibrillas curvas en forma de "S" que corresponden a los futuros flagelos 
                          del trofozoito`,
            images: [
              {
                url: '/images/giardia/Quiste G. lamblia 02.jpg',
                description: 'Trofozoito G. lamblia '
              },

              {
                url: '/images/giardia/giardia.jpg',
                description: 'Quiste de G. lamblia 40X'
              },

              {
                url: '/images/giardia/Quiste G. lamblia.jpg',
                description: 'Quiste de G. lamblia '
              },
            ]
          }
        }
      },


      'Chilomastix-mesnili': {
        name: 'Chilomastix mesnili',
        type: 'Protozoo',
        subtype: 'Flagelado',
        categories: {
          
          quistes: {
            title: 'Quiste',
            description: `Junto con Giardia lamblia son los más frecuentes flagelados del intestino del hombre. Su hábitat más
                           común es el colon. No es pátogeno. Su presencia en el coprológico es indicativo de contaminación 
                           oro-fecal.
                           
                          Son incoloros característicos en forma de pera o limón. Miden de 7 a 10 micras. Chilomastix mesnili 
                          es un comensal inocuo y no da sintomatología.`,
            images: [
              {
                url: '/images/C_mesnili/chilomastix2.png',        
                description: 'Quiste de C. mesnili'
              },

              {
                url: '/images/C_mesnili/C. mesnili 02.jpg',        
                description: 'Quiste de C. mesnili'
              },
            ]
          }
        }
      },

      'Trichomonas-spp': {
        name: 'Trichomonas spp',
        type: 'Protozoo',
        subtype: 'Flagelado',
        categories: {
          
          quistes: {
            title: '',
            description: `Trichomonas spp es un protozoo flagelado que presenta solo el estadio de trofozoito. Se encuentra parasitando diferentes
                           hospederos como el ser humano con tres especies: T. hominins (encontrada en intestino), T. tenax ( en cavidad bucal) y
                            T. vaginalis (ubicada a nivel genitourinario). La especie T. vaginalis es de transmission sexual y ocasiona diferentes
                             signos y sintomas. T. tenax puede ocasionar periodontitis y gingivitis.`,
            images: [
              {
                url: '/images/T_vaginalis/Trofozoitos Trichomonas vaginalis.jpg',        
                description: 'Trofozoitos Trichomonas vaginalis'
              },
            ]
          }
        }
      },


    },

    ciliados: {
      'Neobalantidium-coli': {
        name: 'Neobalantidium coli',
        type: 'Protozoo',
        subtype: 'Ciliados',
        categories: {
          adultos: {
            title: '',
            description: `Es el mayor protozoario intestinal y el único ciliado patógeno para el hombre.
                          El cuerpo del trofozoito esta cubierto de cilias, filamentos delgados, cortos, móviles, 
                          que por medio de sus movimientos realiza el desplazamiento del parásito.
                          Dentro del citoplasma se aprecian vacuolas alimenticias o contráctiles. Posee dos núcleos: 
                          el macronúcleo en forma de riñón y en su concavidad se coloca el micronúcleo de forma esférica. 
                          Presenta en su extremo anterior una boca o citostoma y en el extremo posterior un pequeño poro,
                           el citopigio para la expulsión de los alimentos. Mide de 50 a 200 micras.
                          Este parásito vive en el intestino grueso (fotos 1 y 2) donde produce ulceraciones semejantes a 
                          los de Entamoeba histolytica. Es poco frecuente en el hombre, es más frecuente en el cerdo y los
                           individuos que trabajan con estos animales que son los que se infectan con mayor frecuencia. ` ,
            images: [
              {
                url: '/images/B_coli/Balantidium coli en tejido.jpg',
                description: 'Balantidium coli en tejido'
              },
              {
                url: '/images/B_coli/Balantidium coli en tejido 02.jpg',
                description: 'Balantidium coli en tejido'
              }
              
            ]
          },
          
        }
      }
    },


    coccidios: {
      'Cryptosporidium': {
        name: 'Cryptosporidium spp',
        type: 'Protozoo',
        subtype: 'Coccidios',
        categories: {
          adultos: {
            title: '',
            description: `La infección causada por especies de Crypstosporidium spp se encuentra asociadas a pacientes inmunosuprimidos. 
                          Hoy día son 21 especies que parasitan a las personas, siendo C. hominis y C. parvum las más frecuentes, y otras como 
                          C. andersoni , C. ubiquitum , C. meleagridis , C. muris y C. cuniculus son también patógenas. El ooquiste tiene forma 
                          esférica y miden de 4 a 6 micras siendo ácido alcohol resistentes y son infectantes una vez eliminado en las heces, 
                          siendo capaces de producir autoinfección. En su interior se encuentran cuatro esporozoitos.` ,
            images: [
              {
                url: '/images/Cryptosporidium/Cryptosporidium.jpg',
                description: 'Oquiste de Cryptosporidium'
              },

              {
                url: '/images/Cryptosporidium/Cryptosporidium01.jpg',
                description: 'Oquiste de Cryptosporidium'
              },
              {
                url: '/images/Cryptosporidium/Cryptosporidium 02.jpg',
                description: 'Oquiste de Cryptosporidium'
              },
             
              
            ]
          },
          
        }
      },


    'Isospora-belli': {
        name: 'Cystoisospora belli',
        type: 'Protozoo',
        subtype: 'Coccidios',
        categories: {
          adultos: {
            title: '',
            description: `La enfermedad causada por este parásito ha tomado importancia en los últimos años, debido al aumento de su frecuencia, 
                          principalmente en los pacientes que presentan inmunodeficiencias. El hombre es sú unico huésped definitivo. Habita
                          intracelularmente en el epitelio del duodeno distal y del yeyuno proximal, donde tiene lugar su reproducción sexual y asexual.
                          
                          Los ooquistes son eliminados con las materias fecales. Su tamaño medio es de 30 micras de largo por 12 de ancho. Son de color
                          blanco transparente y ovalados.
                          El contenido del ooquiste inmaduro es una masa esfé rica de de protoplasma que enseguida se divide para formar dos esporoblastos
                          aún dentro del ooquiste, estos desarrollan a su vez gruesas paredes quisticas y se les denomina esporoquistes.
                           Dentro de cada esporoquiste se forman cuatro esporozoitos en forma de salchicha.
                          
                          ` ,
            images: [
              {
                url: '/images/I_belli/Isospora esporoquiste sin teñir.jpg',
                description: 'Cystoisospora esporoquiste sin teñir'
              },

              {
                url: '/images/I_belli/Isospora esporoquistes teñido.jpg',
                description: 'Cystoisospora esporoquistes teñido'
              },
              
             
              
            ]
          },
          
        }
      },


      'Sarcocystis': {
        name: 'Sarcocystis spp',
        type: 'Protozoo',
        subtype: 'Coccidios',
        categories: {
          adultos: {
            title: '',
            description: `Son dos las especies más importantes que producen patologia: Sarcocystis bovihominis y Sarcocystis suihominis. 
                          El hombre puede actuar como huésped intermediario o como huésped definitivo en esta parasitosis, cuando actua 
                          como huesped definitivo una invasión intestinal y cuando lo hace como huésped intermediario se produce invasión muscular.
                          El quiste se encuentra en los músculos, como en el corte de cerdo de la foto. Mide aproximadamente 300 micras de ancho, 
                          en su interior se encuentran bradizoitos.
                          
                          ` ,
            images: [
              {
                url: '/images/Sarcocystis/Sarcocystis (corte de cerdo).jpg',
                description: 'Sarcocystis (corte de cerdo).jpg'
              },

              
            ]
          },
          
        }
      },

      'Cyclospora': {
        name: 'Cyclospora cayetanensis',
        type: 'Protozoo',
        subtype: 'Coccidios',
        categories: {
          adultos: {
            title: '',
            description: "Cyclospora cayetanensis es la coccidia cuya especie infecta a las personas tanto inmunocompetentes como inmunosuprimidas, pero hay alrededor de otras 20 especies. Los ooquistes son estructuras ácido alcohol resistentes y miden de 6 a 8 micras  debiendo madurar en el ambiente"                       
                           ,
            images: [
              {
                url: '/images/Cyclospora/Cyclospora cayetanensis.jpg',
                description: 'Cyclospora cayetanensis Técnica de Zielh Nielsen modificada'
              },

              
            ]
          },
          
        }
      }

    

  },
},

  helmintos: {
    nematodos: {
      'Ascaris-lumbricoides': {
        name: 'Ascaris lumbricoides',
        type: 'Helminto',
        subtype: 'Nematodo',
        categories: {
          adultos: {
            title: 'Huevos',
            description: `Los huevos fértiles son ovoides, tienen una cubierta compuesta por tres membranas: una interna, llamada vitelina,
             una media que contiene glucógeno y la externa de naturaleza albuminoide la cual tiene el aspecto mamelonado. Los huevos infértiles
             no tienen membrana vitelina, son más alargados que los fértiles y el material en su interior es vacuolado, opaco y granular.
            Tanto los huevos fértiles como los infértiles en ocasiones carecen de la capa albuminoide externa; en tal caso reciben el nombre de huevos decorticados.`,
            images: [
              {
                url: '/images/ascarisLumbricoides/Huevo de Ascaris fertil 02.jpg',
                description: 'Huevo de A. Lumbriocoides fertil'
              },

              {
                url: '/images/ascarisLumbricoides/ascaris1.jpg',
                description: 'Huevo de A. Lumbriocoides fertil'
              },

              {
                url: '/images/ascarisLumbricoides/ascaris2.jpg',
                description: 'Huevo de A. Lumbriocoides fertil'
              },
            ]
          },


          huevos: {
            title: 'Adulto',
            description: `Es el nemátodo de mayor tamaño que parásita el intestino del hombre. En su estado adulto la hembra es de mayor tamaño (20 a 30 cms.) 
                          que el macho (15 a 20 cms.). Son de color rosado o blanco amarilloso, los sexos se pueden diferenciar por la forma del extremo posterior,
                          el cual en el macho es curvo y presenta un par de espículas copulatorias, en la hembra el extremo posterior es recto. La boca se encuentra
                           en su  extremo anterior y se observa con la ayuda de su lupa sus tres labios.
                           
                           
                          Todos los casos de ascaridiasis deben tratarse, ya que la presencia de un solo áscaris es capaz de producir complicaciones graves
                          por migraciones del parásito.
                          
                          
                          La obstrucción intestinal es una de las complicaciones mas graves de la falta de tratamiento para las ascaridiasis, lo cual pude llevar 
                          los pacientes hasta la muerte, si no se realiza el tratamiento adecuado el cual la mayoria de las veces es la resección quirurgica, 
                          como en este caso lo muestra la foto.
                          `
                           
                           
                           ,
            images: [
              {
                url: '/images/ascarisLumbricoides/Ascaris adultas.jpg',
                description: 'A. Lumbricoides adultas'
              },

              

              {
                url: '/images/ascarisLumbricoides/ascariasis letal.jpg',
                description: 'A. Lumbriocoides letal'
              },

              {
                url: '/images/ascarisLumbricoides/Obstrucción intestinal.jpg',
                description: 'Obstrucción intestinal'
              },
            ]
          }
        }
      },
      'trichuris-trichiura': {
        name: 'Trichuris trichiura',
        type: 'Helminto',
        subtype: 'Nematodo',
        categories: {
          adultos: {
            title: '',
            description:  `Se conoce con el nombre de tricocéfalo. Es un gusano blanco que se caracteriza por tener dos tercios anteriores del cuerpo 
                          muy delgado, el tercio posterior es más grueso, y en conjunto simula un látigo.

                          Los huevos salen con las materias fecales y no están embrionados, por lo tanto no son todavía infectantes; ellos requieren
                          de un periodo de maduración en el suelo de dos semanas a varios meses para convertirse en infectantes por vía oral.
                          
                          Miden aproximadamente 25 micras de ancho por 50 de largo, son muy característicos y fácil de identificar de color café doble
                          membrana y tapones albuminoides en sus extremos. Tienen la forma de limón o balón de rugby. El hombre es el unico huésped 
                          de este parásito.`,
            images: [
              {
                url: '/images/T_trichiura/Trichuris trichiura.jpg',
                description: ''
              },
              {
                url: '/images/T_trichiura/Trichuris trichiura 01.jpg',
                description: ''
              }
            ]
          },
          
        }
      },

      'Uncinarias': {
        name: 'Uncinarias',
        type: 'Helminto',
        subtype: 'Nematodo',
        categories: {
          adultos: {
            title: '',
            description:  `Se conocen con este nombre principalmente dos parásitos: Necator americano y Ancylostoma duodenale. Los adultos de estos
                           parásitos son muy similares, en ete caso se hara una descripción de la especie Ancylostoma duodenale.`,
            images: [

              
             
            ]
          },

          huevos0: {
            title: '',
            description:  ` Los huevos de las uncinarias son indistinguibles entre sí. La forma es oval y miden 60 por 40 micras, son de color blanco
                            con una membrana muy delgada y única. Entre ella y el interior que puede ser una masa granulosa única o con blastomeros, 
                            siempre hay un espacio libre.
                           `,
            images: [

              {
                url: '/images/Uncinarias/Uncinarias.jpg',
                description: ''
              },
              {
                url:  '/images/Uncinarias/Uncinarias01.jpg',
                description: ''
              }
             
            ]
          },

          huevos1: {
            title: '',
            description:  ` Los párasitos presentan un color blanco y el macho (fotos 3 y 4) se diferencia de la hembra por tener en el extremo 
                            posterior un ensanchamiento radial conocido como bolsa o bursa copulatriz, la cual utiliza para agarrar a la hembra
                            durante la cópula, el extremo posterior de la hembra tiene forma cónica y no tiene el ensanchamiento.
                           `,
            images: [

              {
                url: '/images/Uncinarias/A. duodenale porcion cefalica 10 X.jpg',
                description: 'A. duodenale porción cefalica 10X'
              },
              {
                url:  '/images/Uncinarias/A. duodenale poecion caudal 4X.jpg',
                description: 'A. duodenale porción caudal 4X'
              }
             
            ]
          },

          
          
        }
      },

      'Strongyloides_stercoralis': {
        name: 'Strongyloides spp',
        type: 'Helminto',
        subtype: 'Nematodo',
        categories: {
          adultos: {
            title: '',
            description:  `Una de las geohelmintiasis asociada a pacientes inmunosuprimidos es la estrongiloidiasis, es causada por tres especies, 
                          Strongyloides stercoralis, S. fuelleborni y S. fuelleborni kellyi. En los hospederos vertebrados se comporta como un parásito 
                          partenogenético pero libre en el ambiente realiza reproducción sexual.En las heces se pueden visibilizar huevos, 
                          larvas rhabditiformes y filariformes.
                            `,
            images: [
              {
                url: '/images/S_stercoralis/Larva rhaditiforme.jpg',
                description: 'Larva rhaditiforme de strongyloides spp'
              },

              {
                url: '/images/S_stercoralis/Larva rhaditiforme2.jpg',
                description: 'Larva rhabditiforme 300 μm'
              },

              {
                url: '/images/S_stercoralis/filariforme.jpg',
                description: 'Larva filariforme de strongyloides spp'
              },

              {
                url: '/images/S_stercoralis/filariforme2.jpg',
                description: 'Larva filariforme 500 μm '
              }
            ]
          },
          
        }
      },

      'Enterobius-vermicularis': {
        name: 'Enterobius vermicularis',
        type: 'Helminto',
        subtype: 'Nematodo',
        categories: {
          adultos: {
            title: '',
            description:  `Los huevos de este parasito son blancos, transparentes bastante típicos con un lado plano y el otro curvo, 
                          por lo cual tienen un aforma similar a la letra "D". Miden de 50 a 60 micras de longitud por 25 de ancho,
                           tienen una envoltura delicada y traslucida; generalmente están maduros (larvados) en el momento de la 
                           oviposición por lo que puede presentarse autoinfección. El hombre es su único huesped definitivo.`,
            images: [
              {
                url: '/images/E_vermicularis/huevo de oxiuro.jpg',
                description: 'Huevo'
              },
              {
                url: '/images/E_vermicularis/Enterobius huevo.jpg',
                description: 'Huevo'
              },

              {
                url: '/images/E_vermicularis/huevo.jpg',
                description: 'Huevos'
              },

              {
                url: '/images/E_vermicularis/extremo_cefalico.jpg',
                description: 'Extremo cefálico'
              },
              {
                url: '/images/E_vermicularis/corteTrans.jpg',
                description: 'Corte transversal'
              }
            ]
          },
          
        }
      },

      'Trichinella-spiralis': {
        name: 'Trichinella spiralis',
        type: 'Helminto',
        subtype: 'Nematodo',
        categories: {
          adultos: {
            title: '',
            description:  `Los gusanos adultos habitan en su corto período de vida en el intestino delgado (duodeno - yeyuno). 
                          Los machos miden 1.5 mm y las hembras unos 3 - 4 mm. Las larvas que viven enquistadas en los músculos estriados,
                          particularmente en su parte tendinosa, miden aproximadamente 1 mm de longitud y los quistes que pueden estar
                          calcificados de 0.25 a 0.5 mm..
`,
            images: [
              {
                url: '/images/Trichinella/Trichinella.jpg',
                description: ''
              },
              
            ]
          },
          
        }
      },
      
      
    },
    

    trematodos: {
      'Fasciola-hepatica': {
        name: 'Fasciola hepatica',
        type: 'Helminto',
        subtype: 'Trematodo',
        categories: {
          descrp1: {
            title: '',
            description: `Es un gusano grande, carnoso, en forma de hoja, mide de 2 a 3 cms de longitud y cerca de 1,5 cms de ancho; en su parte anterior 
                          tiene una saliente en forma de cono que contiene la ventosa oral y por detrás de ésta, en la cara ventral se encuentra el acetábulo 
                          que es de mayor tamaño. Entre las dos ventosas se encuentra el poro genital común. El extremo posterior es redondeado. Su aparato
                          digestivo se caracteriza por presentar ciegos ramificados que se extiende hasta el extremo posterior. Son hermafroditas y los órganos
                          genitales masculino y femenino se encuentran muy desarrollados.`,
            images: [
              {
                url: '/images/Fasciola/Fasciola placa.jpg',
                description: 'Fasciola placa'
              },
              {
                url: '/images/Fasciola/Fasciola fresca.jpg',
                description: 'Fasciola fresca'
              }
            ]
          },

          huevosFaciola: {
            title: '',
            description:`Los huevos son ovalados y con un opérculo en uno de sus extremos, miden aproximadamente 150 micras en su longitud mayor y es el más
                          grande de los producidos por parásitos humanos, son depositados sin madurar en los conductos biliares del huésped y
                          se evacuan a través de las heces.`,
            images: [
              {
                url: '/images/Fasciola/Huevo de fasciola 10 X.jpg',
                description: 'Huevo de fasciola 10 X.jpg'
              },
            ]
          },


          metacercarias : {
            title: '',
            description:`Las metacercarias de Fasciola hepática perforan y atraviesan la pared duodenal, pasan a la cavidad peritoneal donde permanecen unas 
                          dos semanas, después atraviesan la cápsula de Glisson, el parénquima hepático y se localizan en los canaliculos biliares.`,
            images: [
              {
                url: '/images/Fasciola/Fasciola en tejido.jpg',
                description: 'Fasciola en tejido'
              },
            ]
          }
        }
      },


      'Paragonimus-westermani': {
        name: 'Paragonimus spp',
        type: 'Helminto',
        subtype: 'Trematodo',
        categories: {
          descrp1: {
            title: '',
            description: `Es un trematodo redondeado, carnoso, muy móvil, ofrece el aspecto de un grano de café, mide de 1 a 2 centímetros en su diámetro mayor.
                           Su cuerpo está cubierto por pequeñas espinas. Los huevos son operculados (foto 1), ovoides miden aproximadamente 80 x 50 micras 
                           y son de color café.`,
            images: [
              {
                url: '/images/Paragonimus/Paragonimus huevo 10 X.jpg',
                description: 'Paragonimus huevo 10 X.jpg'
              },
              
            ]
          },
        },

      }

    //----------------------------------------------------------------  
      
    },

    cestodos: {
      'taenia-spp': {
        name: 'Taenia spp',
        type: 'Helminto',
        subtype: 'Cestodo',
        categories: {
          huevos: {
            title: 'Huevos',
            description: 'Los huevos de las especies T. solium y T. saginata, no son identificables mediante el examen coprologico normal.',
            images: [
              {
                url: '/images/taenia/Taenia sp huevo 02.jpg',
                description: 'Huevo taenia sp'
              },
              {
                url: '/images/taenia/Taenia sp huevo 03 20 X.jpg',
                description: 'Taenia sp huevo 03 20 X.jpg'
              }
              ,{
                url: '/images/taenia/Taenia sp huevo.jpg',
                description: 'Taenia sp huevo.jpg'
              },

            ]
          },


          adulto: {
            title: 'Adulto',
            description: 'Son gusanos planos de forma acintada, cuyo cuerpo está constituído por las siguientes partes: Escólex o cabeza, un cuello y el resto del cuerpo llamado estrobilo, el cual esta constituido por una serio de segmentos que reciben el nombre de proglótides',
            images: [


              {
                url: '/images/taenia/Taenia adulta 03.jpg',
                description: 'Taenia adulta'
              },

              {
                url: '/images/taenia/taenia adulta.jpg',
                description: 'Taenia adulta'
              },

              {
                url: '/images/taenia/neurocistecircosis.jpg',
                description: 'Neurocisticercosis causada por Taenia solium'

              }
            ]
          }
        }
      },

      'Hymenoleois-nana': {
        name: 'Hymenoleois nana',
        type: 'Helminto',
        subtype: 'Cestodo',
        categories: {
          descrip: {
            title: '',
            description: `Esta taenia mide de 2 a 4 cms. Presenta un escólex pequeño con cuatro ventosas y un rostelo armado con ganchos. Los proglótides 
                          son más anchos que largos y los maduros se caracterizan por presentar 3 testiculos ovoides. Los huevos que miden de 40 a 50 micras 
                          están embrionados al momento de ser expulsados con las heces, son blancos transparentes, contienen una oncosfera con 6 ganchos 
                          encerrada en una cubierta interna que presenta 2 espesamientos polares, de donde salen 4 a 8 filamentos polares.`,
            images: [
              {
                url: '/images/H_ nana/H_ nana.jpg',
                description: ''
              },
        
            ]
          },


        }
      },


      'Hymenoleois-diminuta': {
        name: 'Hymenoleois diminuta',
        type: 'Helminto',
        subtype: 'Cestodo',
        categories: {
          descrip: {
            title: '',
            description: `A pesar de su nombre específico es mucho mayor que la H. nana. El parásito adulto mide de 20 a 60 cms, y tiene de 800 a
                          1000 proglótides. El escólex no tiene ganchos y posee cuatro ventosas. Los proglótides maduros semejan los de H. nana. 
                          Los proglótides grávidos se desprenden en el intestino donde liberan los huevos. Estos son redondeados y miden de 60 a 
                          80 micras, difiere del de H. nana por la ausencia de filamentos polares en la membrana interna.`,
            images: [
              {
                url: '/images/H_diminuta/Hymenolepis diminuta.jpg',
                description: ''
              },
        
            ]
          },


        }
      },


      'Echinococcus-granulosus': {
        name: 'Echinococcus granulosus',
        type: 'Helminto',
        subtype: 'Cestodo',
        categories: {
          descrip: {
            title: '',
            description: `Es el cestodo más pequeño de interés médico. El gusano adulto mide de 3 a 6 mm de longitud, posee un escólex globular 
                          con cuatro ventosas y un rostelo armado con dos coronas de ganchos y 3 proglótides: uno inmaduro, otro maduro y uno grávido.
                          El huevo de 30 a 40 micras semeja los de otras tenias.`,
            images: [
              {
                url: '/images/Echinococcus/Echinococcus.jpg',
                description: ''
              },

              {
                url: '/images/Echinococcus/Equinococcus 02.jpg',
                description: ''
              },
        
            ]
          },


          descrip1: {
            title: '',
            description: `Cuando el huevo es ingerido por el huésped intermediario incluyendo al hombre, el embrión liberado penetra en la pared 
                          intestinal y pasa a los linfáticos o vénulas mesentéricas y es arrastrado por el torrente circulatorio a diversas partes 
                          del cuerpo, con más frecuencia se aloja en el hígado, pero también puede llegar a los pulmones, músculo, riñón, huesos, 
                          bazo, ojo y otros organos formando lo que se conoce como quiste hidatidico, siendo el unilocular el producido por 
                          el Equinococcus granulosus.`,
            images: [
              {
                url: '/images/Echinococcus/Echinococcus en tejido.jpg',
                description: 'Echinococcus en tejido'
              },

        
            ]
          },


        }
      }



    }
  }
};


