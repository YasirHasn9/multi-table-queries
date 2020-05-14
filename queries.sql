-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select  * from  ProductDetails_V as p;
select  p.ProductName , c.CategoryName from  ProductDetails_V as p
join Category as c
on p.CategoryId = c.id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id , s.CompanyName from "Order"  as o
join Shipper as s 
on o.ShipVia = s.id
where o.OrderDate < "2012-08-09" ;
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT  p.ProductName , count(*) from "OrderDetail" as o
       join ProductDetails_V as p
	   on o.ProductId = p.id
where o.OrderId = 10251
GROUP by p.ProductName
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
