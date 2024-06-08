import React from 'react';

// HOC withLoadingIndicator
const withLoadingIndicator = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>; // Здесь может быть любой индикатор загрузки
    }
    return <Component {...props} />;
  };
};

// Пример компонента, который будет обернут HOC
const MyComponent = ({ data }) => {
  return <div>{data}</div>;
};

// Оборачиваем MyComponent в HOC
const MyComponentWithLoading = withLoadingIndicator(MyComponent);

// Использование MyComponentWithLoading в приложении
class Apps extends React.Component {
  state = {
    isLoading: true,
    data: null,
  };

  componentDidMount() {
    // Имитация загрузки данных
    setTimeout(() => {
      this.setState({ isLoading: false, data: 'Загруженные данные' });
    }, 2000);
  }

  render() {
    const { isLoading, data } = this.state;
    return <MyComponentWithLoading isLoading={isLoading} data={data} />;
  }
}

export default Apps;


