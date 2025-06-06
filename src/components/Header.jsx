export default function Header() {
  return (
    <header
      className="flex justify-between items-center
    p-[10px_20px] bg-black"
    >
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-[20px]">
        <li className="list-none font-normal text-[13px]">로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}
