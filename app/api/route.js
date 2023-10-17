/* import NextCors from "nextjs-cors";

export async function GET(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  let url = "https://bard.google.com";

  await NextCors(req, res, {
    // Options
    methods: "GET",
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    headers: {
      cookie: this.cookie,
    },
  });

  fetch(url)
  // Rest of the API logic
  res.json({ message: "Hello NextJs Cors!" });
}
 */

//db에 특정 값을 추가하고 불러오고 하려고 쓰는 함수
import {queryExrcute} from '../Db'

export async  function POST(req) {
    const {id,password,name,gender,adderss,date,time,calendartype,job,self,kakao} = await req.json()
    const data = await queryExrcute(`insert into member(id,password,name,gender,adderss,date,time,calendartype,job,self,kakao)
                                        values(?,?,?,?,?,?,?,?,?,?,?)`,[id,password,name,gender,adderss,date,time,calendartype,job,self,kakao]);
        /* ㄴ value 값에 넣을 값이 있다면 ? 로 -> [배열 형태로]항목 입력해줘야 함 */
    return Response.json([]);
}
    
export async function GET() {
    const data = await queryExrcute('SELECT * from member');
    return Response.json(data);    
    }
