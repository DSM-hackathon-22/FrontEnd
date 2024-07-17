import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { MainApi } from "../Apis/Main";
import { useEffect } from "react";

const data = [
  {
    id: "삼성 주가",
    data: [
      { x: "1", y: 81800 },
      { x: "2", y: 81800 },
      { x: "3", y: 81800 },
      { x: "4", y: 84600 },
      { x: "5", y: 87100 },
      { x: "8", y: 87400 },
      { x: "9", y: 87800 },
      { x: "10", y: 87800 },
      { x: "11", y: 87600 },
      { x: "12", y: 84400 },
      { x: "15", y: 86700 },
      { x: "16", y: 87700 },
      { x: "17", y: 86700 },
    ],
  },
  {
    id: "LG 주가",
    data: [
      { x: "1", y: 80500 },
      { x: "2", y: 79400 },
      { x: "3", y: 79700 },
      { x: "4", y: 82700 },
      { x: "5", y: 83100 },
      { x: "8", y: 81200 },
      { x: "9", y: 82100 },
      { x: "10", y: 80600 },
      { x: "11", y: 81700 },
      { x: "12", y: 81600 },
      { x: "15", y: 81000 },
      { x: "16", y: 80900 },
      { x: "17", y: 81400 },
    ],
  },
];

function Graph() {
  const navigate = useNavigate();
  const { name } = useParams();

  const GoNews = () => {
    // Main({ name })
    //   .then(() => {
    //     navigate("/news");
    //   })
    //   .catch((err) => console.error(err));
  };

  useEffect(() => {
    MainApi(name);
  }, []);

  return (
    <>
      <Header />
      <Content>
        <CompanyType>
          <Companys>
            <CompanyInfo>
              <CompanyName>삼성</CompanyName>
              <PriceWeek>86700</PriceWeek>
            </CompanyInfo>
            <CompanyLine />
            <CompanyInfo>
              <CompanyName>LG</CompanyName>
              <PriceWeek>81400</PriceWeek>
            </CompanyInfo>
          </Companys>
          <GraphBox>
            <ResponsiveLine
              data={data}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "70000",
                max: "90000",
                stacked: false,
                reverse: false,
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "한달간 주가 상황",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "right",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                //legend: "주가",
                legendOffset: 50,
                legendPosition: "middle",
              }}
              pointSize={8}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </GraphBox>
        </CompanyType>
        <NewsButton onClick={GoNews}>관련기사</NewsButton>
      </Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 20vw;
  margin-top: 80px;
`;

const CompanyType = styled.div`
  width: 100%;
  display: block;
`;

const Companys = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
`;

const CompanyInfo = styled.div``;

const CompanyLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: black;
  margin: 0 70px;
`;

const CompanyName = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
`;

const PriceWeek = styled.p`
  font-size: 30px;
`;

const GraphBox = styled.div`
  width: 50vw;
  height: 50vh;
  margin-left: -30px;
`;

const NewsButton = styled.button`
  width: 116px;
  height: 50px;
  border: 3px solid #2f5dff;
  border-radius: 100px;
  background-color: white;
  color: black;
  font-size: 18px;
  cursor: pointer;
`;

export default Graph;
