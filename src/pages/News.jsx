import { styled } from "styled-components";
import Header from "../components/HeaderBefore";

function News() {
  return (
    <>
      <Header />
      <AllBox>
        <Container>
          <TopLine />
          <Content>
            <Section>
              <NewsBox>
                <NewsText>
                  SK에코플랜트, 알짜 반도체 유통사와 합친다 SK그룹이
                  리밸런싱(사업구조 개편) 작업의 일환으로 SK(주) 해외 손자회사인
                  반도체 모듈 유통사 에센코어를 SK에코플랜트 자회사로 편입시키는
                  방안을 추진한다. 캐시카우인 에센코어를 SK에코플랜트 자회사로
                  합쳐 2026년까지 목표로...
                  <SmallLine />
                </NewsText>
              </NewsBox>
              <NewsBox>
                <NewsText>
                  SK에코플랜트, 알짜 반도체 유통사와 합친다 SK그룹이
                  리밸런싱(사업구조 개편) 작업의 일환으로 SK(주) 해외 손자회사인
                  반도체 모듈 유통사 에센코어를 SK에코플랜트 자회사로 편입시키는
                  방안을 추진한다. 캐시카우인 에센코어를 SK에코플랜트 자회사로
                  합쳐 2026년까지 목표로...
                </NewsText>
                <SmallLine />
              </NewsBox>
              <NewsBox>
                <NewsText>
                  SK에코플랜트, 알짜 반도체 유통사와 합친다 SK그룹이
                  리밸런싱(사업구조 개편) 작업의 일환으로 SK(주) 해외 손자회사인
                  반도체 모듈 유통사 에센코어를 SK에코플랜트 자회사로 편입시키는
                  방안을 추진한다. 캐시카우인 에센코어를 SK에코플랜트 자회사로
                  합쳐 2026년까지 목표로...
                </NewsText>
                <SmallLine />
              </NewsBox>
            </Section>
            <Section>
              <NewsBox>
                <NewsText>
                  SK에코플랜트, 알짜 반도체 유통사와 합친다 SK그룹이
                  리밸런싱(사업구조 개편) 작업의 일환으로 SK(주) 해외 손자회사인
                  반도체 모듈 유통사 에센코어를 SK에코플랜트 자회사로 편입시키는
                  방안을 추진한다. 캐시카우인 에센코어를 SK에코플랜트 자회사로
                  합쳐 2026년까지 목표로...
                </NewsText>
                <SmallLine />
              </NewsBox>
              <NewsBox>
                <NewsText>
                  SK에코플랜트, 알짜 반도체 유통사와 합친다 SK그룹이
                  리밸런싱(사업구조 개편) 작업의 일환으로 SK(주) 해외 손자회사인
                  반도체 모듈 유통사 에센코어를 SK에코플랜트 자회사로 편입시키는
                  방안을 추진한다. 캐시카우인 에센코어를 SK에코플랜트 자회사로
                  합쳐 2026년까지 목표로...
                </NewsText>
                <SmallLine />
              </NewsBox>
              <NewsBox>
                <NewsText>
                  SK에코플랜트, 알짜 반도체 유통사와 합친다 SK그룹이
                  리밸런싱(사업구조 개편) 작업의 일환으로 SK(주) 해외 손자회사인
                  반도체 모듈 유통사 에센코어를 SK에코플랜트 자회사로 편입시키는
                  방안을 추진한다. 캐시카우인 에센코어를 SK에코플랜트 자회사로
                  합쳐 2026년까지 목표로...
                </NewsText>
                <SmallLine />
              </NewsBox>
            </Section>
          </Content>
          <GraphButton>그래프</GraphButton>
        </Container>
      </AllBox>
    </>
  );
}

const AllBox = styled.div`
  width: 100vw;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1182px;
  display: inline-block;
`;

const TopLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: #7190ff;
  margin-bottom: 35px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div``;

const NewsBox = styled.div``;

const NewsText = styled.div`
  width: 547px;
`;

const SmallLine = styled.div`
  width: 547px;
  height: 1px;
  background-color: #767676;
  margin: 35px 0;
`;

const GraphButton = styled.button`
  width: 116px;
  height: 50px;
  float: right;
  border: 3px solid #2f5dff;
  border-radius: 100px;
  background-color: white;
  color: black;
  font-size: 18px;
  cursor: pointer;
`;

export default News;
