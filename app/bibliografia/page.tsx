import Link from 'next/link';

export default function BibliografiaPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Bibliografía</h1>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <p className="inline">
          Adl, S. M., et al. (2012). The revised classification of eukaryotes. The Journal of eukaryotic microbiology, 59(5), 429–493. https://doi.org/10.1111/j.1550-7408.2012.00644.x
          </p>
        </li>
        <li>
          <p className="inline">
          https://www.who.int/news-room/questions-and-answers/item/neglected-tropical-diseases. Neglected tropical diseases
          </p>
        </li>
        <li>
          <p className="inline">
          Hotez PJ, et al. (2020) What constitutes a neglected tropical disease? PLoS Negl Trop Dis 14(1): e0008001. https://doi.org/10.1371/journal.pntd.0008001 .
          </p>
        </li>
        <li>
          <p className="inline">
          Rodrigues ML, Nosanchuk JD (2020). Fungal diseases as neglected pathogens: A wakeup call to public health officials. PLoS Negl Trop Dis 14(2): e0007964. https://doi.org/10.1371/journal.pntd.0007964
          </p>
        </li>
        <li>
          <p className="inline">
          Hay R, et al. (2019). The Diagnosis of Fungal Neglected Tropical Diseases (Fungal NTDs) and the Role of Investigation and Laboratory Tests: An Expert Consensus Report. Trop Med Infect Dis. Sep 24;4(4):122. doi: 10.3390/tropicalmed4040122

          </p>
        </li>
        <li>
          <p className="inline">
          Denning D. W. (2024). Global incidence and mortality of severe fungal disease. The Lancet. Infectious diseases, 24(7), e428–e438. https://doi.org/10.1016/S1473-3099(23)00692-8
          </p>
        </li>
        <li>
          <p className="inline">
          Thompson, G. R., et al. (2021). Global guideline for the diagnosis and management of the endemic mycoses: an initiative of the European Confederation of Medical Mycology in cooperation with the International Society for Human and Animal Mycology. The Lancet. Infectious diseases, 21(12), e364–e374. https://doi.org/10.1016/S1473-3099(21)00191-2
          </p>
        </li>
        <li>
          <p className="inline">
          Ashraf, N., et al. (2020). Re-drawing the Maps for Endemic Mycoses. Mycopathologia, 185(5), 843–865. https://doi.org/10.1007/s11046-020-00431-2
          </p>
        </li>
        <li>
          <p className="inline">
          Caceres, D. H., et al. (2022). Current situation of endemic mycosis in the Americas and the Caribbean: Proceedings of the first international meeting on endemic mycoses of the Americas (IMEMA). Mycoses, 65(12), 1179–1187. https://doi.org/10.1111/myc.13510
          </p>
        </li>
        <li>
          <p className="inline">
          Morán, P., et al. (2023). Amoebiasis: Advances in Diagnosis, Treatment, Immunology Features and the Interaction with the Intestinal Ecosystem. International journal of molecular sciences, 24(14), 11755. https://doi.org/10.3390/ijms241411755
          </p>
        </li>
        <li>
          <p className="inline">
          Adam R. D. (2021). Giardia duodenalis: Biology and Pathogenesis. Clinical microbiology reviews, 34(4), e0002419. https://doi.org/10.1128/CMR.00024-19
          </p>
        </li>
        <li>
          <p className="inline">
          Votýpka, J., et al. (2016). Apicomplexa. Handbook of the Protists, 1–58. doi:10.1007/978-3-319-32669-6_20-1 10.1007/978-3-319-32669-6_20-1
          </p>
        </li>
        <li>
          <p className="inline">
          N. Contreras-Puentes, et al. Intestinal coccidian: an overview epidemiologic worldwide and Colombia. Infectio 2020; 24(2):112-125
          </p>
        </li>
        <li>
          <p className="inline">
          Frey, C. F., &amp; Müller, N. (2012). Tritrichomonas – Systematics of an enigmatic genus. Molecular and Cellular Probes, 26(3), 132–136. doi:10.1016/j.mcp.2012.02.002
          </p>
        </li>
        <li>
          <p className="inline">
          Jourdan, P. M., et al. (2018). Soil-transmitted helminth infections. Lancet (London,England), 391(10117), 252–265. https://doi.org/10.1016/S0140-6736(17)31930-X
          </p>
        </li>
        <li>
          <p className="inline">
          Else, K. J., Keiser, J., Holland, C. V., Grencis, R. K., Sattelle, D. B., Fujiwara, R. T., Bueno, L. L., Asaolu, S. O., Sowemimo, O. A., &amp; Cooper, P. J. (2020). Whipworm and roundworm infections. Nature reviews. Disease primers, 6(1), 44. https://doi.org/10.1038/s41572-020-0171-3
          </p>
        </li>
        <li>
          <p className="inline">
          Webb, C., &amp; Cabada, M. M. (2017). Intestinal cestodes. Current opinion in infectious diseases, 30(5), 504–510. https://doi.org/10.1097/QCO.0000000000000400
          </p>
        </li>
        <li>
          <p className="inline">
          Garcia, H. H., et al. (2020). Taenia solium Cysticercosis and Its Impact in Neurological Disease. Clinical microbiology reviews, 33(3), e00085-19. https://doi.org/10.1128/CMR.00085-19
          </p>
        </li>

        <li>
          <p className="inline">
          Del Brutto O. H. (2022). Human Neurocysticercosis: An Overview. Pathogens (Basel,Switzerland), 11(10), 1212. https://doi.org/10.3390/pathogens11101212
          </p>
        </li>

      </ul>
      <div className="mt-8">
        <Link 
          href="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  )
}
