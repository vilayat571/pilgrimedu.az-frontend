import Layout from "../../layout/Layout";
import Cover from "../../atoms/Main/Cover";
import "../../assets/styles/index.css";
import BodyOfMain from "../../components/Main/BodyOfMain";
import SEO from "../../modules/SEO";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#neticelerimiz") {
      const resultsSection = document.getElementById("neticelerimiz");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Layout>
      <SEO
        title="Pilgrim Edu - Xaricdə təhsil | Ana səhifə"
        description="Biz Pilgrim Education olaraq xaricdə təhsil, peşə-seçimi və xaricdə iş xidmətlərini təqdim edən və peşəkar komandadan ibarət olan bir Mərkəzik."
        name="Pilgrim Education"
        type="website"
        keywords="Xaricdə təhsil (Образование за границей), Study abroad (Обучение за границей), Xaricdə təhsil proqramları (Программы обучения за границей), Учеба за границей (Study abroad), Стипендии за границей (Scholarships abroad), Təqaüdlər (Стипендии), Xarici universitetlər (Иностранные университеты), Admission process (Процесс поступления), Peşə seçimi (Выбор профессии), Образовательные курсы (Educational courses), Xaricdə bakalavr (Бакалавриат за границей), Master’s programs abroad (Магистратура за границей), Xaricdə doktorantura (Докторантура за границей), Learning languages abroad (Изучение языков за границей), Xaricdə dil kursları (Языковые курсы за границей), Student visa (Студенческая виза), Təhsil vizası (Виза для обучения), Living costs abroad (Стоимость жизни за границей), Xaricdə yaşayış xərcləri (Расходы на жизнь за границей), University rankings (Рейтинги университетов), Xaricdə universitet reytinqləri (Рейтинги вузов за границей), Education consultants (Образовательные консультанты), Təhsil məsləhətçiləri (Консультанты по образованию), Application tips (Советы по подаче заявлений), Xaricdə müraciət məsləhətləri (Советы по подаче заявлений за границей), Cultural exchange (Культурный обмен), Mədəniyyət mübadiləsi (Культурный обмен), International students (Международные студенты), Beynəlxalq tələbələr (Международные студенты), Study destinations (Направления для учебы), Təhsil məqsədli yerlər (Направления для учебы), Scholarships for Azerbaijani students (Стипендии для азербайджанских студентов), Azərbaycan tələbələri üçün təqaüdlər (Стипендии для студентов из Азербайджана), Online courses (Онлайн курсы), Onlayn kurslar (Онлайн курсы), Internship programs (Программы стажировок), Staj proqramları (Программы стажировок), Student life abroad (Студенческая жизнь за границей), Xaricdə tələbə həyatı (Студенческая жизнь за границей), Work while studying (Работа во время учебы), Təhsil zamanı iş (Работа во время учебы), Educational fairs (Образовательные ярмарки), Təhsil sərgiləri (Образовательные выставки), Networking opportunities (Возможности для налаживания контактов), Şəbəkələşmə imkanları (Возможности для налаживания контактов), Post-study work visa (Виза для работы после учебы), Təhsildən sonra vizası (Виза для работы после учебы), Tips for adapting (Советы по адаптации), Uyğunlaşma üçün məsləhətlər (Советы по адаптации), Future career opportunities (Будущие карьерные возможности)."
      />
      <Cover />
      <BodyOfMain />
    </Layout>
  );
}

export default App;
