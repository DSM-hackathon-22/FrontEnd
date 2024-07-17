import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";
import Header from "../components/HeaderBefore";
import { CheckHeader } from "../components/CheckHeader";

const data = [
  {
    id: "삼성 주가",
    data: [
      { x: "1", y: 100 },
      { x: "2", y: 130 },
      { x: "3", y: 70 },
      { x: "4", y: 180 },
      { x: "5", y: 110 },
      { x: "6", y: 90 },
      { x: "7", y: 60 },
      { x: "8", y: 40 },
      { x: "9", y: 50 },
      { x: "10", y: 300 },
      { x: "11", y: 20 },
      { x: "12", y: 100 },
    ],
  },
  {
    id: "LG 주가",
    data: [
      { x: "1", y: 24 },
      { x: "2", y: 100 },
      { x: "3", y: 40 },
      { x: "4", y: 170 },
      { x: "5", y: 150 },
      { x: "6", y: 100 },
      { x: "7", y: 80 },
      { x: "8", y: 40 },
      { x: "9", y: 40 },
      { x: "10", y: 200 },
      { x: "11", y: 10 },
      { x: "12", y: 50 },
    ],
  },
];

const Graph = () => (
  <>
    <CheckHeader/>
    <Content>
      <CompanyType>
        <Companys>
          <CompanyInfo>
            <CompanyName>삼성</CompanyName>
            <PriceWeek>1000000</PriceWeek>
          </CompanyInfo>
          <CompanyLine />
          <CompanyInfo>
            <CompanyName>LG</CompanyName>
            <PriceWeek>900000</PriceWeek>
          </CompanyInfo>
        </Companys>
        <GraphBox>
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "0",
              max: "1000",
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
      <NewsButton>관련기사</NewsButton>
    </Content>
  </>
);

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
