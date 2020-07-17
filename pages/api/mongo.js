import nextConnect from 'next-connect';
import middleware from '../../database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('firstcollection').findOne()
    console.log(doc);
    res.json(doc);
});

handler.post(async (req, res) => {
    // let data = req.body;
    // data = JSON.parse(data);
    let doc = await req.db.collection('firstcollection').insert({first: 'test'})
    console.log(doc)
    res.json({message: 'ok'});
});

export default handler;