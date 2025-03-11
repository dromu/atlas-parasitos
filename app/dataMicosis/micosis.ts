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
                                  url: '/images/Micosis/Fig1_pitariasisVersicolor.jpg',
                                  description: 'Paciente con Pitiriasis versicolor'
                              },
                          ]
                      }
                  }
              }
          },
      },
      Profundas: {},
      RespiratorioInvasoras: {}
  }



