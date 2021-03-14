import React from 'react';
import { View, Text, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

// 🥑 We need to use this props screen `{navigation}`
export default function App() {
  function goBack() {
    // 🥑 We need to use this props screen `{navigation}`
    alert('goBack pressed!');
  }

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Terms and Conditions" />
      </Appbar.Header>
      <View style={{ padding: 32 }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          sodales at metus ac fermentum. Nulla eu nibh lorem. Mauris
          sollicitudin interdum ligula id tincidunt. Aliquam tristique egestas
          vulputate. Nam odio felis, laoreet ut facilisis ut, consequat vel
          tellus. Suspendisse commodo nisl id magna pellentesque vulputate.
          Etiam scelerisque, elit at dapibus volutpat, ipsum augue tempor enim,
          et tempus metus lorem eu lectus. Pellentesque ut sodales risus, ac
          sagittis sem. Pellentesque fermentum convallis commodo. Nam gravida
          vehicula magna, ac placerat ligula venenatis sit amet. In convallis
          pulvinar nisi, sed varius est porta at. Suspendisse sit amet aliquam
          ipsum. Vivamus posuere, ex eu luctus tincidunt, tortor urna auctor mi,
          vel tincidunt dolor purus sed dolor. Nam blandit vel erat at dictum.
          Ut nec imperdiet lorem. Proin et tortor nec lacus ultricies convallis
          at eu justo. Suspendisse id nunc a arcu luctus congue. Duis malesuada
          sollicitudin velit id vehicula. Donec sed massa nisi. Proin quis eros
          nec nunc scelerisque laoreet. Donec vehicula odio ut neque ultricies
          pulvinar. Curabitur eu urna nisl. Phasellus vitae odio ex. Duis non
          rutrum leo. Nulla sed quam eget nulla consequat scelerisque. Cras
          rhoncus libero vitae scelerisque tempor. Quisque luctus nunc a luctus
          imperdiet. Nulla vestibulum congue tortor, dapibus varius felis
          faucibus vel. Cras lobortis est nunc, suscipit vestibulum nisi cursus
          a. Praesent eu nunc porttitor, luctus eros eget, egestas est. Nam ac
          neque iaculis, convallis ipsum ac, auctor velit. Nam sed est non erat
          accumsan iaculis. Vestibulum tempor, lorem eget varius fermentum, orci
          turpis gravida ligula, sit amet commodo enim dui a tellus. Ut interdum
          at libero eu blandit. Nunc accumsan massa et dignissim placerat.
          Quisque vitae suscipit tortor. Nullam a metus tincidunt, laoreet massa
          ultricies, sagittis nisi. Phasellus consectetur sed sapien nec
          volutpat. Sed molestie ornare neque quis faucibus. Vestibulum non eros
          non leo sollicitudin vulputate. Pellentesque eu velit vel mauris
          consequat venenatis. Nam faucibus ligula vel dolor iaculis, sit amet
          efficitur sem posuere. Ut ultrices, mi id luctus elementum, urna sem
          porta erat, quis accumsan erat sem vel massa. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Morbi finibus, orci mattis
          consequat gravida, magna tellus maximus odio, non tempor eros diam eu
          magna. Pellentesque vitae aliquam metus. Donec faucibus elit eu
          feugiat gravida. Vivamus non molestie nulla. Sed lobortis lacinia
          eros, at eleifend ipsum semper non. Duis urna lectus, tincidunt a
          tempor ac, finibus non turpis. Aenean auctor felis ut eros pharetra
          eleifend. Praesent pretium auctor consequat. Duis eros lectus, dictum
          vel porta vitae, tincidunt non odio. Nulla eget ultricies velit. Nam
          convallis interdum risus, quis tincidunt mauris fringilla eget. Nunc
          vitae lacinia felis. Nam mi turpis, blandit id egestas eu, dapibus
          pulvinar tortor. Etiam eros ante, ultrices id volutpat ut, vestibulum
          in nibh. Pellentesque placerat, tortor ac vehicula rutrum, velit dui
          mollis ante, vitae pellentesque eros quam et tellus. Nulla sit amet
          suscipit felis. Nullam semper rutrum magna, sit amet tincidunt risus
          efficitur quis. Pellentesque vitae urna vestibulum sem feugiat
          pulvinar non vel tortor. Praesent ullamcorper nisi luctus dolor
          dignissim sagittis. Donec semper lacus quam, in rhoncus lacus dictum
          et. Donec eu quam bibendum, lobortis lectus id, sodales lorem. Cras
          luctus nibh vel lorem hendrerit vestibulum. Morbi purus tortor,
          fermentum quis imperdiet vel, euismod porttitor lectus. Sed vulputate
          tortor nec vulputate feugiat. Nunc et ligula sodales dolor mollis
          facilisis non vitae augue. Praesent maximus risus urna, et tempor nisl
          laoreet non. Maecenas eget volutpat odio. Duis dapibus mi iaculis
          imperdiet facilisis. Nam nisi libero, volutpat non nibh ornare, varius
          porta mauris. Nullam posuere leo mauris, quis tincidunt nunc malesuada
          vitae. Nulla suscipit neque enim, non semper turpis volutpat nec.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          condimentum nulla metus. Integer sem sem, consectetur mattis leo id,
          varius sollicitudin nisl. Fusce ac augue condimentum ante posuere
          cursus ac id mi. Donec in turpis suscipit velit feugiat tempus id
          pulvinar orci. Sed et diam turpis. Donec turpis tellus, finibus id
          lorem at, blandit tincidunt urna. Curabitur eu tristique nulla. Proin
          in ante in velit sollicitudin aliquet vel vitae neque. Vivamus nec
          massa lacinia, efficitur nisi sed, sollicitudin metus. Pellentesque
          tincidunt euismod lacus, quis pharetra lorem bibendum a. Ut porttitor
          ut enim malesuada lobortis. Vivamus ornare pulvinar finibus.
          Suspendisse potenti. Aliquam lectus arcu, imperdiet rutrum luctus
          quis, viverra at nisl. Sed pharetra quis ipsum eu fringilla. Sed eget
          orci id erat tristique interdum. Integer luctus nec nibh quis
          efficitur. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Donec condimentum, nulla in mattis
          accumsan, dui dolor viverra dui, in ultricies ante diam in ante.
          Nullam at ultrices lacus, vitae convallis nibh. Curabitur tempus,
          lorem sed vehicula faucibus, elit felis gravida sem, scelerisque
          ultrices nisl sapien sed lectus. Duis pulvinar nulla non metus
          molestie pretium ac in dolor. Nam nec turpis aliquam, ornare odio
          quis, dapibus erat. Nunc a nibh ligula. Mauris facilisis mollis
          libero, gravida fringilla dui placerat vitae. Donec nec diam at nibh
          maximus ultrices quis ac nisi. Phasellus at neque libero. Maecenas
          consequat felis elit, eget porttitor velit commodo eu. Morbi ut neque
          at nisi molestie dapibus. Curabitur accumsan ac tellus nec vehicula.
          Duis venenatis venenatis magna, in ultrices risus fermentum non. In
          vel placerat ante. Ut auctor risus id dapibus interdum. Nulla erat
          lacus, lacinia sed felis id, faucibus porta odio. Fusce finibus et
          erat a gravida. Quisque ut dolor id massa varius aliquet. Vestibulum
          eros nibh, pretium sed orci et, pulvinar ornare nibh. Integer posuere
          tincidunt tempus. Ut nulla neque, elementum et convallis id, maximus
          nec magna. Sed accumsan nisi et lorem maximus, quis fringilla quam
          finibus. Mauris imperdiet tortor eget egestas ultrices. Morbi faucibus
          neque est, a pellentesque est viverra et. Donec vel porta nunc, at
          elementum neque. Ut nisl mauris, facilisis efficitur efficitur sit
          amet, vulputate a ex. Maecenas rutrum maximus finibus. Sed feugiat dui
          id ex facilisis, nec posuere metus rhoncus. In rhoncus tempor tempor.
          Maecenas efficitur metus in ipsum efficitur, et blandit mauris
          ullamcorper. Ut faucibus ante a nisl porta aliquet. Nunc consequat,
          nisl quis sagittis tincidunt, libero diam suscipit augue, at
          ullamcorper orci lectus sit amet elit. Cras sed dolor justo. Duis
          vitae egestas tellus. Nam blandit est non erat consectetur, in dapibus
          eros ornare. Proin nec ante nibh. Suspendisse ullamcorper dolor
          mauris, sit amet dictum elit suscipit ac. Proin a rutrum mi, non
          porttitor metus. Quisque et tortor feugiat, vestibulum justo non,
          faucibus orci. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Quisque tincidunt velit sem, eget porta nibh molestie vel.
          Praesent sit amet est ac mi congue pellentesque. Sed sagittis est
          enim, lacinia aliquet nunc molestie ut. Proin id augue neque. Maecenas
          mi tellus, viverra vel risus et, fringilla varius quam. Nulla velit
          magna, maximus sit amet eros et, pretium tempor velit. Pellentesque
          nec purus non arcu lobortis venenatis. Nunc ut justo sit amet sem
          finibus auctor. Sed volutpat mi ac ligula dapibus pretium vel quis
          ipsum. Pellentesque a ex eu libero euismod tristique. Phasellus nec
          turpis ac elit tristique malesuada vitae vitae risus. Integer euismod,
          ligula at tristique tincidunt, purus turpis lobortis ex, et gravida
          metus lacus non lectus. Fusce malesuada est sed risus aliquam dapibus.
          Donec ullamcorper posuere lacus, sit amet tincidunt lorem fermentum
          id. Aenean dui tortor, scelerisque at vestibulum ullamcorper,
          elementum eu nibh. Vestibulum dignissim consectetur nunc, at posuere
          urna vulputate at. Quisque pellentesque feugiat cursus. Donec lobortis
          porta dolor, at scelerisque augue convallis vitae. Fusce dignissim
          nisi massa, quis feugiat purus ornare vitae. Pellentesque id ligula
          tristique, consequat elit id, congue nulla. Aenean vestibulum molestie
          gravida. Nunc imperdiet nunc sed malesuada aliquet. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. In laoreet orci odio, non pretium tortor suscipit ut. Nunc non
          quam libero. Integer eu sapien id dolor egestas gravida. In sed
          ullamcorper felis. Pellentesque ullamcorper dictum maximus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Donec eget nunc non felis maximus tristique.
          Sed pharetra non mi non ultrices. Integer eu lacinia turpis.
          Vestibulum quis massa in tellus scelerisque varius ut et nibh. Nam
          mauris metus, auctor a felis vel, facilisis consequat ipsum. Aliquam
          euismod massa vitae velit finibus, vel pretium sem dignissim. Proin ac
          turpis sit amet nisl vehicula sollicitudin. Morbi pulvinar, leo eget
          commodo iaculis, lacus massa porta dui, tincidunt tempor purus elit ac
          odio. Aliquam vitae ipsum tortor. Quisque volutpat quam quis nisl
          tempus varius. Mauris tortor leo, lobortis ut consequat id,
          consectetur nec erat. Quisque viverra, metus id consectetur tincidunt,
          magna nibh malesuada nisi, eget rutrum sapien nibh eget nisl. Nunc nec
          iaculis elit, eget eleifend arcu. Curabitur et nibh pulvinar, faucibus
          ex at, dictum nisi. In quis interdum augue. Morbi rutrum condimentum
          risus id tincidunt. In in scelerisque diam. Praesent et consequat
          justo. Morbi vel erat quis justo egestas scelerisque. Sed fringilla
          bibendum malesuada. Fusce tincidunt nisi ligula, non egestas mi semper
          eget. Mauris et nibh et augue dictum sodales vel congue urna. Donec
          viverra dapibus nisl et vestibulum. Nunc justo leo, suscipit vel lorem
          et, lacinia tincidunt metus. Nunc non felis ac dolor pellentesque
          scelerisque. Maecenas non ipsum dapibus, viverra libero a, dictum
          neque. Aenean fermentum sem a magna suscipit tincidunt. In eget
          vehicula velit. In id volutpat eros. Integer eu ante interdum,
          suscipit arcu eu, rutrum ligula. Curabitur dictum tellus a mauris
          aliquet, sit amet convallis mauris fermentum. Nam aliquet erat eu
          efficitur ultrices. Curabitur eu suscipit enim. Nunc tincidunt vel
          ipsum vitae venenatis. Nunc vel tempor lorem. Cras quis lacus
          scelerisque, viverra nisl ut, malesuada orci. Proin augue justo,
          consectetur vel finibus eget, scelerisque ac odio. Morbi elementum
          vitae est eu eleifend. Sed interdum nec est a blandit. Morbi sodales
          nec purus non porta. Sed posuere orci eget porta tincidunt. Vivamus
          porttitor metus eget dui dictum venenatis. Donec in quam sodales,
          pretium ligula in, sodales diam. Quisque at volutpat erat. Vestibulum
          accumsan congue enim sit amet consectetur. Nulla sed tincidunt nisl.
          Vestibulum pulvinar molestie nulla, quis hendrerit nisl molestie nec.
          Nullam efficitur dui eu odio molestie, sed convallis diam pharetra.
          Mauris vehicula molestie enim, ac aliquam velit. Vivamus nisl ante,
          varius at cursus ac, tincidunt ac nibh. Praesent vel tristique mi, non
          accumsan nisl. In quis erat non mi pulvinar malesuada. Nulla facilisi.
          Donec convallis velit eget hendrerit malesuada. Vivamus augue nisl,
          ultricies eu efficitur sit amet, aliquet et ipsum. Proin gravida
          aliquam diam, at suscipit ipsum lobortis a. Nullam elit arcu,
          tincidunt laoreet risus in, congue efficitur ante. Cras non est eget
          nisl feugiat rhoncus. Sed dolor sem, tempor eu neque eget, bibendum
          interdum mi. Pellentesque nec imperdiet felis. Phasellus eleifend
          dignissim condimentum. Sed augue lectus, pretium faucibus euismod
          vitae, varius vel leo. Praesent mattis enim purus, vel bibendum tortor
          posuere eu. Donec nec tortor est. Sed ornare efficitur imperdiet.
          Maecenas id turpis diam. Nullam leo sem, auctor at gravida ut,
          consequat vitae nunc. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Pellentesque semper risus
          sapien, vitae mattis ipsum varius eu. Maecenas est tortor, tempor
          vitae justo vel, suscipit consequat orci. Vivamus non nibh ligula.
          Phasellus pellentesque nunc nec condimentum pulvinar. Sed sodales nisl
          elit, non accumsan lectus bibendum laoreet. Nam faucibus nisi ac est
          porttitor porta. Praesent et nisi vel libero blandit vehicula a id
          magna. Proin et euismod purus, sollicitudin semper ante. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Sed velit velit,
          sollicitudin vulputate feugiat ac, pharetra a lorem. In pretium
          interdum tellus, id maximus libero hendrerit in. Aenean vel libero
          eget felis gravida vehicula. Sed ut tortor quis purus mollis
          ultricies. Fusce vestibulum feugiat quam, vel ornare erat luctus vel.
          Donec ultricies massa turpis, quis volutpat tortor mollis eget.
          Suspendisse ullamcorper non ligula vitae commodo. Pellentesque
          efficitur pharetra volutpat. Nulla venenatis sed leo quis ultrices.
          Nunc vitae sem scelerisque, sagittis ipsum et, vehicula nulla. Aenean
          dapibus, mi in sollicitudin maximus, odio sapien lobortis leo, sed
          fringilla nisl purus quis nunc. Duis quis sagittis dolor. Phasellus
          nec suscipit purus, in dignissim ligula. Phasellus quis dignissim
          ligula, ut cursus justo. Donec dolor orci, maximus vel risus eget,
          accumsan porttitor nunc. Duis auctor, libero vel laoreet facilisis,
          risus ex tincidunt odio, eget finibus tortor mi non mi. Integer non
          quam eget risus commodo venenatis sit amet sit amet purus. Etiam
          ornare, eros nec porttitor posuere, augue enim imperdiet neque, non
          laoreet diam purus vitae sapien. Nulla condimentum in justo quis
          efficitur. Sed id nibh magna. Nulla mattis arcu id nibh porttitor
          varius. Mauris commodo arcu sit amet enim dapibus tristique.
          Pellentesque ac mattis quam. Curabitur mollis semper velit, eu
          condimentum tortor imperdiet ac. Morbi eu turpis dictum, imperdiet
          magna at, consectetur mauris. Sed ut massa urna. Suspendisse potenti.
          Suspendisse vitae tellus et elit egestas egestas id eu tellus. Vivamus
          viverra auctor metus eget vehicula. Sed tristique eu est vitae
          elementum. Integer non scelerisque ante, sed scelerisque erat.
          Pellentesque et dapibus nisi, nec ultricies neque. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Vestibulum consectetur diam sit amet elit lobortis imperdiet.
          Ut vestibulum luctus nisi, rutrum varius magna mattis vitae. In neque
          mi, rutrum id lorem nec, cursus porta turpis. Suspendisse ut lectus et
          purus congue eleifend eu eget tellus. Nulla vitae justo sit amet odio
          ultricies viverra. Cras egestas a justo eget commodo. Curabitur sit
          amet mauris tortor. Morbi blandit libero enim, at efficitur neque
          efficitur in. Morbi tempor, ligula sed malesuada sodales, enim quam
          interdum est, nec faucibus mauris metus nec ex. Pellentesque viverra
          dapibus lorem, nec eleifend quam tristique dapibus. Curabitur dapibus
          vel nisl sit amet congue. Nullam massa justo, ultrices ut odio id,
          hendrerit commodo sapien. Ut elementum, velit eu suscipit finibus,
          mauris quam bibendum metus, a tempus dui metus quis turpis. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Quisque
          vestibulum lectus sed nunc semper pulvinar. Vivamus semper ut mi ac
          consequat. Praesent fermentum semper ante et eleifend. Vestibulum eu
          gravida tellus. Nam nunc est, maximus nec arcu quis, tincidunt
          facilisis sem. Morbi tempor ante nec dolor placerat, at iaculis dolor
          semper. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Curabitur in rhoncus sem. Proin auctor consectetur sapien, non pretium
          urna consectetur nec. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Curabitur lobortis
          elementum nisl et euismod. Donec ac sem sit amet urna scelerisque
          egestas et vitae nisi. Nunc gravida, lorem eu maximus venenatis, neque
          diam fermentum nibh, sed luctus est lacus eget nunc. In hac habitasse
          platea dictumst. Donec porta ex in nunc posuere, eu maximus nunc
          vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
          id hendrerit arcu. Vivamus faucibus nisi vitae massa fringilla congue.
          Donec ante velit, placerat quis nunc eget, auctor porta elit. Mauris
          imperdiet ligula quis mi semper ullamcorper. Vestibulum lacus elit,
          finibus pretium fringilla sed, ornare non lacus. Mauris dignissim
          lorem in magna bibendum, id aliquam ipsum pellentesque. Donec sed orci
          accumsan, pharetra lacus in, condimentum tellus. In id ultricies
          purus, ac faucibus eros. Nulla vel elit aliquam, maximus tortor in,
          mollis arcu. Curabitur molestie blandit leo, sit amet lacinia erat
          viverra vel. Aenean ut ornare augue. Mauris ullamcorper, eros sit amet
          fermentum consequat, nisl massa mattis felis, non malesuada justo dui
          sed sapien. Integer varius imperdiet dui, ac porttitor enim accumsan
          et. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Mauris gravida condimentum turpis. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Nunc fringilla
          metus id urna sollicitudin tempor. Suspendisse fringilla massa non
          gravida egestas. Ut pharetra metus vitae mauris feugiat, ut
          scelerisque justo tempor. Etiam velit ex, viverra sit amet euismod at,
          rutrum eu risus. Etiam eu orci metus. Nam malesuada pellentesque est
          eu porta. Praesent pharetra non est et semper. Curabitur maximus,
          lacus eget hendrerit feugiat, est diam vulputate ante, quis
          sollicitudin turpis purus eget sem. Cras at dolor ac tortor consequat
          tristique. Maecenas mollis, ligula non finibus fringilla, libero nulla
          dictum orci, in vulputate velit nisl eu massa. Curabitur imperdiet
          velit posuere enim interdum pellentesque. Fusce dictum ex sit amet
          velit ullamcorper, vel hendrerit nibh commodo. Suspendisse viverra
          tortor sit amet auctor semper. Phasellus rutrum ultrices nibh, vel
          tristique elit consequat ut. Suspendisse potenti. Quisque consectetur,
          quam eu interdum imperdiet, risus mi lacinia lectus, ullamcorper
          venenatis odio tellus ut neque. Maecenas felis velit, scelerisque ut
          porttitor at, euismod sed ante. Sed ligula urna, consectetur vel
          auctor ac, aliquam id nisl. Donec interdum lectus quis dui dignissim,
          in aliquet augue interdum. Nam ut sem consequat, dapibus purus a,
          consectetur eros. Donec bibendum fermentum consectetur. Vestibulum
          feugiat turpis et neque congue, id pellentesque dui auctor. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Donec commodo, magna eu faucibus rhoncus, quam nulla placerat
          nunc, at auctor libero turpis id ex. Vestibulum auctor libero at purus
          egestas, vel mattis purus ultricies. Morbi feugiat, quam in efficitur
          commodo, sapien diam bibendum mauris, ut finibus lacus arcu sed
          sapien. Quisque et quam sit amet eros gravida aliquet in id ante.
          Mauris ut sem sed ante convallis condimentum a ut felis. Vestibulum
          sodales sollicitudin metus, eget dignissim augue accumsan in. Etiam
          quis orci tristique, fermentum neque non, mollis tortor. Curabitur ac
          ullamcorper risus. Suspendisse lacinia mollis erat vel cursus. Sed
          dictum semper suscipit. Pellentesque eu accumsan sem, a tristique
          massa. Phasellus id iaculis sapien, ac dignissim lorem. Cras iaculis
          commodo fermentum. Aenean consectetur mi eu elit ultrices, ut dapibus
          felis fringilla. Nam pellentesque at quam et sollicitudin. Proin
          mattis non orci non interdum. Aliquam erat volutpat. Duis nec tellus
          imperdiet, vehicula erat vel, vulputate velit. Nunc orci odio,
          interdum sit amet ipsum ut, facilisis scelerisque enim. Donec neque
          nibh, fringilla at arcu sit amet, convallis laoreet quam. Morbi odio
          lacus, ullamcorper ut felis et, semper sagittis nibh. Donec sit amet
          dui tortor. Integer commodo tellus sit amet tincidunt condimentum.
          Mauris ac ante sed risus consectetur mollis nec id turpis. Donec vitae
          pellentesque libero, eget convallis purus. Nunc semper viverra elit
          vel malesuada. Nullam varius lectus placerat nibh sollicitudin
          interdum. Duis posuere diam quam, ac vulputate est sagittis finibus.
          Donec sollicitudin quam at gravida lacinia. Etiam euismod, justo at
          hendrerit bibendum, tellus justo ultrices purus, ut sodales mauris
          nunc ut leo. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nulla sollicitudin justo quis tristique malesuada. Fusce
          faucibus, tortor nec ullamcorper tincidunt, sapien mi cursus lectus,
          eget posuere sem elit non justo. Proin tempor arcu lorem, at
          vestibulum enim feugiat egestas. Quisque sed nisi lobortis, rutrum
          elit sit amet, mattis urna. Aliquam imperdiet metus eget mollis
          tempor. Cras ornare mi nec aliquet mollis. Phasellus luctus vitae odio
          quis efficitur. Sed facilisis ex lectus, et pellentesque lectus auctor
          a. Suspendisse id mauris quis magna imperdiet pretium dignissim a
          eros. Maecenas non tristique dui. Ut laoreet mollis leo vel aliquam.
          Vivamus iaculis, justo id maximus faucibus, ex dui molestie nisi, sed
          fringilla nisl lectus nec tortor. Ut orci orci, pulvinar at imperdiet
          non, semper non lectus. Cras posuere sodales pulvinar. Quisque quam
          erat, fringilla non mi quis, sagittis dapibus tortor. Suspendisse
          tincidunt libero libero.
        </Text>
        <Image
          style={{ width: 250, height: 250, marginVertical: 32 }}
          source={{
            uri:
              'https://media.giphy.com/media/111ebonMs90YLu/giphy-downsized.gif',
          }}
        />

        <Text style={{ marginBottom: 128 }}>Good Job!</Text>
      </View>
    </View>
  );
}
