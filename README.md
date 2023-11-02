# spread_sheet

![spreadsheet](https://github.com/Jiiker/spread_sheet/assets/100774811/a389fff1-4e5e-44f9-84bb-0e8f8a6328be)

## [전체 구성]
- Export 버튼과 셀 넘버를 표시해주는 텍스트 외에 이중 for문을 통해 10 x 10 크기의 텍스트 상자를 만들어 주었음.
  
  ![캡처](https://github.com/Jiiker/spread_sheet/assets/100774811/75ae55b7-2063-4d06-96f3-9709c03b7838)
  
  - 행과 열의 번호 혹은 알파벳이 들어가는 헤더 부분은 따로 id를 지정해주어서 그 부분은 diabled=true 로 설정해주었음.
    
- focus 된 셀의 행과 열에 해당하는 헤더 부분이 하이라이트 되도록 설정. 또한 focus 된 셀의 행과 열이 좌측 상단에 표시 되도록 설정.
  
  ![cellnumber](https://github.com/Jiiker/spread_sheet/assets/100774811/525af0a4-323f-4949-92dd-988706ca0123)
  
## [Export 버튼]
  
  ![캡처](https://github.com/Jiiker/spread_sheet/assets/100774811/cab69be9-1a96-40e0-bb8a-2ca0de945e23)
  - Export 버튼 클릭시 이벤트 설정.
  - 해당 spreadsheet의 blob을 만들어 주고, 해당 blob의 url을 생성 해줌.
  - a 태그로 element 하나를 만든 뒤 해당 element가 위의 url을 참조하도록 만들고, 클릭 시 'spreadsheet.csv'로 다운로드 되도록 설정.
  - 특별한 입력 없이 바로 해당 element 클릭되도록 설정.
