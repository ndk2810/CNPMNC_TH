INSERT INTO DIADIEM(TenDiaDiem, HinhAnhDiaDiem, GioiThieu)
Values (N'Hà Nội', (SELECT * FROM OPENROWSET(BULK N'D:\ImageXe\xe-4-cho.jpg', SINGLE_BLOB) as HinhAnhDiaDiem), N'Thủ đô hà nội gt')