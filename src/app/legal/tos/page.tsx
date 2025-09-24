// app/legal/tos/page.tsx
"use client";

import React from "react";
import { Header } from "@/components/freefire/Header";
import { Footer } from "@/components/freefire/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Conteúdo */}
      <main className="flex-1 flex justify-center px-4 py-10">
        <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Termos de Serviço
          </h1>

          <div className="space-y-4 text-justify leading-relaxed text-gray-700">
            {/* 1 INTRODUÇÃO */}
            <h2 className="text-lg font-bold text-gray-900">1. INTRODUÇÃO</h2>
            <p className="text-[15px]">
              1.1 Bem-vindo à Garena. Estes Termos de Serviço estabelecem os termos
              e condições pelos quais a Garena Online Private Limited e suas
              afiliadas e subsidiárias (individual e coletivamente, "Garena", "nós"
              ou “nosso(a)(s)").” oferecem:
            </p>

          <ul className="list-none pl-0 text-[15px] space-y-0">
  <li>
    <span className="mr-1">(a)</span> Nosso PC e jogos mobile (“Games”);
  </li>
  <li>
    <span className="mr-1">(b)</span> Os subjacentes jogos de software do cliente e a
    Garena PC e a plataforma móvel de software do cliente ("Software");
  </li>
  <li>
    <span className="mr-1">(c)</span> este website, incluindo a Loja Garena ("Site"); e
  </li>
  <li>
    <span className="mr-1">(d)</span> Quaisquer outros aplicativos, website, jogos ou
    serviços que tenham um link para estes Termos de Serviço, independentemente
    de como você os acesse ou utilize, inclusive através de dispositivos móveis,
    (coletivamente, os "Serviços").
  </li>
</ul>

            <p className="text-[15px]">
              1.2 Os Serviços também incluem quaisquer serviços fornecidos por ou através do software cliente da plataforma Garena, quaisquer serviços disponibilizados através de nossos Jogos ou do Site, e todas as informações, páginas vinculadas, recursos, dados, textos, imagens, fotografias, gráficos, música, sons, vídeo, mensagens, tags, conteúdo, programação, software, serviços de aplicativo (incluindo, sem limitação, quaisquer serviços de aplicativos para dispositivos móveis) ou outros materiais disponibilizados por nós ou através de nós, incluindo conteúdo gerado pelo usuário ou "UGC" (coletivamente, "Conteúdo"). "UGC" refere-se ao conteúdo de qualquer tipo ou natureza que os Usuários (definidos abaixo) carregam, criam e publicam, ou de outra forma geram ou tornam disponível nos Serviços. Quaisquer atualizações, upgrades e novas características adicionadas ou que aumentem os Serviços também estão sujeitas a estes Termos de Serviço. Nem todos os Serviços ou Conteúdos estão disponíveis em todas as jurisdições.
            </p>
              <p className="text-[15px]">
              1.3 Leia atentamente estes Termos de Serviço antes de utilizar os Serviços ou abrir uma conta Garena ("Conta") para que você, como usuário, esteja ciente de seus direitos e obrigações legais com relação à Garena e seus serviços. Usuário se refere a um indivíduo que se registra para uma Conta conosco ou que de outra forma acessa ou utiliza os Serviços (individual e coletivamente, "Usuário (s)", "você (s)" ou "seu (s)").
               </p>
            <p className="text-[15px]">
              1.4 AO UTILIZAR OS SERVIÇOS OU ABRIR UMA CONTA, VOCÊ INDICA SUA ACEITAÇÃO IRREVOGÁVEL DESTES TERMOS DE SERVIÇO. SE VOCÊ NÃO CONCORDAR COM ESTES TERMOS DE SERVIÇOS, POR FAVOR, NÃO UTILIZE NOSSOS SERVIÇOS.
               </p>

                       <p className="text-[15px]">
              1.5 SE VOCÊ FOR MENOR DE 18 ANOS OU A "IDADE DA MAIORIDADE" RELEVANTE ONDE VOCÊ VIVE, VOCÊ DEVE OBTER PERMISSÃO DOS PAIS OU RESPONSÁVEL LEGAL PARA ABRIR UMA CONTA E OS PAIS OU RESPONSÁVEL LEGAL DEVE CONCORDAR COM ESTES TERMOS DE SERVIÇO. SE VOCÊ NÃO SOUBER SE ATINGIU A "IDADE DA MAIORIDADE". ONDE VOCÊ MORA, OU NÃO ENTENDE ESTA SEÇÃO, POR FAVOR, NÃO CRIE UMA CONTA ATÉ QUE VOCÊ TENHA PEDIDO AJUDA A SEUS PAIS OU RESPONSÁVEIS LEGAIS. SE VOCÊ É O PAI OU RESPONSÁVEL LEGAL DE UM MENOR QUE ESTÁ CRIANDO UMA CONTA, VOCÊ DEVE ACEITAR ESTES TERMOS DE SERVIÇO EM NOME DO MENOR E VOCÊ SERÁ RESPONSÁVEL POR TODO O USO DA CONTA OU SERVIÇOS, INCLUINDO COMPRAS OU OUTRAS TRANSAÇÕES FEITAS PELO MENOR EM CONEXÃO COM OS SERVIÇOS, SE A CONTA DO MENOR ESTÁ AGORA ABERTA OU CRIADA MAIS TARDE E SE O MENOR É OU NÃO SUPERVISIONADO POR VOCÊ DURANTE TAL COMPRA OU OUTRO USO DOS SERVIÇOS.
               </p>

                                <p className="text-[15px]">
              1.6 Garena reserva o direito de revisar estes Termos de Serviço a qualquer momento ou com aviso prévio a seus Usuários, sujeito a lei aplicável. Nós o atualizaremos periodicamente sobre qualquer revisão deste Termo de Serviços incluindo a publicação do Termo de Serviços revisado aqui. Nós indicamos que verifique esta página regularmente para tomar nota de quaisquer alterações. Na medida máxima autorizada por lei, seu uso continuado ou uso dos Serviços será considerado como aceitação irrevogável dessas revisões.
               </p>

                 <p className="text-[15px]">
              1.7 Garena se reserva o direito de alterar, modificar, suspender ou descontinuar qualquer parte dos Serviços a qualquer momento. A Garena pode lançar certos Serviços ou suas características em uma versão beta, que pode não funcionar corretamente ou da mesma forma que a versão final pode funcionar, e não seremos responsabilizados em tais casos. A Garena também pode impor limites a certas características ou restringir seu acesso a partes dos Serviços, ou ao todo, a seu exclusivo critério e sem aviso prévio ou responsabilidade.
               </p>

                 <p className="text-[15px]">
              1.8 Garena se reserva o direito de recusar o seu acesso aos Serviços ou de permitir que você abra uma Conta por qualquer motivo.
               </p>



            {/* 2 PRIVACIDADE */}
            <h2 className="text-lg font-bold text-gray-900">2. PRIVACIDADE</h2>
            <p className="text-[15px]">
              2.1 Sua privacidade é muito importante para nós na Garena. Para melhor proteger seus direitos, fornecemos a Política de Privacidade Garena para explicar em detalhes nossas práticas de privacidade. Favor rever a Política de Privacidade para entender como a Garena coleta e utiliza as informações associadas à sua conta e/ou ao seu uso dos Serviços. Ao acessar ou utilizar os Serviços ou concordar com estes Termos de Serviço, você consente com a coleta, uso, divulgação, processamento e/ou transaferência de seu Conteúdo e dados pessoais pela Garena, conforme descrito na Política de Privacidade.
            </p>

            {/* 3 LICENÇA LIMITADA */}
            <h2 className="text-lg font-bold text-gray-900">3. LICENÇA LIMITADA</h2>
            <p className="text-[15px]">
              3.1 Garena lhe concede um direito limitado não exclusivo e intransferível e licença para instalar o Software e para acessar e/ou utilizar os Serviços, sujeito aos termos e condições destes Termos de Serviço e somente para uso pessoal. De acordo com esta licença, você pode, entre outros, usar os Serviços para criar, desenvolver, modificar, carregar e compartilhar (com outros Usuários) UGC como parte dos Jogos. Para evitar dúvidas, esta licença não permite que você faça qualquer uso comercial ou qualquer uso derivativo dos Serviços (incluindo sem limitação qualquer de seus elementos individuais, incluindo mas não se limitando aos Jogos, Software ou Conteúdo). A Garena se reserva o direito de terminar qualquer uma das licenças concedidas nestes Termos de Serviço a qualquer momento e por qualquer motivo, sem aviso prévio. Todos os direitos não concedidos expressamente pela Garena sob estes Termos de Serviço são aqui reservados pela Garena. Quaisquer scripts ou códigos de terceiros, vinculados ou referenciados pelos Serviços, são licenciados a você pelos terceiros que possuem tais scripts ou códigos, não pela Garena.
            </p>

                        <p className="text-[15px]">
              3.2 Você reconhece e concorda que todos os títulos, direitos de propriedade e direitos de propriedade intelectual relacionados com os Serviços (incluindo, mas não limitados a quaisquer obras derivadas, títulos, código de computador, objetos, temas, personagens, nomes de personagens, histórias, diálogos, frases de captura, localizações, conceitos, obras de arte, gráficos, animação, sons, composições musicais, efeitos audiovisuais, textos, telas, métodos de operação, direitos morais, "applets" incorporados nos Serviços, e qualquer documentação relacionada), com exclusão da UGC (que estão sujeitas e regidas pela Cláusula 12 abaixo), são de propriedade da Garena e, quando aplicável, de terceiros proprietários identificados nos Serviços.
            </p>
                        <p className="text-[15px]">
            3.3 Ao utilizar ou acessar os Serviços, você concorda em cumprir com os direitos autorais, marca registrada, marca de serviço e todas as outras leis aplicáveis que protegem os Serviços e seu Conteúdo. Você concorda em não copiar, distribuir, republicar, transmitir, exibir publicamente, executar publicamente, modificar, adaptar, alugar, vender ou criar trabalhos derivados de qualquer parte dos Serviços ou seu Conteúdo. Você também não pode, sem nosso consentimento prévio por escrito, espelhar ou enquadrar qualquer parte ou totalidade dos Serviços em qualquer outro servidor ou como parte de qualquer outro website. Além disso, você concorda em não utilizar nenhum robô, spider ou qualquer outro dispositivo automático ou processo manual para monitorar ou copiar nosso Conteúdo, sem nosso consentimento prévio por escrito (tal consentimento é considerado dado para a tecnologia padrão de mecanismos de busca empregados por sites de busca na Internet para direcionar usuários da Internet a este site).                      
        </p>
       <p className="text-[15px]">
3.4 Você é bem-vindo a criar um link para o site a partir de seu site, desde que seu site não implique qualquer endosso ou associação com a Garena. Você reconhece que a Garena poderá, a seu exclusivo critério e a qualquer momento, descontinuar o fornecimento de qualquer parte dos Serviços sem aviso prévio.
               </p>



{/* 4 TERMOS DE USO */}
<h2 className="text-lg font-bold text-gray-900">4. TERMOS DE USO</h2>
<p className="text-[15px]">
  4.1 A licença para uso dos Serviços é válida até o término conforme
  estabelecido nestes Termos de Serviço ou se você não cumprir qualquer termo
  ou condição destes Termos de Serviço. Neste caso, nenhuma notificação será
  exigida pela Garena para efetuar tal encerramento.
</p>

<p className="text-[15px] mt-4">4.2 Você concorda em não:</p>

<ul className="list-none pl-6 space-y-2 text-[15px]">
  <li>
    <span className="mr-1">(a)</span> carregar, publicar, enviar por e-mail, transmitir ou disponibilizar de
    outra forma qualquer Conteúdo que seja ilegal, prejudicial, ameaçador,
    abusivo, assediador, alarmante, angustiante, tortuoso, difamatório, vulgar,
    obsceno, calunioso, invasivo da privacidade alheia, odioso, ou racialmente,
    etnicamente ou de outra forma censurável;
  </li>
  <li>
    <span className="mr-1">(b)</span> Utilizar os Serviços para prejudicar menores ou disponibilizar conteúdo
    nocivo para menores de qualquer forma;
  </li>
  <li>
    <span className="mr-1">(c)</span> carregar, publicar, enviar por e-mail, transmitir ou disponibilizar de
    outra forma qualquer Conteúdo que viole os direitos, incluindo qualquer
    patente, marca registrada, direito autoral, propriedade intelectual ou
    outros direitos de propriedade, de qualquer parte;
  </li>
  <li>
    <span className="mr-1">(d)</span> usar os Serviços para fazer-se passar por qualquer pessoa ou entidade,
    ou de outra forma deturpar sua afiliação com uma pessoa ou entidade;
  </li>
  <li>
    <span className="mr-1">(e)</span> forjar cabeçalhos ou manipular identificadores a fim de disfarçar ou
    induzir ao erro quanto a origem de qualquer Conteúdo ou comunicações
    transmitidas através dos Serviços;
  </li>
  <li>
    <span className="mr-1">(f)</span> remover qualquer aviso de propriedade dos Serviços;
  </li>
  <li>
    <span className="mr-1">(g)</span> causar, permitir ou autorizar a modificação, criação de obras derivadas
    ou tradução dos Serviços sem a permissão expressa da Garena;
  </li>
  <li>
    <span className="mr-1">(h)</span> utilizar os Serviços para qualquer propósito comercial ou benefício de
    terceiros ou de qualquer forma não permitida pelas licenças aqui concedidas;
  </li>
  <li>
    <span className="mr-1">(i)</span> Utilizar os Serviços para fins fraudulentos ou ilegais, incluindo para
    quaisquer propósitos relacionados ou encorajando a lavagem de dinheiro ou
    jogos de azar ou de outra forma inconsistentes com, ou contrários às leis
    aplicáveis;
  </li>
  
  <li>
    <span className="mr-1">(j)</span> tentar descompilar, fazer engenharia reversa, desmontar ou invadir os Serviços (ou qualquer parte deles)ou qualquer rede conectada com os Serviços, ou para tentar uma violação, derrotar ou superar qualquer medidas de autenticação, tecnologia de criptografia ou medidas de segurança implementadas pela Garena com relação aos Serviços, qualquer rede conectada ou associada com os Serviços, e/ou qualquer dados transmitidos, processados ou armazenados pela Garena;
  </li>
  
    <li>
    <span className="mr-1">(k)</span> carregar, publicar, enviar por e-mail, transmitir ou disponibilizar qualquer Conteúdo que contenha vírus de software ou qualquer outro código de computador, arquivo ou programa projetado para interromper, destruir, alterar e/ou limitar a funcionalidade dos Serviços e/ou qualquer recurso informático pertencente à Garena ou a seus Usuários;
  </li>

    <li>
    <span className="mr-1">(l)</span> carregar, publicar, enviar por e-mail, transmitir ou disponibilizar de outra forma qualquer Conteúdo que ameace a unidade, integridade, defesa, segurança ou soberania da nação ou jurisdição da qual você esteja acessando ou usando os serviços, relações amigáveis com Estados estrangeiros, ou ordem pública, ou que cause incitação à prática de qualquer ofensa conhecida ou que impeça a investigação de qualquer ofensa ou que seja insultuosa a outras nações;
  </li>

    <li>
    <span className="mr-1">(m)</span> tentar solicitar, colher ou coletar qualquer informação sobre ou relativa a outros Usuários ou titulares de conta, incluindo, sem limitação, quaisquer dados pessoais, informação da conta, senhas ou outras informações ;
  </li>

    <li>
    <span className="mr-1">(n)</span> tentar ou obter acesso não autorizado a qualquer parte ou recurso dos Serviços, incluindo qualquer outra conta de Usuário;
  </li>

    <li>
    <span className="mr-1">(o)</span> carregar, postar, enviar por e-mail, transmitir ou disponibilizar de outra forma qualquer Conteúdo que você não tenha o direito de disponibilizar sob qualquer lei ou sob relações contratuais ou fiduciárias (tais como informações privilegiadas, informações proprietárias e confidenciais obtidas ou divulgadas como parte de relações de emprego ou sob contratos de não-divulgação);
  </li>

    <li>
    <span className="mr-1">(p)</span> carregar, publicar, enviar por e-mail, transmitir ou disponibilizar de outra forma qualquer Conteúdo que infrinja qualquer patente, marca, segredo comercial, direito autoral ou outros direitos de propriedade de qualquer parte;
  </li>

    <li>
    <span className="mr-1">(q)</span> carregar, postar, enviar por e-mail, transmitir ou disponibilizar qualquer publicidade não solicitada ou não autorizada, materiais promocionais, "lixo eletrônico", "spam", "correntes", "esquemas em pirâmide" ou qualquer outra forma não autorizada de solicitação;
  </li>

    <li>
    <span className="mr-1">(r)</span> carregar, publicar, enviar por e-mail, transmitir ou de outra forma disponibilizar qualquer material que contenha vírus de software, worms, cavalos de Tróia ou qualquer outro código de computador, rotinas, arquivos ou programas projetados para direta ou indiretamente interferir com, manipular, interromper, destruir ou limitar a funcionalidade ou integridade de qualquer software ou hardware de computador ou equipamento de dados ou telecomunicações;
  </li>

    <li>
    <span className="mr-1">(s)</span> usar qualquer versão modificada, pirateada ou outra versão não autorizada dos Serviços, inclusive para enganar, ganhar vantagem injusta em relação a outros Usuários, ou para qualquer outro propósito;
  </li>

    <li>
    <span className="mr-1">(t)</span> interromper o fluxo normal do diálogo, fazer com que uma tela "role" mais rápido do que outros usuários dos Serviços são capazes de digitar, ou agir de outra forma que afete negativamente a capacidade dos outros Usuários de se envolverem em trocas em tempo real;
  </li>

    <li>
    <span className="mr-1">(u)</span> interferir, manipular ou perturbar os Serviços ou servidores ou redes conectadas aos Serviços ou qualquer outro Usuário que use e desfrute dos Serviços, ou desobedecer a quaisquer requisitos, procedimentos, políticas ou regulamentos de redes conectadas aos Serviços;
  </li>

    <li>
    <span className="mr-1">(v)</span> tomar qualquer ação ou se envolver em qualquer conduta que possa direta ou indiretamente danificar, desativar, sobrecarregar ou prejudicar os Serviços ou os servidores ou redes conectados aos Serviços;
  </li>

    <li>
    <span className="mr-1">(w)</span> utilizar os Serviços para violar, intencionalmente ou não, qualquer lei local, estadual, nacional ou internacional aplicável, regra, código, diretriz, diretriz, política ou regulamento, incluindo, sem limitação, leis e exigências (tendo ou não força de lei) relacionadas com a luta contra a lavagem de dinheiro ou o contra-terrorismo;
  </li>

    <li>
    <span className="mr-1">(x)</span> usar os Serviços para fornecer apoio ou recursos materiais (ou para ocultar ou disfarçar a natureza, localização, fonte ou propriedade de apoio ou recursos materiais) a qualquer organização ou organizações designadas pelo governo dos Estados Unidos como uma organização terrorista estrangeira de acordo com a seção 219 da Lei de Imigração e Nacionalidade;
  </li>

    <li>
    <span className="mr-1">(y)</span> realizar, habilitar, causar ou permitir quaisquer transações (incluindo pagamentos ou transações financeiras) para as quais você não esteja autorizado;
  </li>

    <li>
    <span className="mr-1">(z)</span> criar, acessar ou usar múltiplas contas em relação a qualquer Jogo ou Serviço;
  </li>

    <li>
    <span className="mr-1">(aa)</span> tentar vender ou transferir sua Conta ou qualquer moeda virtual associada e/ou itens virtuais para qualquer terceiro de qualquer maneira;
  </li>

    <li>
    <span className="mr-1">(bb)</span> usar os Serviços para violar a privacidade de outros ou para "perseguir” assediar de outra forma outra pessoa;
  </li>

    <li>
    <span className="mr-1">(cc)</span> facilitar ou encorajar qualquer violação destes Termos de Serviço ou de nossas outras políticas, incluindo a Política de Privacidade, conforme emendada de tempos em tempos; e/ou
  </li>

    <li>
    <span className="mr-1">(dd)</span> utilizar os Serviços para coletar ou armazenar dados pessoais sobre outros Usuários em conexão com as condutas e atividades proibidas estabelecidas acima.
  </li>

  <p className="text-[15px]">
4.3 Você entende que todo o Conteúdo, seja ele público ou privado, é de responsabilidade exclusiva da pessoa de quem tal Conteúdo se originou. Isto significa que você, e não a Garena, é inteiramente responsável por todo o Conteúdo que você cria, carrega, publica, envia por e-mail, transmite, comunica ou torna disponível através dos Serviços. Garena não controla o Conteúdo postado através dos Serviços e, como tal, não garante a precisão, integridade, qualidade ou legalidade de tal Conteúdo. Você entende que, ao utilizar os Serviços, poderá ser exposto a Conteúdo que possa considerar ofensivo, indecente ou censurável. Se você acredita que qualquer Conteúdo viola os Termos de Serviço (incluindo o parágrafo 4.2 acima), favor nos notificar imediatamente em legal@garena.com. Faremos os esforços razoáveis para remover o Conteúdo questionável reclamado dentro de um prazo razoável, de acordo com a lei aplicável. Entretanto, sob nenhuma circunstância a Garena será responsável de nenhuma forma por qualquer Conteúdo, incluindo, mas não se limitando a, quaisquer erros ou omissões em qualquer Conteúdo, ou qualquer perda ou dano de qualquer tipo incorrido como resultado do uso, ou confiança em qualquer Conteúdo postado, enviado por e-mail, transmitido ou de outra forma disponibilizado através dos Serviços.
</p>

<p className="text-[15px]">
4.4 Você reconhece que a Garena pode ou não pré-selecionar o Conteúdo, disponibilizado ou comunicado pelos Usuários, mas que a Garena e seus designados terão o direito (mas não a obrigação), a seu critério exclusivo, de revisar, pré-selecionar, recusar, excluir e/ou remover qualquer Conta ou Conteúdo que esteja disponível através dos Serviços, por qualquer motivo. Sem limitar o precedente, a Garena e seus designados terão o direito de remover qualquer Conta ou Conteúdo que viole estes Termos de Serviço, se recebermos uma reclamação de outro Usuário, se recebermos um aviso de violação de propriedade intelectual ou outra instrução legal para remoção (incluindo, mas não se limitando a qualquer aviso, instrução ou ordem por qualquer órgão regulador ou governamental, ou uma corte de jurisdição competente para remover, suspender, congelar ou apagar qualquer Conta ou Conteúdo), ou se acreditarmos de boa fé que tal Conta ou Conteúdo for de outra forma censurável ou em violação à lei aplicável. Também podemos bloquear ou bloquear a entrega de uma comunicação (incluindo, sem limitação, atualizações de status, publicações, mensagens e/ou conversas) para ou dos Serviços como parte de nosso esforço para proteger os Serviços ou nossos Usuários, ou de outra forma aplicar as disposições destes Termos e Condições. Você concorda que deve avaliar e suportar todos os riscos associados ao uso de qualquer Conteúdo, incluindo, sem limitação, qualquer confiança na precisão, completude ou utilidade de tal Conteúdo. A este respeito, você reconhece que não poderá depender de nenhum Conteúdo criado pela Garena ou enviado à Garena, incluindo, sem limitação, informações em fóruns da Garena, canais de mensagens instantâneas e em todas as outras partes dos Serviços.
</p>


<p className="text-[15px]">
4.5 No caso de sua conta ser excluída ou desativada de acordo com a Cláusula 4.4 anterior, todos os Itens Virtuais e Moeda Virtual (conforme definido abaixo) em sua conta serão confiscados e nenhum reembolso será feito em relação a mesma até o limite máximo permitido por lei.
</p>

<p className="text-[15px]">
4.6 Você reconhece, consente e concorda que a Garena poderá acessar, preservar e divulgar informações e Conteúdo de sua Conta se exigido por lei ou por ordem de um tribunal ou por qualquer autoridade governamental ou reguladora que tenha jurisdição sobre a Garena ou, de boa fé, acreditar que tal preservação de acesso ou divulgação seja razoavelmente necessária: (a) cumprir com o processo legal; (b) executar estes Termos de Serviço; (c) responder a reivindicações de que algum Conteúdo viole os direitos de terceiros; (d) responder a suas solicitações de atendimento ao cliente; ou (e) proteger os direitos, propriedade ou segurança pessoal da Garena, seus usuários e/ou o públi.
</p>



            {/* 3 LICENÇA LIMITADA */}
            <h2 className="text-lg font-bold text-gray-900">5. ATUALIZAÇÕES E CORREÇÕES DE SOFTWARE</h2>
            <p className="text-[15px]">
5.1 Podemos fornecer atualizações, correções e outras modificações aos Serviços que devem ser instalados para que você possa continuar a jogar nossos Jogos corretamente ou de forma alguma. Podemos atualizar, corrigir ou modificar o Software remotamente e acessar o Software residente em sua máquina ou dispositivo para tal fim, e você concede à Garena o direito de implantar e aplicar tais correções, atualizações e modificações. Todas as disposições destes Termos de Serviço que se referem ao "Software" também deverão incluir todos esses patches, atualizações e modificações.
            </p>

                        <p className="text-[15px]">
5.2 Você deve sempre usar a última versão do Software que inclui todas as atualizações e/ou correções fornecidas por nós e, na máxima extensão autorizada por lei, a Garena não será responsável por qualquer perda ou dano decorrente de sua falha em usar a última versão ou do uso de qualquer versão desatualizada do Software.

            </p>

 
            {/* 3 LICENÇA LIMITADA */}
            <h2 className="text-lg font-bold text-gray-900">6. CONTAS E SEGURANÇA</h2>
            <p className="text-[15px]">
6.1 Algumas funções de nossos Serviços requerem registro para uma Conta selecionando uma identificação de usuário única ("User ID") e senha, e fornecendo certas informações pessoais. Se você selecionar uma identificação de usuário que a Garena, a seu exclusivo critério, considere ofensiva ou inadequada, a Garena tem o direito de suspender ou encerrar sua conta.
            </p>
<p className="text-[15px]">
6.2 Sua conta é intransferível e somente para seu uso pessoal. Você não pode autorizar nenhum terceiro a acessar ou usar sua Conta para qualquer propósito ou tentar transferir a Conta ou a Moeda Virtual associada e/ou Itens Virtuais a qualquer terceiro de qualquer maneira.
            </p>        

            <p className="text-[15px]">
6.3 Você poderá usar sua conta para obter acesso a outros produtos, websites ou serviços, incluindo aqueles oferecidos por terceiros, aos quais tenhamos permitido o acesso ou com os quais tenhamos contratado, vínculos ou colaborado. Garena não revisou e não assume responsabilidade por nenhum conteúdo, funcionalidade, segurança, serviços, políticas de privacidade ou outras práticas desses produtos, websites ou serviços de terceiros. Se você fizer isso, os termos de serviço para esses produtos, websites ou serviços, incluindo suas respectivas políticas de privacidade, , poderão também se aplicar ao seu uso desses produtos, websites ou serviços.
            </p>   

            <p className="text-[15px]">
6.4 Você concorda em (a) manter sua senha confidencial e usar somente seu ID de usuário e senha ao fazer login, (b) garantir que você se desconectará de sua conta ao final de cada sessão, (c) notificar imediatamente a Garena sobre qualquer uso não autorizado de seu ID de usuário e/ou senha ou qualquer outra violação de segurança ou não conformidade com estes Termos de Serviços ou leis aplicáveis, e (d) garantir que as informações de sua Conta sejam precisas e atualizadas. Você é totalmente responsável por todas as atividades que ocorrem sob seu ID de usuário e conta, mesmo que tais atividades ou usos não tenham sido cometidos por você. A Garena não será responsável por qualquer perda ou dano decorrente do uso não autorizado de sseu ID de usuário, senha, ou Conta ou de seu descumprimento desta seção.
            </p>   

            <p className="text-[15px]">
6.5 Você concorda que a Garena poderá, por qualquer razão, a seu exclusivo critério e sem aviso ou responsabilidade para com você ou qualquer terceiro, encerrar imediatamente sua conta e sua ID de usuário, e remover ou descartar dos Serviços qualquer Conteúdo associado com sua conta e ID de usuário. Os motivos para tal rescisão podem incluir, mas não se limitam a, (a) períodos prolongados de inatividade, (b) violação da letra ou espírito destes Termos de Serviço, (c) violação de qualquer lei aplicável, (d) comportamento fraudulento, assediador, difamatório, ameaçador ou abusivo ou (e) comportamento que seja prejudicial a outros usuários, terceiros ou aos interesses comerciais ou reputação da Garena ou que de outra forma poderia sujeitar Garena a ações legais ou regulamentares. O uso de uma Conta para fins ilegais, fraudulentos, assediadores, difamatórios, ameaçadores ou abusivos pode ser encaminhado às autoridades de aplicação da lei sem aviso prévio. Se você apresentar uma reclamação (sob qualquer causa de ação) contra a Garena, ou que de alguma forma envolva a Garena, então a Garena poderá encerrar sua Conta.
            </p>   

            <p className="text-[15px]">
6.6 Se sua conta estiver ou permanecer inativa (o que significa que você não entrou ou usou sua conta) por mais de 6 meses, Garena tem o direito de excluir ou desativar sua conta e todos os Itens Virtuais e Moedas Virtuais (conforme definido abaixo) em sua conta serão confiscados e nenhum reembolso será feito em relação aos mesmos na medida máxima autorizada por lei.
            </p>   

            <p className="text-[15px]">
6.7 Você só poderá utilizar os Serviços e/ou abrir uma Conta se sua jurisdição aplicável permitir que você aceite estes Termos de Serviço.
            </p>      

               {/* 3 LICENÇA LIMITADA */}
            <h2 className="text-lg font-bold text-gray-900">7. COBRANÇAS E PAGAMENTOS</h2>
            <p className="text-[15px]">
7.1 Em conexão com alguns dos Jogos e outros Serviços, é-lhe oferecida a opção de comprar Garena Shells, diamantes ou outra moeda virtual no jogo ("Moeda Virtual"), itens ou skins virtuais no jogo ("Itens Virtuais") ou outros direitos disponíveis através dos Serviços. Dependendo de sua jurisdição e dos serviços que você optar por adquirir, você poderá, de tempos em tempos, fazer pagamentos a nós ou a outros terceiros.
            </p>
<p className="text-[15px]">
7.2 Se você optar por fazer tais compras ou de outra forma incorrer em encargos relacionados ao seu uso dos Serviços, você concorda em pagar essa taxa para receber tal Moeda Virtual, Itens Virtuais ou para receber acesso a e/ou os benefícios de tais Serviços. O preço declarado para a Moeda Virtual, Itens Virtuais e/ou Serviços exclui todos os impostos aplicáveis e liquidações de câmbio de moeda, a menos que indicado de outra forma. Você é o único responsável pelo pagamento de tais impostos ou outros encargos. Podemos suspender ou cancelar qualquer transação e/ou seu acesso aos Serviços se não recebermos o pagamento completo de você dentro do prazo estipulado para pagamento. A suspensão ou cancelamento dos Serviços por falta de pagamento pode resultar na perda do acesso e uso de sua conta e seu conteúdo.
            </p>        

            <p className="text-[15px]">
7.3 Geralmente, para pagar as taxas de qualquer Moeda Virtual, Itens Virtuais ou outro Serviço, você será solicitado a selecionar um método de pagamento antes de concluir sua compra ou no momento em que você iniciar a transação e se inscrever para esse serviço. Em muitos casos, a Moeda Virtual ou outros Serviços também podem ser adquiridos diretamente de certos terceiros autorizados. Os pagamentos por Moeda Virtual, Itens Virtuais ou outros Serviços também podem ser processados através de prestadores de serviços de pagamento. Em tais casos, a compra de Moeda Virtual, Itens Virtuais ou outros Serviços de tais terceiros ou através de tais prestadores de serviços de pagamento é regida por seus próprios respectivos termos e condições, políticas de privacidade. e pelas leis aplicáveis da jurisdição onde tais compras estão sendo feitas.
            </p>   

            <p className="text-[15px]">
7.4 Quando aplicável, você pode acessar e alterar as informações de sua conta de cobrança e forma de pagamento a qualquer momento. Você concorda em permitir que a Garena utilize qualquer informação atualizada de sua conta com relação ao método de pagamento fornecido por seu banco emissor ou pela rede de pagamento aplicável. Você concorda em manter as informações de sua conta de cobrança sempre atualizadas. As alterações que você fizer em sua conta de cobrança não afetarão os encargos que enviarmos à sua conta de cobrança antes de podermos agir razoavelmente sobre suas alterações.
            </p>   

<p className="text-[15px]">
  7.5 Ao fornecer à Garena ou ao respectivo prestador de serviços de pagamento um método de pagamento ou ao adquirir qualquer Moeda Virtual, Itens Virtuais ou outros Serviços, você:
</p>

<p className="text-[15px]">
  (a) representar que você está autorizado a usar a forma de pagamento que forneceu e que qualquer informação de pagamento fornecida por você é verdadeira e precisa;
</p>

<p className="text-[15px]">
  (b) autorizar a Garena ou ao respectivo prestador de serviços de pagamento a cobrar-lhe pela Moeda Virtual relevante, Itens Virtuais ou outros Serviços comprados usando seu método de pagamento preferido; e
</p>

<p className="text-[15px]">
  (c) autorizar a Garena ou ao respectivo prestador de serviços de pagamento a cobrar por qualquer recurso pago dos Serviços que você optar por assinar ou usar enquanto estes Termos de Serviço estiverem em vigor.
</p>

            <p className="text-[15px]">
7.6 Dependendo da natureza da compra e sujeito a lei aplicável, podemos faturá-lo (a) antecipadamente; (b) no momento da compra; (c) após a compra (e na data de vencimento estipulada para o pagamento) para a Shells que são emprestados a você sob nosso plano de empréstimo da Shell (somente para Usuários de Cingapura); ou (d) de forma recorrente para um Serviço baseado em assinatura.
            </p>   

            <p className="text-[15px]">
7.7 Podemos alterar o preço da Moeda Virtual, Itens Virtuais e/ou qualquer Serviço a qualquer momento. Se houver um prazo e preço fixos para sua oferta de Serviço, esse preço permanecerá em vigor durante o período de duração desse prazo.
            </p>      

                        <p className="text-[15px]">
7.8 Seu direito de usar qualquer Moeda Virtual ou Itens Virtuais é uma licença limitada, não exclusiva, não cedível, não transferível, não publicável, revogável para usar tal Moeda Virtual e Itens Virtuais somente para seu entretenimento pessoal e uso não comercial nos Serviços somente. Uma vez adquirida, qualquer moeda virtual ou itens virtuais adquiridos serão válidos indefinidamente a menos que seja totalmente utilizada ou resgatada dentro dos Serviços, até que sua conta seja encerrada por qualquer motivo ou se não pudermos mais prestar serviços legais a sua conta (por exemplo, se você retirar seu consentimento para que possamos usar seus dados pessoais). Se sua conta estiver ou permanecer inativa (o que significa que você não entrou em sua conta) por mais de 6 meses, a Garena tem o direito de excluir ou desativar sua conta e todos os Itens Virtuais e Moedas Virtuais em sua conta serão confiscados de acordo com a Cláusula 6.6 acima.
            </p>   

                        <p className="text-[15px]">
7.9 Moeda Virtual e Itens Virtuais não têm valor monetário e não têm valor fora dos Serviços. A Moeda Virtual e Itens Virtuais não podem ser vendidas, negociadas, transferidas, resgatadas ou trocadas de outra forma por dinheiro ou outros bens ou serviços fora dos Jogos e Serviços. A Moeda Virtual só pode ser resgatada por Itens Virtuais ou outros direitos disponíveis através de nossos Jogos e Serviços.
            </p>   

                        <p className="text-[15px]">
7.10 Salvo disposição em contrário da lei aplicável ou dos termos expressos de uma oferta de serviço, todas as compras para Moeda Virtual, Itens Virtuais ou outros Serviços são finais e não-reembolsáveis. Uma vez resgatada qualquer Moeda Virtual por um Item Virtual ou outro direito, esse Item Virtual ou outro direito é final e não retornável, permutável ou reembolsável. Você pode cancelar qualquer Serviço a qualquer momento, mas todos os pré-pagamentos e todas as compras de qualquer Moeda Virtual, Itens Virtuais ou outros serviços, são estritamente não reembolsáveis. Se você efetuou tal compra de um prestador de serviços de pagamento autorizado ou de outra forma fez o pagamento através de um prestador de serviços de pagamento terceirizado, você também pode precisar consultar os respectivos termos e condições desses terceiros para obter informações adicionais a respeito de suas respectivas políticas de reembolso.
            </p>   

                        <p className="text-[15px]">
7.11 Se você é um Usuário residente em Cingapura, sob nosso plano de Shell-borrowing, você pode emprestar e usar Shells primeiro e pagar de volta o que você pegou emprestado carregando Shells para sua Conta dentro de 7 dias (ou qualquer outro período que possamos estipular de tempos em tempos). Não cobramos juros por Shells emprestadas, mas o não pagamento pontual das Shells emprestadas nos dará o direito de suspender ou cancelar seu acesso aos Serviços, conforme indicado acima.

            </p>   



{/* 4 TERMOS DE USO */}
<h2 className="text-lg font-bold text-gray-900">8. ADESÃO À ASSINATURAS</h2>
<p className="text-[15px]">
8.1 Em certas jurisdições e sujeito à lei aplicável, podemos oferecer planos de assinatura em nossos jogos ("Assinaturas"). As assinaturas podem ser semanais, mensais ou outro período recorrente, conforme determinado por nós e notificado em nossos Jogos ("Período de Assinatura").
</p>

<p className="text-[15px]">
8.2 As assinaturas podem ser adquiridas mediante o pagamento da taxa especificada em nossos Jogos ("Taxa de Assinatura") e estão sujeitas aos termos e condições da Cláusula 7 acima e aos termos e condições adicionais publicados dentro de nossos Jogos.
</p>

<p className="text-[15px]">
8.3 As assinaturas serão automaticamente renovadas para novos períodos de assinatura, e será cobrada a Taxa de Assinatura, ao final de cada período de assinatura até que seja cancelada por você antes da data de renovação. Como não o notificaremos antes de tal renovação, você será aconselhado a monitorar suas Assinaturas.
</p>

<p className="text-[15px]">
8.4 Você pode cancelar sua Assinatura a qualquer momento através do Google Play, da Apple App Store, ou outra loja de aplicativos através da qual você habilitou sua Assinatura (conforme o caso) de acordo com a aplicação dos Termos de Serviços. Após o cancelamento, sua Assinatura não será renovada e expirará no último dia do Período da Assinatura. Caso sua Taxa de Assinatura ou qualquer parte dela seja reembolsada, nos reservamos o direito de favorecer ou deduzir qualquer Moeda Virtual ou Itens Virtuais previamente concedidos por nós no Período de Assinatura antes de seu cancelamento entrar em vigor.
</p>

<p className="text-[15px]">
8.5 Podemos permitir que você assine mais de uma Assinatura de cada vez. As assinaturas podem ter disponibilidade limitada. Uma vez que as Assinaturas estejam totalmente subscritas, elas não poderão mais ser disponibilizadas para compra. Reservamo-nos o direito de fazer alterações em nossas Assinaturas a qualquer momento.
</p>

{/* 4 TERMOS DE USO */}
<h2 className="text-lg font-bold text-gray-900">9. ISENÇÃO DE RESPONSABILIDADE</h2>
<p className="text-[15px]">
9.1 OS SERVIÇOS SÃO FORNECIDOS "COMO ESTÃO" E SEM QUAISQUER GARANTIAS, RECLAMAÇÕES OU REPRESENTAÇÕES FEITAS PELA GARENA DE QUALQUER TIPO, SEJA EXPRESSA, IMPLÍCITA OU ESTATUTÁRIA COM RESPEITO AOS SERVIÇOS, INCLUINDO, SEM LIMITAÇÃO, GARANTIAS DE QUALIDADE, DESEMPENHO, NÃO-INFRAÇÃO, COMERCIALIZAÇÃO OU ADEQUAÇÃO A UM DETERMINADO PROPÓSITO, NEM EXISTEM QUAISQUER GARANTIAS CRIADAS PELO CURSO DA NEGOCIAÇÃO, CURSO DE DESEMPENHO OU USO COMERCIAL. SEM LIMITAR O PRECEDENTE, A GARENA NÃO GARANTE QUE OS SERVIÇOS OU AS FUNÇÕES NELES CONTIDAS ESTARÃO DISPONÍVEIS, ACESSÍVEIS, ININTERRUPTOS, OPORTUNOS, SEGUROS, PRECISOS, COMPLETOS OU LIVRES DE ERROS, QUE OS DEFEITOS, SE HOUVER, SERÃO CORRIGIDOS, OU QUE OS SERVIÇOS E/OU O SERVIDOR QUE OS DISPONIBILIZA ESTÃO LIVRES DE VÍRUS, CRONOMETROS, TEMPORIZADORES, CONTADORES, WORMS, BLOQUEIOS DE SOFTWARE, DROP DEAD DEVICES, CAVALOS DE TRÓIA, ROTINAS, TRAP DOORS, TIME BOMBS OU QUAISQUER OUTROS CÓDIGOS, INSTRUÇÕES, PROGRAMAS OU COMPONENTES NOCIVOS. VOCÊ RECONHECE QUE TODO O RISCO DECORRENTE DO USO OU DESEMPENHO DOS SERVIÇOS PERMANECE COM VOCÊ ATÉ A MÁXIMA EXTENSÃO PERMITIDA POR LEI.
</p>

<p className="text-[15px]">
9.2 Algumas jurisdições não permitem a isenção de garantias implícitas, portanto, algumas ou todas as isenções de responsabilidade anteriores podem não se aplicar a você na medida em que são excluídos pela legislação aplicável.
</p>

<p className="text-[15px]">
9.3 A Garena não será considerada responsável por qualquer perda ou dano ou falha no cumprimento ou atraso no cumprimento de nossas obrigações sob estes Termos de Serviço que seja causado direta ou indiretamente por qualquer evento ou circunstâncias além de nosso controle razoável, incluindo devido a falha do sistema, problemas de rede, problemas técnicos ou perda de dados devido a qualquer uma das razões anteriores, ato de Deus, inundações, epidemias, pandemias, quarentena, motim ou guerra.
</p>

{/* 4 TERMOS DE USO */}
<h2 className="text-lg font-bold text-gray-900">10. EXCLUSÕES E LIMITAÇÃO DE RESPONSABILIDADE</h2>
<p className="text-[15px]">
10.1 EM NENHUM CASO A GARENA SERÁ RESPONSÁVEL, SEJA EM CONTRATO, GARANTIA, DELITO (INCLUINDO, SEM LIMITAÇÃO, NEGLIGÊNCIA (SEJA ATIVA, PASSIVA OU IMPUTADA), RESPONSABILIDADE PELO PRODUTO OU RESPONSABILIDADE ESTRITA OU OUTRA TEORIA), OU OUTRA CAUSA DE AÇÃO LEGAL, EM EQUIDADE, POR LEI OU DE OUTRA FORMA, POR PERDA DE USO, LUCROS, RECEITAS, BOA VONTADE OU ECONOMIAS PREVISTAS OU POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS OU CONSEQÜENTES (INCLUINDO, SEM LIMITAÇÃO, QUALQUER PERDA DE DADOS, INTERRUPÇÃO DE SERVIÇO, FALHA DE COMPUTADOR, TELEFONE CELULAR OU DISPOSITIVO MÓVEL) DECORRENTE DE OU EM CONEXÃO COM O USO OU INCAPACIDADE DE USAR OS SERVIÇOS, INCLUINDO, SEM LIMITAÇÃO, QUAISQUER DANOS RESULTANTES DOS MESMOS, MESMO QUE A GARENA TENHA SIDO AVISADA DA POSSIBILIDADE DE TAIS DANOS.
</p>

<p className="text-[15px]">
10.2 SEU ÚNICO DIREITO COM RELAÇÃO A QUALQUER PROBLEMA OU INSATISFAÇÃO COM OS SERVIÇOS É ENCERRAR SUA CONTA E DESCONTINUAR QUALQUER USO DOS SERVIÇOS.
</p>

<p className="text-[15px]">
10.3 SE, NÃO OBSTANTE AS SEÇÕES ANTERIORES, A GARENA FOR CONSIDERADA POR UM TRIBUNAL DE JURISDIÇÃO COMPETENTE COMO RESPONSÁVEL (INCLUSIVE POR NEGLIGÊNCIA GRAVE), SUA RESPONSABILIDADE PARA VOCÊ OU PARA QUALQUER TERCEIRO É LIMITADA A SGD 100 (CEM DÓLARES SINGAPOROS).
</p>

<p className="text-[15px]">
10.4 NADA NESTES TERMOS DE SERVIÇO LIMITARÁ OU EXCLUIRÁ QUALQUER RESPONSABILIDADE POR MORTE OU DANOS PESSOAIS CAUSADOS POR NEGLIGÊNCIA DA GARENA, POR FRAUDE OU POR QUALQUER OUTRA RESPONSABILIDADE QUE NÃO POSSA SER LEGALMENTE LIMITADA E/OU EXCLUÍDA.
</p>

{/* 4 TERMOS DE USO */}
<h2 className="text-lg font-bold text-gray-900">11. LINKS PARA SITES DE TERCEIROS</h2>
<p className="text-[15px]">
11.1 Alguns links fornecido através dos Serviços podem resultar que você saia do Site ou Jogos. Estes links são fornecidos apenas como cortesia, e os sites aos quais eles se conectam não estão sob o controle da Garena de nenhuma forma e, portanto, você os acessa por sua própria conta e risco. Portanto, a Garena não é de forma alguma responsável pelo conteúdo de qualquer site vinculado ou qualquer link contido em um site vinculado, incluindo quaisquer alterações ou atualizações a tais sites. Garena está fornecendo estes links apenas como uma conveniência, e a inclusão de qualquer link não implica de forma alguma afiliação, endosso ou patrocínio expresso por Garena de qualquer site vinculado e/ou qualquer de seus conteúdos. Não nos responsabilizamos por qualquer perda ou dano que ocorra a você como resultado de tais sites.
</p>

{/* 4 TERMOS DE USO */}
<h2 className="text-lg font-bold text-gray-900">12. SUAS CONTRIBUIÇÕES PARA OS SERVIÇOS</h2>
<p className="text-[15px]">
12.1 Ao submeter UGC para inclusão nos Serviços, você reconhece e garante que: (a) é criador e proprietário de, ou tem os direitos e as permissões necessárias para usar e conceder à Garena os direitos e permissões das licenças em sua totalidade detidas por você à Garena, sob estes Termos de Serviço; (b) seu UGC e o uso do seu UGC não: (i) infringem nem infringirão, violam nem violarão ou descredibilizam nem descredibilizarão o direito de terceiros; (ii) caluniam, difamam ou invadem o direito de privacidade, publicidade ou outro direito de propriedade de terceiros; (iii) exigem a Garena a obter licenças de ou a pagar alguma compensação ou dar reconhecimento à você ou qualquer terceiro; (iv) resultarão em quebra de contrato entre você e um terceiro; ou (v) causarão à Garena a violação de qualquer lei ou regulamento. Na medida do permitido pela legislação aplicável, você, por meio deste documento, renuncia irrevogável e perpetuamente a todos os direitos morais (ou direitos equivalentes) decorrentes das leis de qualquer jurisdição em relação à UGC contribuídas por você. Se e na medida em que tais direitos não puderem ser renunciados, você concorda em não fazer valer tais direitos contra a Garena.
</p>

<p className="text-[15px]">
12.2 Sem prejuízo da Cláusula 3.2, na medida em que qualquer UGC contribuída por você seja uma obra original criada por você, todos os direitos de propriedade e direitos de propriedade intelectual em e para tal UGC deverão ser retidos por você. Você concede à Garena e seus sucessores uma licença irrevogável, perpétua, mundial, não exclusiva, sem royalties, sub-licenciável (sem que seja necessário seu prévio consentimento ou autorização) e transferível (sem que seja necessário seu prévio consentimento ou autorização) para usar, reproduzir, copiar, distribuir, publicar, republicar, transmitir, modificar, adaptar, criar obras derivadas, exibir publicamente, comunicar ao público e executar publicamente tal contribuição de UGC sobre, através ou em conexão com os Serviços em qualquer formato de mídia e através de qualquer canal de mídia, inclusive, sem limitação, para fins de marketing ou propaganda, promover e redistribuir parte dos Serviços (e suas obras derivadas) e por qualquer outro propósito comercial ou de negócios sob o critério exclusivo da Garena. Você entende que sua contribuição pode ser transmitida através de várias redes e alterada para se adequar e se adaptar às exigências técnicas.
</p>

<p className="text-[15px]">
12.3 Qualquer material, informação, ideia, ou outro UGC que você postar nos Serviços ou através deles, ou de outra forma transmitir à Garena por qualquer meio (cada um, um "Envio"), não é considerado confidencial pela Garena e pode ser disseminado, explorado ou de outra forma usado pela Garena ou suas afiliadas sem compensação, menção, obrigação ou responsabilidade para você para qualquer finalidade, incluindo, mas não limitado a desenvolvimento, fabricação e comercialização de produtos. Ao fazer um Envio à Garena, você reconhece e concorda que a Garena e/ou outros terceiros podem desenvolver independentemente software, aplicativos, interfaces, produtos e modificações e melhorias dos mesmos que sejam idênticos ou similares em função, código ou outras características às ideias apresentadas em seu Envio. Assim sendo, você concede à Garena e seus sucessores um irrevogável, perpétua, mundial, licença não exclusiva, sem royalties, sublicenciável (sem que seja necessário seu prévio consentimento ou autorização) e transferível (sem que seja necessário seu prévio consentimento ou autorização) para desenvolver os itens identificados acima e para usar, reproduzir, copiar, distribuir, publicar, republicar, transmitir, modificar, adaptar, criar obras derivadas, exibir publicamente, comunicar ao público e executar publicamente qualquer Envio sobre, através ou em conexão com os Serviços em qualquer formato de mídia e através de qualquer canal de mídia, inclusive sem limitação, para fins de marketing ou propaganda, promover e redistribuir parte dos Serviços (e suas obras derivadas) e para qualquer uso comercial ou de negócios sob o critério exclusivo da Garena. Esta disposição não se aplica às informações pessoais que estão sujeitas à nossa política de privacidade, exceto na medida em que você torne tais informações pessoais publicamente disponíveis nos Serviços ou através deles.
</p>

<p className="text-[15px]">
12.4 A Garena poderá, a seu critério, suspender a disponibilidade ou excluir qualquer UGC ou outro Conteúdo da Plataforma a qualquer momento e por qualquer período de tempo, inclusive perpetuamente, sem aviso se tal UGC ou outro conteúdo violar os princípios de propriedade intelectual ou quaisquer diretrizes ou políticas associadas aos Serviços ou se a Garena determinar, a seu critério, que qualquer UGC faz ou pode causar danos aos Serviços ou à reputação da Garena. A Garena não tem nenhuma obrigação de qualquer tipo de suspender qualquer UGC de acordo com esta Seção.
</p>

<p className="text-[15px]">
12.5 Você concorda em não utilizar nenhuma UGC submetida à plataforma, seja na plataforma ou fora dela: (i) de uma forma ofensiva, difamatória, sexualmente explícita ou de outra forma censurável (em cada caso, conforme determinado pela Garena), (ii) em conexão com falso, difamatório, declarações difamatórias ou caluniosas a respeito da Garena ou de outra forma que tenha a intenção ou a probabilidade razoável de depreciar a Garena ou trazer a Garena a descrédito público, ou (iii) de uma forma que tenha a intenção ou a probabilidade razoável de sugerir ou implicar que você ou qualquer Usuário seja afiliado à Garena ou que a Garena endosse a UGC aplicável.
</p>

{/* 4 TERMOS DE USO */}
<h2 className="text-lg font-bold text-gray-900">13. CONTRIBUIÇÕES DE TERCEIROS PARA OS SERVIÇOS E LINKS EXTERNOS</h2>
<p className="text-[15px]">
13.1 Cada colaborador dos Serviços de dados, textos, imagens, sons, vídeo, software e outros Conteúdos é o único responsável pela exatidão, confiabilidade, natureza, liberação de direitos, cumprimento da lei e restrições legais associadas ao Conteúdo que eles contribuíram. Como tal, Garena não é responsável e não deverá monitorar ou verificar regularmente a exatidão, confiabilidade, natureza, liberação de direitos, cumprimento da lei e restrições legais associadas a qualquer contribuição de Conteúdo. Você não responsabilizará a Garena por quaisquer ações ou inações do usuário, incluindo, sem limitação, coisas que ele poste ou de outra forma disponibilize através dos Serviços.
</p>

<p className="text-[15px]">
13.2 Além disso, os Serviços podem conter links para feeds de texto e vídeo (e podcasts) de terceiros (coletivamente, "feeds de terceiros"), produtos, websites, serviços e ofertas, ou links para download de aplicativos de software de terceiros. Além disso, terceiros podem disponibilizar, em seus próprios websites, feeds de terceiros e aplicativos de software. Estes links de terceiros, feeds de terceiros, produtos, websites, serviços e aplicações de software não são de propriedade da Garena nem são controlados por ela. Ao contrário, eles são operados por, e são propriedade dos respectivos terceiros, e podem ser protegidos por direitos autorais aplicáveis ou por outras leis e tratados de propriedade intelectual. Garena não revisou e não assume responsabilidade pelo conteúdo, funcionalidade, segurança, serviços, políticas de privacidade ou outras práticas desses terceiros. Você é encorajado a ler os termos e outras políticas publicadas por tais terceiros em seus websites ou de outra forma. Ao utilizar os Serviços, você concorda que a Garena não será responsável de nenhuma forma devido ao seu uso ou incapacidade de usar qualquer feed, website ou widget de terceiros. Você reconhece e concorda ainda que a Garena poderá desativar seu uso ou remover quaisquer links de terceiros, feeds de terceiros ou aplicações nos Serviços na medida em que estes violem estes Termos de Serviço.
</p>

{/* 4 TERMOS DE USO */}
<h2 className="text-lg font-bold text-gray-900">14. VIOLAÇÕES DE NOSSOS TERMOS DE SERVIÇOS; REPARAÇÃO DE QUEIXAS</h2>
<p className="text-[15px]">
14.1 Se você acredita que um Usuário em nosso Site está violando estes Termos de Serviço, entre em contato com info@garena.com" info@garena.com.
</p>

<p className="text-[15px]">
14.2 Se você for um Usuário residente na Índia e acreditar que outro Usuário de nossos Serviços está violando estes Termos de Serviço ou se você tiver qualquer reclamação relacionada a nossos Serviços, por favor, entre em contato com nosso Oficial de Reclamações em grievance-officer@garena.com. O Oficial de Reclamações responderá a suas preocupações e dúvidas o mais cedo possível e em conformidade com a legislação aplicável.
</p>

{/* 15. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE DIREITOS AUTORAIS */}
<h2 className="text-lg font-bold text-gray-900">
  15. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE DIREITOS AUTORAIS
</h2>

<p className="text-[15px]">
  15.1 Se você acredita que o Conteúdo (como incluído nos Serviços) foi copiado, exibido ou distribuído de forma a infringir um copyright válido, favor notificar nosso Agente de Direitos Autorais. Uma notificação de infração alegada deve ser uma comunicação por escrito, conforme estabelecido abaixo, e deve incluir substancialmente tudo o que se segue:
</p>

<p className="text-[15px]">
  (a) uma assinatura física ou eletrônica de uma pessoa autorizada a agir em nome do proprietário do interesse de direitos autorais alegadamente infringido;
</p>

<p className="text-[15px]">
  (b) uma descrição do(s) trabalho(s) protegido(s) por direitos autorais e uma identificação do material em tal(s) trabalho(s) alegadamente infringido(s) pelo Conteúdo;
</p>

<p className="text-[15px]">
  (c) uma descrição do nome exato do Conteúdo que está sendo contestado e a localização do Conteúdo infrator nos Serviços;
</p>

<p className="text-[15px]">
  (d) informações suficientes para permitir que a Garena entre em contato com você, tais como seu endereço físico, número de telefone e endereço de e-mail;
</p>

<p className="text-[15px]">
  (e) uma declaração sua de que acredita de boa fé que o uso do material identificado na forma reclamada não é autorizado pelo proprietário dos direitos autorais, seu agente, ou pela lei; e
</p>

<p className="text-[15px]">
  (f) uma declaração sua de que as informações na notificação são precisas e, sob pena de perjúrio, que você está autorizado a agir em nome do proprietário dos direitos autorais.
</p>

<p className="text-[15px]">
  O agente de direitos autorais da Garena pode ser contatado por e-mail: legal@garena.com
</p>

<p className="text-[15px]">
  O Agente de Direitos Autorais somente responderá a quaisquer reclamações que envolvam suposta violação de direitos autorais.
</p>


<p className="text-[15px]">
15.2 Com relação a qualquer de suas UGC que seja removida ou desativada, se você acredita que sua UGC não está infringindo ou que tem a autorização do proprietário dos direitos autorais, do agente do proprietário dos direitos autorais, ou de acordo com a lei, para postar e usar o material em seu conteúdo, você pode enviar uma contra-notificação ao nosso Agente de Direitos Autorais. Qualquer contra-notificação enviada em nome de um usuário menor de 13 anos deve ser enviada por um dos pais ou outro representante legal. Quando o Agente de Direitos Autorais da Garena recebe uma contra-notificação, reservamo-nos o direito de enviar uma cópia da contra-notificação à parte reclamante original informando a essa parte que podemos, em 10 dias úteis, substituir a UGC removida ou parar de desativá-la. A menos que o proprietário dos direitos autorais apresente uma ação buscando uma ordem judicial contra o fornecedor da UGC, a UGC removida poderá ser substituída ou o acesso a ela restaurado, em 10 a 14 dias úteis ou mais após o recebimento da contra-notificação, a nosso critério exclusivo.
</p>

<p className="text-[15px]">
15.3 A política de propriedade intelectual da Garena é: (i) remover ou desativar o acesso ao material que a Garena sabe estar infringindo os direitos de propriedade intelectual de terceiros ou que tenha sido identificado em um aviso válido apresentado sob esta seção por um proprietário de direitos de propriedade intelectual ou seu agente; e (ii) em circunstâncias apropriadas, encerrar as contas e bloquear o acesso aos Serviços por qualquer Usuário que viole repetida ou gravemente os direitos autorais ou outros direitos de propriedade intelectual de terceiros.
</p>

{/* 15. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE DIREITOS AUTORAIS */}
<h2 className="text-lg font-bold text-gray-900">
  16. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE TRADEMARK
</h2>

<p className="text-[15px]">
16.1 Se você acredita que o Conteúdo (como incluído nos Serviços) foi copiado, exibido ou distribuído de forma a infringir um trademark válido, favor notificar nosso Agente de Trademark. Uma notificação de infração alegada deve ser uma comunicação por escrito, conforme estabelecido abaixo, e deve incluir substancialmente tudo o que se segue:
</p>

<p className="text-[15px]">
(a) uma assinatura física ou eletrônica de uma pessoa autorizada a agir em nome do proprietário da trademark interessada na suposta infração;
</p>

<p className="text-[15px]">
(b) uma descrição do direito da trademark que você alega estar sendo infringida;
</p>

<p className="text-[15px]">
(c) uma descrição do nome exato do conteúdo sendo infringido e a localização do conteúdo infrator nos Serviços;
</p>

<p className="text-[15px]">
(d) informações suficientes para permitir que a Garena entre em contato com você, tais como seu endereço físico, número de telefone e endereço de e-mail;
</p>

<p className="text-[15px]">
(e) uma declaração sua de que acredita de boa fé que o uso do material identificado na forma reclamada não é autorizado pelo proprietário da trademark, seu agente, ou pela lei; e
</p>

<p className="text-[15px]">
(f) uma declaração sua de que as informações na notificação são precisas e, sob pena de perjúrio, que você está autorizado a agir em nome do proprietário da trademark.
</p>

<p className="text-[15px]">
O Agente de Trademark da Garena pode ser contatado por e-mail: legal@garena.com.
</p>

<p className="text-[15px]">
O Agente de Trademark somente responderá a quaisquer reclamações que envolvam suposta violação de direitos de trademark.
</p>

{/* 15. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE DIREITOS AUTORAIS */}
<h2 className="text-lg font-bold text-gray-900">
  17. SUAS REPRESENTAÇÕES E GARANTIAS
</h2>

<p className="text-[15px]">
17.1 Você representa e garante isso:
</p>

<p className="text-[15px]">
(a) você possui a capacidade legal (e no caso do uso dos Serviços por um menor de idade, que você é um dos pais ou do responsável legal e deu seu consentimento), e o direito e a capacidade de entrar nestes Termos de Serviço e de cumprir com seus termos;
</p>

<p className="text-[15px]">
(b) você usará os Serviços somente para fins legais e de acordo com estes Termos de Serviço e todas as leis, regras, códigos, diretrizes, orientações, políticas e regulamentações aplicáveis; e
</p>

<p className="text-[15px]">
(c) você só utilizará os Serviços em uma máquina ou dispositivo em que tal uso seja autorizado pelo proprietário da máquina ou dispositivo.
</p>

{/* 15. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE DIREITOS AUTORAIS */}
<h2 className="text-lg font-bold text-gray-900">
  18. INDENIZAÇÃO
</h2>

<p className="text-[15px]">
18.1 Você concorda em indenizar, defender e isentar a Garena, seus acionistas, subsidiárias, afiliadas, diretores, agentes, coparticipantes da marca ou outros parceiros, bem como seus funcionários (coletivamente, as "Partes Indenizadas"), às suas custas, de e contra toda e qualquer reivindicação, ação, procedimento e ações judiciais, e todas as responsabilidades, danos, acordos, penalidades, multas, custos e despesas relacionados (incluindo, sem limitação, tarifas legais razoáveis e outras despesas de resolução de disputa) incorridos por qualquer Parte Indenizada que surja de ou em relação a: (a) a hospedagem, operação, gerenciamento e/ou administração dos Serviços por ou em nome da Garena; (b) sua violação ou infração de qualquer termo destes Termos de Serviço ou de qualquer política ou diretriz aqui mencionada, incluindo a infração de qualquer representação ou garantia mencionado nestes Termos de Serviço; ou (c) seu acesso, uso ou mau uso dos Serviços; (d) sua violação ou suposta violação de qualquer lei ou regulamento ou dos direitos de terceiros (incluindo mas não se limitando à infração do direito de propriedade intelectual de terceiros resultante da inclusão do seu UGC nos Serviços); ou (e) a remoção de sua Conta ou qualquer Conteúdo que você carregue, poste, envie por e-mail, transmita ou de outra forma disponibilize através dos Serviços de acordo com as Cláusulas 4.2 - 4.4 acima. Na medida do permitido pelas leis aplicáveis, a Garena reserva-se o direito de, a expensas próprias, assumir a defesa e o controle exclusivos de qualquer assunto sujeito a indenização (sem limitar suas obrigações de indenização com relação a esse assunto) e, nesse caso, você concorda em cooperar com a defesa dessa reivindicação por parte da Garena.
</p>

{/* 15. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE DIREITOS AUTORAIS */}
<h2 className="text-lg font-bold text-gray-900">
19. AUTONOMIA DAS CLÁUSULAS
</h2>

<p className="text-[15px]">
19.1 Se qualquer disposição destes Termos de Serviço for considerada ilegal, nula ou, por qualquer razão, inaplicável sob a lei de qualquer jurisdição, então essa disposição será considerada removida destes Termos de Serviço e não afetará a validade e aplicabilidade de qualquer disposição remanescente em tal jurisdição nem a validade e aplicabilidade da disposição em questão sob a lei de qualquer outra jurisdição.
</p>

{/* 15. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE DIREITOS AUTORAIS */}
<h2 className="text-lg font-bold text-gray-900">
20. LEIS REGENTES
</h2>

<p className="text-[15px]">
20.1 Estes Termos de Serviço serão regidos e interpretados de acordo com as leis da República de Cingapura sem considerar seus conflitos com as regras da lei. A Convenção das Nações Unidas sobre Contratos para a Venda Internacional de Mercadorias e a Lei de Transação Uniforme de Informações de Computadores, até a extensão aplicável, são expressamente renunciados. Qualquer disputa, controvérsia, reivindicação ou diferença de qualquer tipo deverá surgir de ou relacionada a estes Termos de Serviço contra ou relativa à Garena ou a qualquer Parte Indenizada sob estes Termos de Serviço deverá ser encaminhada e finalmente resolvida por arbitragem em Cingapura de acordo com as Regras de Arbitragem do Centro Internacional de Arbitragem de Cingapura ("Regras SIAC") em vigor, cujas regras são consideradas como incorporadas por referência nesta Seção. Haverá um (1) árbitro e o idioma da arbitragem será o inglês.
</p>

{/* 15. COMO FAZER REIVINDICAÇÕES DE INFRAÇÃO DE DIREITOS AUTORAIS */}
<h2 className="text-lg font-bold text-gray-900">
21. PROVISÕES GERAIS
</h2>

<p className="text-[15px]">
21.1 A Garena se reserva todos os direitos não expressamente concedidos aqui.
</p>

<p className="text-[15px]">
21.2 A Garena poderá modificar estes Termos de Serviço a qualquer momento, publicando os Termos de Serviço revisados no Site. O uso continuado do acesso ou dos Serviços após tais alterações constituirá sua aceitação de tais Termos de Serviço revisados.
</p>

<p className="text-[15px]">
21.3 Você não pode atribuir, sublicenciar ou transferir quaisquer direitos aqui concedidos a você ou subcontratar qualquer uma de suas obrigações.
</p>

<p className="text-[15px]">
21.4 Nada nestes Termos de Serviço deverá constituir uma parceria, joint venture ou relação de agente principal entre você e a Garena, nem o autoriza a incorrer em quaisquer custos ou responsabilidades em nome da Garena.
</p>

<p className="text-[15px]">
21.5 A falha da Garena em qualquer momento de exigir o desempenho de qualquer provisão aqui disposta não afeta, de maneira alguma, seu direito de posteriormente executá-la, a não ser que a mesma seja renunciada por escrito.
</p>

<p className="text-[15px]">
21.6 Estes Termos de Serviço são exclusivamente para seu e nosso benefício e não são para o benefício de qualquer outra pessoa ou entidade, exceto para as afiliadas e subsidiárias da Garena (e cada um dos sucessores e designados da Garena e de suas afiliadas e subsidiárias).
</p>

<p className="text-[15px]">
21.7 Os termos estabelecidos nestes Termos de Serviço e quaisquer acordos e políticas incluídas ou referidas nestes Termos de Serviço constituem o acordo completo e o entendimento das partes com respeito aos Serviços e substituem qualquer acordo ou entendimento anterior entre as partes em relação a tal assunto. As partes também excluem, de fato, todos os termos implícitos. Ao celebrar o contrato formado por estes Termos de Serviço, as partes não confiaram em nenhuma declaração, representação, garantia, entendimento, compromisso, promessa ou garantia de qualquer pessoa além do que expressamente estabelecido nestes Termos de Serviço. Cada parte renúncia irrevogável e incondicionalmente a todas as reivindicações, direitos e recursos que exceto por essa Cláusula,poderia ter tido em relação a qualquer um dos itens anteriores. Estes Termos de Serviço não podem ser contraditos, explicados ou complementados por provas de qualquer acordo prévio, qualquer acordo oral contemporâneo ou qualquer termo adicional consistente.
</p>

<p className="text-[15px]">
21.8 Você concorda em cumprir com todas as leis, estatutos, regulamentos e códigos aplicáveis relacionados ao antissuborno e à corrupção, incluindo sem limitação Lei de Suborno do Reino Unido, a Lei de Práticas de Corrupção Estrangeiras dos EUA e a Lei de Prevenção da Corrupção da Cingapura e confirma que você tem e terá em vigor todas as políticas e procedimentos necessários para garantir o cumprimento de tais exigências.
</p>

<p className="text-[15px]">
21.9 Se você tiver quaisquer perguntas ou dúvidas sobre estes Termos de Serviço ou quaisquer problemas levantados nestes Termos de Serviço, por favor, entre em contato conosco em: info@garena.com.
</p>




  {/* Continue os itens até (dd) seguindo o mesmo padrão */}
</ul>


          </div>


          <p className="mt-6 text-sm">
            Última atualização: 29 de julho de 2022
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
