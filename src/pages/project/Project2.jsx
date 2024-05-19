import { useEffect, useState } from "react";
import styled from "styled-components";
import AnotherHeader from "components/AnotherHeader";
import { fadeAction, } from "style/global.style";
import { Category, } from "style/basic.style";
import Layout from "../Layout";
import WhoIAM from "./WhoIAM";
import { Media, Answering, Communication, History } from "./tab";
import { project_menu } from "data/menu";
import 'assets/base.css'

export default function Project2() {
  const [currentPage, setCurrentPage] = useState("WhoIam");

  const handleCurrentPage = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
useEffect(()=>{console.log(currentPage)},[currentPage])
  return (
    <Layout>
      <AnotherHeader />
      <ProjectPageContainer>
        <ProjectHeader>
          {
            project_menu.map((it)=>( <Category key={it.key}
              onClick={() => {handleCurrentPage(it.title)}}
              className={[it.title, currentPage===it.title&&"Selected" ].join(" ")}
              >
                {it.title}
              </Category>
              )
          )}
        </ProjectHeader>
        
        {currentPage === "Media"  && <Media /> }
        {currentPage === "Communication" && <Communication /> }
        {currentPage === "Answering" && <Answering /> }
        {currentPage === "WhoIam" &&  <WhoIAM /> }
        {currentPage === "History" &&  <History /> }
      </ProjectPageContainer>
    </Layout>
  );
}

// project 페이지 영역
const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 170px;
  animation: 0.6s ease-in-out ${fadeAction};
`;
// project 내 카테고리 영역
const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  color: red;
`;

