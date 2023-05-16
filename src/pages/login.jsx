import { Container } from "../UI/Container";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LayoutDefault } from "../components/LayoutDefault";
import { LoginWidgets } from "../widgets/AuthorizationWidgets/LoginWidgets";

const LoginPage = () => {
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Вход',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
                <LoginWidgets></LoginWidgets>
            </Container>
        </LayoutDefault>
    );
};

export default LoginPage;