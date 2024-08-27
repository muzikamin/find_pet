import { useRef, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { Loading } from "../../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { getProtectData } from "../../api";

const Container = styled.div`
  padding: 200px;
`;
const Si = styled.div``;

const Box = styled.div``;

const DataBox = styled.div``;

let options = [
  { value: "6119998", label: "서울특별시" },
  { value: "6119999", label: "가정보호" },
  { value: "3220000", label: "강남구" },
  { value: "3240000", label: "강동구" },
  { value: "3080000", label: "강북구" },
  { value: "3150000", label: "강서구" },
  { value: "3200000", label: "관악구" },
  { value: "3040000", label: "광진구" },
  { value: "3160000", label: "구로구" },
  { value: "3170000", label: "금천구" },
  { value: "3100000", label: "노원구" },
  { value: "3090000", label: "도봉구" },
  { value: "3050000", label: "동대문구" },
  { value: "3130000", label: "마포구" },
  { value: "3120000", label: "서대문구" },
];

export const Center = () => {
  const [selectValue, setSelectValue] = useState("");
  const selectInputRef = useRef(null);

  const onClearSelect = () => {
    if (selectInputRef.current) {
      selectInputRef.current.clearValue();
    }
  };

  const { data: allData, isLoading } = useQuery({
    queryKey: [`abandonmentPublic?&numOfRows=20&state=protect&pageNo=1`],
    queryFn: getProtectData,
  });

  console.log(selectValue);

  return (
    <Container>
      <Si>
        <Select
          ref={selectInputRef}
          onChange={(e) => {
            if (e) {
              setSelectValue(e.value);
            } else {
              setSelectValue("6119998");
            }
          }}
          options={options}
          placeholder="찾고 싶은 지역구를 선택하세요."
          value={options.filter(function (option) {
            return option.value === selectValue;
          })}
        />
        <button onClick={() => onClearSelect()}>초기화</button>
      </Si>
      <Box>{isLoading ? <Loading /> : <DataBox>{options.label}</DataBox>}</Box>
    </Container>
  );
};
