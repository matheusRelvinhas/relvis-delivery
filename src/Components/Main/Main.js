import Card from '../Card/Card';
import './Main.css';

const Main = () => {
  const whats = {
    title: 'Peça pelo Whats',
    text: 'Mande uma mensagem e vamos te atender',
    url: 'https://wa.me/5531971451910',
    imagens: ['https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/f1aeb2b8-1afe-4875-8990-778f9fef1c46.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T035239Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=1fb3f852d31c1e41a65a57d5473338cd347c0f8ada75f38b5f6de6295db4747c','https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/07c3d19b-f442-4a4d-872f-4b7f9a708525.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T035341Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=1ec5bb5abdbc0ce0b43d60272e45d88305996bb1ea50eb56d224752e5185c1b4']
  }

  const ifood = {
    title: 'Peça pelo Ifood',
    text: 'Consulte nossas promoções no ifood',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: ['https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/b3635396-e4d1-460f-9ba9-8c5200a526ed.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T035959Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=4700043bc608e83f4718b8e3a94c7e859882ab03ccb6bfb99345e39cb450f4f1', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/508115d9-3668-4169-9457-fd1b5db733db.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T040048Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=3218d06eaec57a7e09bc910a36a1718ff658eaacb01b4028559480d4b094ca9d', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/c374a677-48ba-4054-b07d-f6e27d2a34b3.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T041141Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=20fd2bf2a022ce484dfe0aa6af13a92613ed146f4abd578f8cc38a61263cc901']
  }

  const bebidas = {
    title: 'Bebidas',
    text: 'Cervejas, refrigerantes e sucos GELADOS',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: ['https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/02e3553a-02e9-44ff-ae45-dbb709e0bb89.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T041250Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=118eb307beb0dfff28ad06bf93380a058f1ddbc257de4a493597438e7751c271', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/69f542d1-6b58-4d20-a49e-31be75a2940d.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T041346Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=688c23f035b18b35b342d50c59ff0c7616f55eb2afd341c0aab9ee84e5b37439', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/66244bfc-e98c-47c8-9650-fae0915c10d7.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T041532Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=cad094fc0423a8432ebad28064da0b938b97179d5c2ee9e7bf900012792b0c52', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/04e84e85-9f9f-44e8-8eab-5e423ef4d3ea.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T041615Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=30b9b595c70447acdc092dfdd0d8b219eecc716db3c4f6c7fb6ab06e2d392e33']
  }

  const porcao = {
    title: 'Porções',
    text: 'Porcões de carne, batata e frios',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: ['https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/e395a2ce-fe98-4f9c-b23d-909e8e3b1bf3.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T041802Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=ed00f30a867fd7bc673f09fb739c55ffe156ca2cbcd78dfffe0c31583715c087', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/a2ce9435-8821-4ca8-bf7c-46aa22718e0e.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T041908Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=d1784c98802729928c01c0ed05289d22e006c33d4321e38933be7f085ba37357', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/5ef7d249-2e1c-41dd-9a88-022d8f1d75f5.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T041954Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=f698280f7fbe54f6f1305d36b8a25a86156174c9074cc30a4c3d43a5494b6761', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/aec3ba5a-a5aa-4ceb-8ad9-dfc03a768682.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T042035Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=3c87daedce4531dff80e67a7d3c6eca5c7a03098b75913fb08516b734b67670c', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/4ce46a6d-196e-49e2-9323-bdc4e7905c4f.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T042112Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=f17cd897c155371d668214ed57c8ed125449a4402bb2c3ade643842de96686cc']
  }
  return (
    <>
      <main className='main'>
        <Card
          titulo= {whats.title}
          descricao= {whats.text}
          url= {whats.url}
          imagem= {whats.imagens}
        />
        <Card
          titulo= {ifood.title}
          descricao= {ifood.text}
          url= {ifood.url}
          imagem= {ifood.imagens}
        />
        <Card
          titulo= {bebidas.title}
          descricao= {bebidas.text}
          url= {bebidas.url}
          imagem= {bebidas.imagens}
        />
        <Card
          titulo= {porcao.title}
          descricao= {porcao.text}
          url= {porcao.url}
          imagem= {porcao.imagens}
        />
      </main>
    </>
  );
}

export default Main;
