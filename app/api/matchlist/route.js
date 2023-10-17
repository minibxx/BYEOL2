import { queryExecute } from "../Db"; 

export async function POST(req) {
  const { id, opntid, m_status, y_status, date } = await req.json();

  const data = await queryExecute(
    `insert into matchlist(id, opntid, m_status, y_status, date) values(?,?,?,?,?)`,[id, opntid, m_status, y_status, date]
  );

  return Response.json({done:'성공!!'});
}

export async function GET(req) {
  // myPick이 true : 내가 찜한 애
  // myPick이 false : 나를 찜한 애
  const myPick = req.nextUrl.searchParams.get('myPick');
  const id = req.nextUrl.searchParams.get('id');
  let data;
  if (myPick === 'true') {
    data = await queryExecute (
      `SELECT * FROM b3o2.matchlist WHERE id='${id}'`
    )
  } else {
    data = await queryExecute (
      `SELECT * FROM b3o2.matchlist WHERE opntid='${id}'`
    )
  }

  return Response.json(data);
}