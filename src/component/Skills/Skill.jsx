import { skills } from "../../data/constant";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: realtive;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: white;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skills = styled.div`
  width: 100%;
  max-width: 500px;
  background: #171721;
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;
const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: gray;
  margin-bottom: 20px;
  text-align: center;
`;
const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #111180;
  border: 0.8px solid gray;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const IndividualSkill = ({ title, skills }) => {
  return (
    <Skills>
      <SkillTitle>{title}</SkillTitle>
      <SkillList>
        {skills.map((item, index) => (
          <SkillItem key={index}>
            <SkillImage src={item.image} />
            {item.name}
          </SkillItem>
        ))}
      </SkillList>
    </Skills>
  );
};

const Skill = () => {
  return (
    <Container id="skill">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Desc>
        <SkillContainer>
          {skills.map((skill, index) => (
            <IndividualSkill
              key={index}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};
export default Skill;
